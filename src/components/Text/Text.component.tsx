import {Colors} from '../../constants/Colors';
import {styles} from './Text.styles';
import {ITextProps} from './Text.types';

const Text = ({
  bottom = 0,
  center = false,
  children,
  color = Colors.black,
  left = 0,
  right = 0,
  style = {},
  top = 0,
  type = 'normal_16',
  ...props
}: ITextProps): JSX.Element => (
  <>
    <p
      style={{
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
        color,
        textAlign: center ? 'center' : 'left',
        ...styles[type],
        ...style,
      }}
      {...props}>
      {children}
    </p>
  </>
);

export default Text;
