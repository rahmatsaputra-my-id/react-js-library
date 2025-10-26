import type { CSSProperties } from 'react';
import { Colors } from '../../constants/Colors';

export const styles: Record<string, CSSProperties> = {
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    paddingLeft: 32,
  },
  searchContainer: {
    justifyContent: 'space-between',
    position: 'relative',
  },
  closeSearchButton: {
    position: 'absolute',
    right: 0,
    height: 38,
    color: Colors.black,
    justifyContent: 'center',
    zIndex: 4,
  },
  scanQrImageContainer: {
    position: 'absolute',
    right: 0,
    height: 38,
    justifyContent: 'center',
    zIndex: 2,
    marginRight: 16,
  },
  closeSearchButtonImage: {
    height: 18,
    width: 18,
  },
  scanQrImage: {
    height: 24,
    width: 24,
  },
  iconSearch: {
    top: 10,
    position: 'absolute',
    zIndex: 1,
    paddingLeft: 12,
  },
};