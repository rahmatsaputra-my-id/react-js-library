export interface ITextInputProps {
  borderColor?: string;
  borderRadius?: number;
  bottom?: number;
  center?: boolean;
  label?: boolean | string;
  labelError?: boolean | string;
  left?: number;
  multiline?: boolean;
  onBlur?: any;
  onChange?: any;
  onKeyPress?: any;
  padding?: number;
  placeholder?: string;
  right?: number;
  rows?: number;
  style?: any;
  styleLabel?: any;
  styleTextInput?: any;
  top?: number;
  type?: string;
  value?: any;
  handleOnScanQr?: (data?: string | null) => void;
}
