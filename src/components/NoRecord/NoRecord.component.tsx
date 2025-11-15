import {Text} from '../Text';
import {View} from '../View';
import {styles} from './NoRecord.component.styles';
import {INoRecordProps} from './NoRecord.types';

const NoRecord = ({
  title,
  style = {},
  ...props
}: INoRecordProps): JSX.Element => {
  return (
    <View style={{...styles.container, ...style}} {...props}>
      <Text children={title ?? 'No Record Found'} />
    </View>
  );
};

export default NoRecord;
