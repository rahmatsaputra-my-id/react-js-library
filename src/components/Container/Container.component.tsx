import {IContainerProps} from './Container.types';
import {styles} from './Container.component.styles';
import {View} from '../View';

const Container = ({
  children,
  containerStyle,
  contentStyle,
}: IContainerProps): JSX.Element => (
  <View style={{...styles.container, containerStyle}}>
    <View style={{...styles.content, contentStyle}}>{children}</View>
  </View>
);

export default Container;
