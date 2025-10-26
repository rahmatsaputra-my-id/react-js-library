import React, {useRef, useState, useEffect, FC} from 'react';
import ReactDOM from 'react-dom';
import {ScannerCameraProps} from './ScannerQR.types';
import {cameraStyles} from './ScannerQR.component.styles';
import {TouchableOpacity} from '../TouchableOpacity';
import {Image} from '../Image';
import {View} from '../View';
import {Icons} from '../../constants/Images';
import {
  BrowserMultiFormatReader,
  DecodeHintType,
  BarcodeFormat,
} from '@zxing/library';

const ScannerCamera: FC<ScannerCameraProps> = ({onClose, onCapture}) => {
  // Tentukan tipe untuk useRef
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);

  // States
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [isFrontCamera, setIsFrontCamera] = useState<boolean>(true);
  const [hasRearCamera, setHasRearCamera] = useState<boolean>(false);
  const [isScanning, setIsScanning] = useState<boolean>(true);

  // Fungsi untuk memainkan suara beep menggunakan Web Audio API
  const playBeep = (): void => {
    try {
      // Pastikan AudioContext tersedia, menggunakan type assertion untuk webkit
      const AudioContext =
        window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) {
        console.warn('AudioContext not supported, cannot play beep.');
        return;
      }

      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      // Konfigurasi suara beep
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(1, audioCtx.currentTime);

      // Mulai dan hentikan suara
      oscillator.start();
      // Menghentikan setelah 0.15 detik
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + 0.15,
      );
      oscillator.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      console.error('Error playing beep sound:', e);
    }
  };

  // Inisialisasi ZXing Reader
  useEffect(() => {
    // Tentukan tipe untuk Map
    const hints = new Map<DecodeHintType, any>();

    // Konfigurasi untuk memindai format UPC dan format umum lainnya
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
      BarcodeFormat.EAN_13,
      BarcodeFormat.CODE_128,
    ]);

    codeReaderRef.current = new BrowserMultiFormatReader(hints);

    return () => {
      // Pastikan reader direset saat komponen dilepas
      if (codeReaderRef.current) {
        codeReaderRef.current.reset();
      }
    };
  }, []);

  const stopCamera = (): void => {
    const video = videoRef.current;

    // Pastikan video.srcObject adalah MediaStream
    if (video && video.srcObject instanceof MediaStream) {
      const stream: MediaStream = video.srcObject;
      stream.getTracks().forEach(track => track.stop());
      video.pause();
      video.srcObject = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    if (codeReaderRef.current) {
      codeReaderRef.current.reset();
    }
  };

  const openCamera = async (): Promise<void> => {
    try {
      if (!codeReaderRef.current) return;

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: isFrontCamera ? 'user' : 'environment',
        },
      };

      const stream: MediaStream = await navigator.mediaDevices.getUserMedia(
        constraints,
      );
      const video = videoRef.current;
      const codeReader = codeReaderRef.current;

      if (!video) {
        stream.getTracks().forEach(track => track.stop());
        return;
      }

      streamRef.current = stream;
      video.srcObject = stream;

      // Gunakan decodeFromStream untuk memulai pemindaian
      codeReader
        .decodeFromStream(stream, video, (result: any) => {
          if (result) {
            // Panggil playBeep saat berhasil
            playBeep();

            // Hentikan pemindaian dan kamera setelah berhasil
            if (isScanning) {
              // Beri sedikit jeda agar suara selesai dimainkan sebelum menutup
              setTimeout(() => {
                setIsScanning(false);
                codeReader.reset();
                stopCamera();
                onCapture(result.getText());
                onClose();
              }, 200);
            }
          }
        })
        .then(() => {
          setIsCameraReady(true);
        })
        .catch((err: Error) => {
          console.error('Error starting ZXing decoding or camera:', err);
          onClose();
        });
    } catch (err) {
      console.error('Error opening camera:', err);
      onClose();
    }
  };

  // Fungsi untuk selalu menggambar bounding box di tengah layar (visual feedback)
  const drawBoundingBox = () => {
    const boxWidth = 200;
    const boxHeight = 100;

    const top = (window.innerHeight - boxHeight) / 2;
    const left = (window.innerWidth - boxWidth) / 2;

    const boxStyle: React.CSSProperties = {
      position: 'absolute',
      top: `${top}px`,
      left: `${left}px`,
      width: `${boxWidth}px`,
      height: `${boxHeight}px`,
      border: '4px solid lime',
      boxShadow: '0 0 5px lime',
      pointerEvents: 'none',
    };

    return <div style={boxStyle} />;
  };

  useEffect(() => {
    const detectCameras = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(d => d.kind === 'videoinput');

        const rearCameraExists =
          videoDevices.some(
            device =>
              device.label.toLowerCase().includes('back') ||
              device.label.toLowerCase().includes('rear') ||
              device.label.toLowerCase().includes('environment'),
          ) || videoDevices.length > 1;

        setHasRearCamera(rearCameraExists);
        stream.getTracks().forEach(track => track.stop());
      } catch (error) {
        console.warn('Camera permission denied or error:', error);
        setHasRearCamera(false);
      }
    };

    detectCameras();
  }, []);

  // Set default camera after detecting rear camera availability
  useEffect(() => {
    if (hasRearCamera) {
      setIsFrontCamera(false); // default to rear camera if available
    } else {
      setIsFrontCamera(true); // default to front camera otherwise
    }
  }, [hasRearCamera]);

  // Effect untuk membuka kamera
  useEffect(() => {
    if (codeReaderRef.current) {
      codeReaderRef.current.reset();
    }
    setIsScanning(true);
    openCamera();
    window.addEventListener('beforeunload', stopCamera);
    return () => {
      stopCamera();
      window.removeEventListener('beforeunload', stopCamera);
    };
  }, [isFrontCamera]);

  const toggleCamera = (): void => {
    stopCamera();
    setIsFrontCamera(prev => !prev);
  };

  const handleOnPressClose = (): void => {
    stopCamera();
    onClose();
  };

  return ReactDOM.createPortal(
    <div style={cameraStyles.overlay as React.CSSProperties}>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          ...(cameraStyles.video as React.CSSProperties), // Type assertion untuk style object
          transform: isFrontCamera ? 'scaleX(-1)' : 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {drawBoundingBox()}

      {isCameraReady && hasRearCamera && (
        <TouchableOpacity
          onPress={toggleCamera}
          style={
            cameraStyles.floatingBottomRotateButtons as React.CSSProperties
          }>
          <View style={cameraStyles.captureRotateButton as React.CSSProperties}>
            <Image
              src={Icons.rotate}
              style={cameraStyles.rotateButton as React.CSSProperties}
            />
          </View>
        </TouchableOpacity>
      )}
      <button
        onClick={handleOnPressClose}
        style={cameraStyles.closeButton as React.CSSProperties}>
        ×
      </button>
    </div>,
    document.body,
  );
};

export default ScannerCamera;
