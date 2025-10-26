import { CSSProperties } from 'react';

export interface IPopUpData {
  title?: string;
  description?: string;
  labelDecline?: string;
  labelAccept?: string;
  onPressDecline?: () => void;
  onPressAccept?: () => void;
}

export interface IPopUpProps {
  backgroundButtonColor?: string;
  isLoading?: boolean;
  popUpData?: IPopUpData;
  visible?: boolean;
  styleContainer?: CSSProperties;
}