import React from 'react';
import {TouchableOpacity} from '../TouchableOpacity';
import {SingleRadioButtonProps} from './RadioButton.types';
import {styles} from './RadioButton.styles';
import {View} from '../View';

const SingleRadioButton: React.FC<SingleRadioButtonProps> = ({
  value,
  handleChange,
  selectedOption,
  children,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handleChange(value)}
      style={styles.singleRadioContainer}>
      <View style={styles.outterBullet}>
        <View
          style={
            selectedOption === value
              ? styles.innerBulletActive
              : styles.innerBulletNotActive
          }
        />
      </View>

      <View style={{flex: 1}}>{children}</View>
    </TouchableOpacity>
  );
};

export {SingleRadioButton};
