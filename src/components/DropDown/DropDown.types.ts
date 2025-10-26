export interface IDropDownProps {
  backgroundColor?: string;
  bottom?: number;
  color?: string;
  fontSize?: number;
  id?: string;
  left?: number;
  onChange?: any;
  options?: Array<TOptions>;
  right?: number;
  style?: any;
  top?: number;
}

type TOptions = {
  value?: string;
  label?: string;
};
