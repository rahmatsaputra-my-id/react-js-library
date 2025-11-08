import {Text} from '../Text';
import {View} from '../View';
import {Colors} from '../../constants/Colors';
import {ITextInputProps} from './TextInput.types';
import {useState} from 'react';
import {TouchableOpacity} from '../TouchableOpacity';
import {styles} from './TextInput.component.styles';
import {Image} from '../Image';
import {Icons} from '../../constants/Images';
import {ScannerQR} from '../ScannerQR';

const TextInput: React.FC<ITextInputProps> = ({
  borderColor = Colors.grey2,
  borderRadius = 4,
  bottom = 0,
  center = false,
  label = false,
  labelError = false,
  left = 0,
  multiline = false,
  padding = 0,
  right = 0,
  rows = 10,
  style = {},
  styleLabel = {},
  styleTextInput = {},
  top = 0,
  value,
  onChange,
  handleOnScanQr,
  isInputRupiah = false,
  ...props
}) => {
  const [isScannerVisible, setIsScannerVisible] = useState(false);

  const formatRupiahDisplay = (val: any) => {
    if (!val) return '';
    const clean = val.toString().replace(/\D/g, '');
    return clean.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const parseRupiahValue = (val: any) => val.toString().replace(/\D/g, '');

  const handleChange = (event: any) => {
    const inputVal = event?.target?.value || '';

    if (isInputRupiah) {
      const numericVal = parseRupiahValue(inputVal);
      const formatted = formatRupiahDisplay(numericVal);

      event.target.value = formatted;

      onChange({
        ...event,
        target: {...event.target, value: numericVal},
      });
    } else {
      onChange(event);
    }
  };

  const adjustedStyleTextInput = {
    ...styleTextInput,
    paddingRight: handleOnScanQr ? 40 : styleTextInput.paddingRight,
  };

  const stylesTextInput = {
    borderColor,
    borderRadius,
    textAlign: center ? 'center' : 'left',
    paddingBottom: multiline ? 16 : 8,
    ...styles.textArea,
    ...adjustedStyleTextInput,
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            marginTop: top,
            marginRight: right,
            marginBottom: bottom,
            marginLeft: left,
            padding,
            ...style,
          }}>
          {label && (
            <Text style={{...styles.label, ...styleLabel}} children={label} />
          )}

          <View>
            {multiline ? (
              <textarea
                rows={rows}
                type="text"
                style={stylesTextInput}
                value={isInputRupiah ? formatRupiahDisplay(value) : value ?? ''}
                onChange={handleChange}
                {...props}
              />
            ) : (
              <input
                type="text"
                style={stylesTextInput}
                value={isInputRupiah ? formatRupiahDisplay(value) : value ?? ''}
                onChange={handleChange}
                {...props}
              />
            )}
          </View>

          {labelError ? (
            <Text style={styles.labelError} children={labelError} />
          ) : null}
        </View>

        {handleOnScanQr && (
          <TouchableOpacity
            style={
              label
                ? styles.scanQrImageContainerWithLabel
                : styles.scanQrImageContainer
            }
            onPress={() => {
              handleOnScanQr();
              setIsScannerVisible(true);
            }}>
            <Image style={styles.scanQrImage} src={Icons.scan_qr} />
          </TouchableOpacity>
        )}
      </View>

      {isScannerVisible && (
        <ScannerQR
          onClose={() => setIsScannerVisible(false)}
          onCapture={data => handleOnScanQr && handleOnScanQr(data)}
        />
      )}
    </>
  );
};

export default TextInput;
