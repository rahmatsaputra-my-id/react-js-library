import React, {useState} from 'react';
import {ImageInputProps} from './ImageInput.component.types';
import {View} from '../View';
import {TouchableOpacity} from '../TouchableOpacity';
import {styles} from './ImageInput.component.styles';
import {Image} from '../Image';
import {Text} from '../Text';
import {PreviewPhoto} from '../PreviewPhoto';
import {BottomSheetPhoto} from '../BottomSheetPhoto';
import {ICONS} from '@rahmatsaputra-my-id/global-assets';

const ImageInput: React.FC<ImageInputProps> = ({
  label,
  subLabel,
  imageUrl = null,
  containerStyle,
  isMandatory = false,
  isEditAble = false,
  handleOnPickImage = (_base64?: string) => {},
}) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    imageUrl ?? undefined,
  );
  const [isVisibleBottomSheet, setIsVisibleBottomSheet] =
    useState<boolean>(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(false);

  const handleOnUpload = () => setIsVisibleBottomSheet(true);
  const handleOnPreview = () => setIsPreviewVisible(true);

  return (
    <View style={{...styles.container, ...containerStyle}}>
      <TouchableOpacity
        style={styles.containerImage}
        onPress={imagePreview ? handleOnPreview : handleOnUpload}>
        <Image
          src={imagePreview ? imagePreview : ICONS.camera}
          style={imagePreview ? styles.image : styles.iconCamera}
        />
      </TouchableOpacity>

      <View style={styles.containerText}>
        {label && (
          <Text type="bold_16" style={styles.label}>
            {label}
          </Text>
        )}
        {subLabel && <Text>{subLabel}</Text>}
        {isMandatory && <Text type="normal_14_red">{'*Wajib'}</Text>}
      </View>

      {isEditAble && imagePreview && (
        <TouchableOpacity onPress={handleOnUpload}>
          <Image src={ICONS.edit} style={styles.iconEdit} />
        </TouchableOpacity>
      )}

      <PreviewPhoto
        visible={isPreviewVisible}
        onDismiss={() => setIsPreviewVisible(false)}
        imageUrl={imagePreview}
      />

      <BottomSheetPhoto
        visible={isVisibleBottomSheet}
        onClose={() => setIsVisibleBottomSheet(false)}
        onUploadBase64={(base64: string | ArrayBuffer | null) => {
          if (typeof base64 === 'string') {
            setImagePreview(base64);
            if (typeof handleOnPickImage === 'function') {
              handleOnPickImage(base64);
            }
          }
        }}
      />
    </View>
  );
};

export default ImageInput;
