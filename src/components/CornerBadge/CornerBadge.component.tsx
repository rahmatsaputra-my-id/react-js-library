import React from 'react';
import {View} from '../View';
import {Text} from '../Text';
import {styles} from './CornerBadge.styles';
import {CornerBadgeProps} from './CornerBadge.types';

const CornerBadge: React.FC<CornerBadgeProps> = ({
  text = 'NEW',
  visible = true,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.badgeContainer}>
      <View style={styles.ribbon}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default CornerBadge;
