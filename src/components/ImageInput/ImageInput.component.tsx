import {Icons} from '../../constants/Images';
import {Image} from '../Image';
import {ImageInputProps} from './ImageInput.component.types';
import {styles} from './ImageInput.component.styles';
import {Text} from '../Text';
import {TouchableOpacity} from '../TouchableOpacity';
import {View} from '../View';
import React from 'react';

const ImageInput: React.FC<ImageInputProps> = ({
  label,
  subLabel,
  imageUrl = null,
  handleOnUpload,
  handleOnPreview,
  containerStyle,
  isMandatory = false,
  isEditAble = false,
}) => {
  const renderScreen = () => (
    <View style={{...styles.container, ...containerStyle}}>
      <TouchableOpacity
        style={styles.containerImage}
        onPress={imageUrl ? handleOnPreview : handleOnUpload}>
        <Image
          src={imageUrl ? imageUrl : Icons.camera}
          style={imageUrl ? styles.image : styles.iconCamera}
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

      {isEditAble && imageUrl && (
        <TouchableOpacity onPress={handleOnUpload}>
          <Image src={Icons.edit} style={styles.iconEdit} />
        </TouchableOpacity>
      )}
    </View>
  );

  return renderScreen();
};

export default ImageInput;
