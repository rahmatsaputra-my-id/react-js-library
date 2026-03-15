import {useState, KeyboardEvent} from 'react';
import {SearchBoxProps} from './SearchBox.types';
import {styles} from './SearchBox.styles';
import {View} from '../View';
import {TouchableOpacity} from '../TouchableOpacity';
import {Text} from '../Text';
import {TextInput} from '../TextInput';
import {Image} from '../Image';
import {ScannerQR} from '../ScannerQR';
import {icons} from '@rahmatsaputra-my-id/global-assets';

const SearchBox = ({
  handleOnSubmitSearch,
  handleOnClearSearch,
  placeholder = 'Type to search ...',
  value,
  onChange,
  handleOnScanQr,
  ...props
}: SearchBoxProps) => {
  const [isScannerVisible, setIsScannerVisible] = useState(false);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && handleOnSubmitSearch) {
      handleOnSubmitSearch(value);
    }
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => handleOnSubmitSearch(value)}>
          <Text style={styles.iconSearch}>🔍</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.textInputContainer}
          styleTextInput={{
            ...styles.textInput,
            paddingRight: handleOnScanQr ? 72 : 40,
          }}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
          value={value}
          onChange={onChange}
          onBlur={() => {
            if (handleOnSubmitSearch && !handleOnScanQr) {
              handleOnSubmitSearch(value);
            }
          }}
          {...props}
        />

        {value?.length > 0 && (
          <TouchableOpacity
            style={styles.closeSearchButton}
            onPress={handleOnClearSearch}>
            <Image
              style={{
                ...styles.closeSearchButtonImage,
                paddingRight: handleOnScanQr ? 48 : 16,
              }}
              src={icons.close ?? ''}
            />
          </TouchableOpacity>
        )}

        {handleOnScanQr && (
          <TouchableOpacity
            style={styles.scanQrImageContainer}
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
          onCapture={data => handleOnScanQr?.(data)}
        />
      )}
    </>
  );
};

export default SearchBox;
