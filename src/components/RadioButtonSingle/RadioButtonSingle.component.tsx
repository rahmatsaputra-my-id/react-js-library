import React from 'react';
import {TouchableOpacity} from '../TouchableOpacity';
import {RadioButtonSingleProps} from './RadioButtonSingle.types';
import {styles} from './RadioButtonSingle.component.styles';
import {View} from '../View';

const RadioButtonSingle: React.FC<RadioButtonSingleProps> = ({
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

export default RadioButtonSingle;
