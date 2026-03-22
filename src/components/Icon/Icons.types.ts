import * as Iconsax from 'iconsax-reactjs';

export type IconsaxIcons = keyof typeof Iconsax;

export type IconName = Exclude<IconsaxIcons, 'default'>;

export type IconVariant =
  | 'Linear'
  | 'Outline'
  | 'Bold'
  | 'Bulk'
  | 'Broken'
  | 'TwoTone';

export type IconColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'success'
  | 'white'
  | 'black';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;

export interface IconProps {
  name: IconName;
  variant?: IconVariant;
  size?: IconSize;
  color?: IconColor;
  customColor?: string;
}