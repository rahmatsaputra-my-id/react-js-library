import {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {styles} from './PreviewPhoto.styles';
import {IPreviewPhotoProps} from './PreviewPhoto.types';
import {Icons} from '../../constants/Images';

const PhotoPreviewModal = ({
  visible,
  onDismiss,
  imageUrl,
}: IPreviewPhotoProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDismiss();
      }
    };
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onDismiss]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div onClick={onDismiss} style={styles.backdrop}>
      <div onClick={e => e.stopPropagation()} style={styles.modalContent}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={''}
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = Icons.image_not_available;
            }}
            style={styles.image}
          />
        ) : (
          <p style={styles.noImageContainer}>No image provided</p>
        )}
      </div>
    </div>,
    document.body,
  );
};

export default PhotoPreviewModal;
