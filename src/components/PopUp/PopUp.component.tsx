import {View} from '../View';
import {Text} from '../Text';
import {Button} from '../Button';

import {IPopUpProps} from './PopUp.types';
import {styles} from './PopUp.component.styles';
import {Colors} from '../../constants/Colors';

const PopUp = ({
  backgroundButtonColor = Colors.black,
  isLoading = false,
  popUpData,
  visible = false,
  styleContainer = {},
}: IPopUpProps): JSX.Element | null => {
  if (!visible) return null;

  return (
    <View style={{...styles.container, ...styleContainer}}>
      <View style={styles.card}>
        <View>
          <Text style={styles.headerTitle}>{popUpData?.title}</Text>

          {popUpData?.description && (
            <Text style={styles.headerDescription}>
              {popUpData.description}
            </Text>
          )}
        </View>

        <View>
          {popUpData?.labelDecline && popUpData?.onPressDecline && (
            <Button
              style={styles.buttonNegative}
              backgroundColor={backgroundButtonColor}
              outlineColor={Colors.black}
              isLoading={isLoading}
              label={popUpData.labelDecline}
              onPress={popUpData.onPressDecline}
            />
          )}

          <Button
            style={styles.buttonPositive}
            backgroundColor={backgroundButtonColor}
            isLoading={isLoading}
            label={popUpData?.labelAccept}
            onPress={popUpData?.onPressAccept}
          />
        </View>
      </View>
    </View>
  );
};

export default PopUp;
