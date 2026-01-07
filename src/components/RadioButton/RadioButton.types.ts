export interface SingleRadioButtonProps {
  value: string | number;
  selectedOption: string | number;
  handleChange: (value: string | number) => void;
  children: React.ReactNode;
}

export interface RadioButtonProps {
  label: string;
  options: Array<{ [key: string]: any }>;
  selectedValue: string | number;
  onSelect?: (value: string | number) => void;
  keyField?: string;
  valueField?: string;
  styleContainer?: React.CSSProperties;
  renderItem?: (item: any) => React.ReactNode;
}