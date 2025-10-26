import React, {useState, useRef} from 'react';
import {Icons} from '../../constants/Images';
import {Image} from '../Image';
import {PreviewPhoto} from '../PreviewPhoto';
import {TouchableOpacity} from '../TouchableOpacity';
import {IImageSlider} from './ImageSlider.types';
import {styles} from './ImageSlider.component.styles';

const ImageSlider: React.FC<IImageSlider> = ({images, style}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);
  const startX = useRef<number>(0);
  const isSwiping = useRef<boolean>(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping.current) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;

    if (diff > 50) {
      prevSlide();
      isSwiping.current = false;
    } else if (diff < -50) {
      nextSlide();
      isSwiping.current = false;
    }
  };

  const handleTouchEnd = () => {
    isSwiping.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isSwiping.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isSwiping.current) return;
    const currentX = e.clientX;
    const diff = currentX - startX.current;

    if (diff > 50) {
      prevSlide();
      isSwiping.current = false;
    } else if (diff < -50) {
      nextSlide();
      isSwiping.current = false;
    }
  };

  const handleMouseUp = () => {
    isSwiping.current = false;
  };

  const handleMouseLeave = () => {
    isSwiping.current = false;
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      {images && images?.length > 0 ? (
        <TouchableOpacity
          onPress={() => setIsPreviewVisible(true)}
          style={{...styles.sliderContainer, ...style}}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}>
          <img
            src={images?.[currentIndex]?.file}
            alt={`slide-${currentIndex}`}
            style={styles.image}
            draggable={false}
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = Icons.image_not_available;
            }}
          />
          <div style={styles.counter}>
            {currentIndex + 1} / {images.length}
          </div>
        </TouchableOpacity>
      ) : (
        <Image src={''} style={{...styles.imageNotAvailable, ...style}} />
      )}

      <PreviewPhoto
        visible={isPreviewVisible}
        onDismiss={() => setIsPreviewVisible(false)}
        imageUrl={
          images.length > 0
            ? images?.[currentIndex]?.file
            : Icons.image_not_available
        }
      />
    </>
  );
};

export default ImageSlider;
