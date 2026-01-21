import React, {useState} from 'react';
import {RadioButtonMultipleProps} from './RadioButtonMultiple.types';
import {View} from '../View';
import {Text} from '../Text';
import {styles} from './RadioButtonMultiple.component.styles';
import {RadioButtonSingle} from '../RadioButtonSingle';

const RadioButtonMultiple: React.FC<RadioButtonMultipleProps> = ({
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
        <RadioButtonSingle
          key={item[keyField] || index}
          value={item[valueField]}
          selectedOption={selectedOption}
          handleChange={handleChange}>
          {renderItem ? (
            renderItem(item)
          ) : (
            <Text type="normal_14">{item[valueField]}</Text>
          )}
        </RadioButtonSingle>
      ))}
    </View>
  );
};

export default RadioButtonMultiple;
