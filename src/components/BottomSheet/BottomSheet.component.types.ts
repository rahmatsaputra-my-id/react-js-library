import type {ReactNode, CSSProperties} from 'react';

export interface BottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
  containerStyles?: any;
  showCloseButton: boolean;
}

export interface StyleMap {
  [key: string]: CSSProperties;
}