import React from 'react';
import * as Iconsax from 'iconsax-reactjs';
import {IconProps} from './Icons.types';
import {colorMap, sizeMap} from './Icon.styles';

export const Icon = ({
  name,
  variant = 'Linear',
  size = 'md',
  color = 'primary',
  customColor,
}: IconProps) => {
  const IconComponent = Iconsax[name] as React.ElementType;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconsax-react`);
    return null;
  }

  const iconSize = typeof size === 'number' ? size : sizeMap[size];
  const iconColor = customColor || colorMap[color];

  return <IconComponent size={iconSize} color={iconColor} variant={variant} />;
};

export default Icon;
