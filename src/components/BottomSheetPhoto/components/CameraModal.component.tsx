import React, {useRef, useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {CameraModalProps} from '../types/BottomSheetPhoto.types';
import {TouchableOpacity} from '../../TouchableOpacity';
import {cameraStyles} from '../styles/CameraModal.component.style';
import {View} from '../../View';
import {Image} from '../../Image';
import {Icons} from '../../../constants/Images';

const CameraModal: React.FC<CameraModalProps> = ({onClose, onCapture}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isCameraReady, setIsCameraReady] = useState<boolean>(false);
  const [isFrontCamera, setIsFrontCamera] = useState<boolean>(true);
  const [hasRearCamera, setHasRearCamera] = useState<boolean>(false);

  const stopCamera = () => {
    const video = videoRef.current;
    if (video && video.srcObject) {
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      video.pause();
      video.srcObject = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const openCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: isFrontCamera ? 'user' : 'environment',
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const video = videoRef.current;
      if (!video) return;

      video.srcObject = stream;
      streamRef.current = stream;
      video.onloadedmetadata = () => {
        video.play();
        setIsCameraReady(true);
      };
    } catch (err) {
      console.error('Error opening camera:', err);
      onClose();
    }
  };
  useEffect(() => {
    const detectCameras = async () => {
      try {
        // Request permission with any camera first
        const stream = await navigator.mediaDevices.getUserMedia({video: true});

        // Now labels should be populated
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

        // Stop the temporary stream immediately
        stream.getTracks().forEach(track => track.stop());
      } catch (error) {
        console.warn('Camera permission denied or error:', error);
        setHasRearCamera(false);
      }
    };

    detectCameras();
  }, []);

  useEffect(() => {
    if (hasRearCamera) {
      setIsFrontCamera(false); // default to rear camera if available
    } else {
      setIsFrontCamera(true); // default to front camera otherwise
    }
  }, [hasRearCamera]);

  useEffect(() => {
    openCamera();
    window.addEventListener('beforeunload', stopCamera);
    return () => {
      stopCamera();
      window.removeEventListener('beforeunload', stopCamera);
    };
  }, [isFrontCamera]);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    if (isFrontCamera) {
      // Flip canvas horizontally for front camera
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Reset transform after drawing
    if (isFrontCamera) {
      context.setTransform(1, 0, 0, 1, 0, 0);
    }

    const base64 = canvas.toDataURL('image/png');
    setCapturedImage(base64);

    setTimeout(() => stopCamera(), 100);
  };

  const handleUsePhoto = () => {
    onCapture(capturedImage);
    onClose();
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setIsCameraReady(false);
    setTimeout(() => openCamera(), 100);
  };

  const handleOnPressClose = () => {
    if (capturedImage) {
      handleRetake();
    } else {
      stopCamera();
      onClose();
    }
  };

  const toggleCamera = () => {
    setIsFrontCamera(prev => !prev);
  };

  return ReactDOM.createPortal(
    <div style={cameraStyles.overlay}>
      {capturedImage ? (
        <>
          <img
            src={capturedImage}
            alt="Captured"
            style={cameraStyles.previewImage}
          />
          <TouchableOpacity
            onPress={handleUsePhoto}
            style={cameraStyles.floatingBottomButtons}>
            <View style={cameraStyles.captureButton}>
              <View style={cameraStyles.innerButton}>
                <Image src={Icons.send} style={cameraStyles.sendButton} />
              </View>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{
              ...cameraStyles.video,
              transform: isFrontCamera ? 'scaleX(-1)' : 'none',
            }}
          />
          <canvas ref={canvasRef} style={{display: 'none'}} />
          {isCameraReady && (
            <>
              <TouchableOpacity
                onPress={handleCapture}
                style={cameraStyles.floatingBottomButtons}>
                <View style={cameraStyles.captureButton}>
                  <View style={cameraStyles.innerButton} />
                </View>
              </TouchableOpacity>

              {hasRearCamera && (
                <TouchableOpacity
                  onPress={toggleCamera}
                  style={cameraStyles.floatingBottomRotateButtons}>
                  <View style={cameraStyles.captureRotateButton}>
                    <Image
                      src={Icons.rotate}
                      style={cameraStyles.rotateButton}
                    />
                  </View>
                </TouchableOpacity>
              )}
            </>
          )}
        </>
      )}
      <button onClick={handleOnPressClose} style={cameraStyles.closeButton}>
        ×
      </button>
    </div>,
    document.body,
  );
};

export default CameraModal;
