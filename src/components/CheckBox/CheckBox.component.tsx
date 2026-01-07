import React from 'react';
import {CheckboxProps} from './CheckBox.types';
import {styles} from './CheckBox.styles';

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  handleOnChecked,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (handleOnChecked) {
      handleOnChecked(event.target.checked);
    }
  };

  return (
    <label
      style={{
        ...styles.label,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}>
      <input
        type="checkbox"
        checked={disabled ? false : checked}
        disabled={disabled}
        onChange={handleChange}
        style={{
          ...styles.input,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      />
    </label>
  );
};

export default Checkbox;
