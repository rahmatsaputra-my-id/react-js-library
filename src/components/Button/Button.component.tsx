import {colors} from '@rahmatsaputra-my-id/global-assets';
import {LoadingSpinner} from '../LoadingSpinner';
import {styles} from './Button.component.styles';
import {IButtonProps} from './Button.types';

const Button = ({
  backgroundColor = colors.black,
  bold = false,
  borderRadius = 8,
  bottom = 0,
  center = true,
  disabled = false,
  isLoading = false,
  label,
  left = 0,
  onPress = () => {},
  padding = 16,
  right = 0,
  size = 16,
  style = {},
  top = 0,
  transparent = false,
  outlineColor = false,
  ...props
}: IButtonProps): JSX.Element => {
  const isDisabled = disabled || isLoading;
  const isOutline = Boolean(outlineColor);
  const computedBackgroundColor = (() => {
    if (isDisabled) return colors.lightGray;
    if (transparent) return 'transparent';
    if (isOutline) return colors.white;

    return backgroundColor;
  })();

  const buttonStyle: React.CSSProperties = {
    backgroundColor: computedBackgroundColor,
    border: isOutline ? `1px solid ${outlineColor}` : 'none',
    borderRadius,
    color: isOutline ? outlineColor : colors.white,
    fontSize: size,
    fontWeight: bold ? 'bold' : 'normal',
    marginTop: top,
    marginRight: right,
    marginBottom: bottom,
    marginLeft: left,
    outline: !outlineColor && 'none',
    padding,
    textAlign: center ? 'center' : 'left',
    ...style,
    ...styles.content,
  };

  return (
    <button
      type="submit"
      disabled={isDisabled}
      onClick={onPress}
      style={buttonStyle}
      {...props}>
      {isLoading ? <LoadingSpinner loadingType={'section-s'} /> : label}
    </button>
  );
};

export default Button;
