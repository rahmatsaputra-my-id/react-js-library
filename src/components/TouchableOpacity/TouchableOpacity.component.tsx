import {ITouchableOpacityProps} from './TouchableOpacity.types';
import {styles} from './TouchableOpacity.component.styles';

const TouchableOpacity = ({
  children,
  onPress,
  style,
  disabled = false,
  ...props
}: ITouchableOpacityProps & {disabled?: boolean}): JSX.Element | null => {
  const handleOnPress = (event: React.MouseEvent) => {
    if (!disabled && onPress) {
      onPress(event);
    }
  };

  return (
    <div
      onClick={handleOnPress}
      style={{
        ...styles.content,
        ...style,
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
      {...props}>
      {children}
    </div>
  );
};

export default TouchableOpacity;
