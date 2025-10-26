import React, {useState, useEffect} from 'react';
import {IMultipleImageInput, TImage} from './MultipleImageInput.types';
import {Text} from '../Text';
import {View} from '../View';
import {styles} from './MultipleImageInput.component.styles';
import {PreviewPhoto} from '../PreviewPhoto';
import {BottomSheetPhoto} from '../BottomSheetPhoto';

const MultipleImageInput: React.FC<IMultipleImageInput> = ({
  style,
  handleSelectedImages,
  arrImage = [],
  label = 'Upload Gambar',
  ...props
}) => {
  const [images, setImages] = useState<TImage[]>([]);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isVisibleBottomSheet, setIsVisibleBottomSheet] =
    useState<boolean>(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);

  useEffect(() => {
    if (Array.isArray(arrImage)) {
      const initialImages = arrImage.map(item => ({
        file: item.file,
        src: item.file,
      }));
      setImages(initialImages);
    }
  }, [arrImage]);

  const handleChange = async (e: string) => {
    const newImages = [{file: e}];
    setImages((prevImages: any) => {
      const combined = [...prevImages, ...newImages];
      const unique = combined.filter(
        (img, idx) => combined.findIndex(i => i.src === img.src) === idx,
      );

      handleSelectedImages(unique.map(i => ({file: i.file})));

      return unique;
    });
  };

  const removeImage = (index: number) => {
    setImages(prevImages => {
      const updated = [...prevImages];
      updated.splice(index, 1);
      handleSelectedImages?.(updated.map(i => ({file: i.file})));

      return updated;
    });
  };

  return (
    <>
      <Text style={styles.title}>{label}</Text>
      <View style={{...styles.container, ...style}}>
        <div style={styles.card} {...props}>
          <div style={styles.previewContainer}>
            {images.map(({src}, index) => (
              <div key={index} style={styles.previewWrapper}>
                <button
                  onClick={() => removeImage(index)}
                  style={styles.closeButton}
                  aria-label="Remove image">
                  &times;
                </button>

                <img src={src} alt="preview" style={styles.previewImage} />

                <button
                  onClick={() => {
                    setImagePreview(src);
                    setIsPreviewVisible(true);
                  }}
                  style={styles.eyeButton}
                  aria-label="Preview image">
                  👁️
                </button>
              </div>
            ))}

            <div
              onClick={() => setIsVisibleBottomSheet(true)}
              style={styles.addButton}
              role="button"
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setIsVisibleBottomSheet(true);
                }
              }}
              aria-label="Add images">
              <span style={styles.plusSign}>+</span>
            </div>
          </div>
        </div>

        <PreviewPhoto
          visible={isPreviewVisible}
          onDismiss={() => setIsPreviewVisible(false)}
          imageUrl={imagePreview}
        />

        <BottomSheetPhoto
          visible={isVisibleBottomSheet}
          onClose={() => setIsVisibleBottomSheet(false)}
          title="Pemilihan Gambar"
          onUploadBase64={(data: any) => handleChange(data)}
        />
      </View>
    </>
  );
};

export default MultipleImageInput;
