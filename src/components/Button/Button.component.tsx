import {Colors} from '../../constants/Colors';
import {styles} from './Button.component.styles';
import {LoadingSpinner} from '../LoadingSpinner';

import {IButtonProps} from './Button.types';

const Button = ({
  backgroundColor = Colors.black,
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
}: IButtonProps): JSX.Element => (
  <>
    <button
      style={{
        backgroundColor:
          disabled || isLoading
            ? Colors.grey2
            : transparent || outlineColor
            ? 'transparent'
            : backgroundColor
            ? backgroundColor
            : Colors.black,
        border: outlineColor ? '1px solid rgba(0, 0, 0, 1)' : 'none',
        borderRadius,
        color: outlineColor ? outlineColor : Colors.white,
        fontSize: size,
        fontWeight: bold && 'bold',
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
        marginTop: top,
        outline: !outlineColor && 'none',
        padding,
        textAlign: center ? 'center' : 'left',
        ...style,
        ...styles.content,
      }}
      disabled={isLoading || disabled}
      onClick={onPress}
      type={'submit'}
      {...props}>
      {!isLoading ? label : null}
      {isLoading && <LoadingSpinner loadingType={false} />}
    </button>
  </>
);

export default Button;
