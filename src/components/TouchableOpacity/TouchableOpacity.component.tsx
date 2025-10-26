import {ITouchableOpacityProps} from './TouchableOpacity.types';
import {styles} from './TouchableOpacity.component.styles';

const TouchableOpacity = ({
  children,
  onPress,
  style,
  ...props
}: ITouchableOpacityProps): JSX.Element | null => {
  const handleOnPress = () => {
    if (onPress) onPress();
  };

  return (
    <div
      onClick={handleOnPress}
      style={{...styles.content, ...style}}
      {...props}>
      {children}
    </div>
  );
};

export default TouchableOpacity;
