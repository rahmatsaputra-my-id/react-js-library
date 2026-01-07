import {CSSProperties} from 'react';

export interface SwitchProps {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  style?: CSSProperties;
  labelOn?: string;
  labelOff?: string;
  isShowLabelToogle?: boolean;
  withBorder?: boolean;
}