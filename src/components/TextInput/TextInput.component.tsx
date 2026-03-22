import {Text} from '../Text';
import {View} from '../View';
// import {Colors} from '../../constants/Colors';
import {ITextInputProps} from './TextInput.types';
import {useState, useRef, useEffect} from 'react';
import {TouchableOpacity} from '../TouchableOpacity';
import {styles} from './TextInput.component.styles';
import {Image} from '../Image';
import {ScannerQR} from '../ScannerQR';
import {colors, icons} from '@rahmatsaputra-my-id/global-assets';
import {Icon} from '../Icon';

const TextInput: React.FC<ITextInputProps> = ({
  borderColor = colors.gray,
  borderRadius = 4,
  bottom = 0,
  center = false,
  label = false,
  labelError = false,
  left = 0,
  multiline = false,
  padding = 0,
  right = 0,
  rows = 1,
  maxRows = 4,
  style = {},
  styleLabel = {},
  styleTextInput = {},
  top = 0,
  value,
  onChange,
  handleOnScanQr,
  isInputRupiah = false,
  isInputNumber = false,
  isInputPaswword = false,
  ...props
}) => {
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const formatRupiahDisplay = (val: any) => {
    if (!val) return '';
    const clean = val.toString().replace(/\D/g, '');
    return clean.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const parseRupiahValue = (val: any) => val.toString().replace(/\D/g, '');

  const handleChange = (event: any) => {
    let inputVal = event?.target?.value || '';

    if (isInputNumber) {
      inputVal = inputVal.replace(/\D/g, '');
      event.target.value = inputVal;
    }

    if (multiline && textAreaRef.current) {
      autoResize(textAreaRef.current);
    }

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

  const autoResize = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    const lineHeight = parseInt(
      window.getComputedStyle(el).lineHeight || '20',
      10,
    );
    const maxHeight = lineHeight * maxRows;
    const newHeight = Math.min(el.scrollHeight, maxHeight);
    el.style.height = `${newHeight}px`;
    el.style.overflowY = el.scrollHeight > maxHeight ? 'auto' : 'hidden';
  };

  useEffect(() => {
    if (multiline && textAreaRef.current) {
      autoResize(textAreaRef.current);
    }
  }, [value, multiline]);

  const adjustedStyleTextInput = {
    ...styleTextInput,
    paddingRight: handleOnScanQr ? 40 : styleTextInput.paddingRight,
    resize: 'none',
  };

  const stylesTextInput = {
    borderColor,
    borderRadius,
    textAlign: center ? 'center' : 'left',
    paddingBottom: multiline ? 16 : 8,
    ...styles.textArea,
    ...adjustedStyleTextInput,
  };

  const inputType = isInputPaswword
    ? showPassword
      ? 'text'
      : 'password'
    : isInputRupiah || isInputNumber
      ? 'tel'
      : 'text';

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
                ref={textAreaRef}
                rows={rows}
                inputMode={isInputNumber ? 'numeric' : 'text'}
                style={stylesTextInput}
                value={
                  isInputRupiah ? formatRupiahDisplay(value) : (value ?? '')
                }
                onChange={handleChange}
                {...props}
              />
            ) : (
              <input
                type={inputType}
                inputMode={isInputNumber ? 'numeric' : 'text'}
                style={stylesTextInput}
                value={
                  isInputRupiah ? formatRupiahDisplay(value) : (value ?? '')
                }
                onChange={handleChange}
                {...props}
              />
            )}

            {isInputPaswword && (
              <TouchableOpacity
                style={styles.eye}
                onPress={() => setShowPassword(prev => !prev)}>
                <Icon size={20} name={showPassword ? 'Eye' : 'EyeSlash'} />
              </TouchableOpacity>
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
            <Image style={styles.scanQrImage} src={icons.scan_qr} />
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
