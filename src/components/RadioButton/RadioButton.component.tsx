import React, {useState} from 'react';
import {RadioButtonProps} from './RadioButton.types';
import {View} from '../View';
import {Text} from '../Text';
import {SingleRadioButton} from './SingleRadioButton.component';
import {styles} from './RadioButton.styles';

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  options = [],
  selectedValue,
  onSelect,
  keyField = 'key',
  valueField = 'value',
  styleContainer,
  renderItem,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | number>(
    selectedValue,
  );

  const handleChange = (value: string | number) => {
    setSelectedOption(value);
    if (onSelect) onSelect(value);
  };

  return (
    <View style={{...styleContainer}}>
      <Text type="bold_16" style={styles.label}>
        {label}
      </Text>

      {options.map((item, index) => (
        <SingleRadioButton
          key={item[keyField] || index}
          value={item[valueField]}
          selectedOption={selectedOption}
          handleChange={handleChange}>
          {renderItem ? (
            renderItem(item)
          ) : (
            <Text type="normal_14">{item[valueField]}</Text>
          )}
        </SingleRadioButton>
      ))}
    </View>
  );
};

export default RadioButton;
