import {IViewProps} from './View.types';

const View = ({
  bottom = 0,
  children,
  display = 'flex',
  flexDirection = 'column',
  left = 0,
  right = 0,
  style = {},
  top = 0,
  ...props
}: IViewProps): JSX.Element => (
  <>
    <div
      style={{
        display,
        flexDirection,
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
        ...style,
      }}
      {...props}>
      {children}
    </div>
  </>
);

export default View;
