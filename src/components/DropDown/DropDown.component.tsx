import {colors} from '@rahmatsaputra-my-id/global-assets';
import {IDropDownProps} from './DropDown.types';

const DropDown = ({
  backgroundColor = colors.blue[600],
  bottom = 0,
  color = colors.gray,
  fontSize = 12,
  id = 'dropdown',
  left = 0,
  onChange = () => {},
  options = [
    {value: 'y', label: 'Present'},
    {value: 'n', label: 'Not Present'},
  ],
  right = 0,
  style = {},
  top = 0,
  ...props
}: IDropDownProps): JSX.Element => (
  <select
    id={id}
    onChange={onChange}
    {...props}
    style={{
      backgroundColor,
      color,
      fontSize,
      marginTop: top,
      marginRight: right,
      marginBottom: bottom,
      marginLeft: left,
      ...style,
    }}>
    {options?.map(({value, label}, idx) => (
      <option key={idx} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default DropDown;
