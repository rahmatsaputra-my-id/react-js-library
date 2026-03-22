
import { colors } from '@rahmatsaputra-my-id/global-assets';
import { IconSize, IconColor } from './Icons.types';

export const sizeMap: Record<Exclude<IconSize, number>, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
  '2xl': 40,
};

export const colorMap: Record<IconColor, string> = {
  primary: colors.primary[500],
  secondary: colors.secondary[500],
  error: colors.error[500],
  warning: colors.warning[500],
  success: colors.success[500],
  white: colors.white,
  black: colors.black,
};