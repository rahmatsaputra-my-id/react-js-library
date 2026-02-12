import {Text} from '../Text';
import {View} from '../View';
import {styles} from './Switch.styles';
import {SwitchProps} from './Switch.types';
import './Switch.styles.css';

const Switch = ({
  label = '',
  checked = false,
  onChange,
  style,
  labelOn = 'ON',
  labelOff = 'OFF',
  isShowLabelToogle = true,
  withBorder = true,
}: SwitchProps) => {
  const styleContainer = withBorder
    ? styles.containerWithBorder
    : styles.container;

  return (
    <div
      style={{
        ...styleContainer,
        ...style,
      }}>
      {label && <Text>{label}</Text>}

      <View style={styles.toogleContainer}>
        <label className="switch">
          <input
            type="checkbox"
            checked={checked}
            onChange={e => onChange(e.target.checked)}
          />
          <span className="slider"></span>
        </label>

        {isShowLabelToogle && (
          <span style={styles.toogleText}>{checked ? labelOn : labelOff}</span>
        )}
      </View>
    </div>
  );
};

export default Switch;
