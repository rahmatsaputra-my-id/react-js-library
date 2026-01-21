export interface RadioButtonSingleProps {
  value: string | number;
  selectedOption: string | number;
  handleChange: (value: string | number) => void;
  children: React.ReactNode;
}
