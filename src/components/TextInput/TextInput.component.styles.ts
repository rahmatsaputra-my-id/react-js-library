import { colors } from '@rahmatsaputra-my-id/global-assets';

export const styles = {
  label: {
    marginBottom: 4,
    fontSize: 16,
  },
  labelError: {
    marginTop: 2,
    fontSize: 16,
    color: colors.red,
    maxWidth: 300,
  },
  textArea: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 16,
  },
  textInput: {
    padding: 8,
    fontSize: 16,
  },
  container: {
    justifyContent: 'space-between',
    position: 'relative',
  },
  scanQrImageContainer: {
    color: colors.black,
    height: 36,
    justifyContent: 'center',
    paddingRight: 12,
    position: 'absolute',
    right: 0,
    zIndex: 4,
  },
  scanQrImageContainerWithLabel: {
    color: colors.black,
    height: 36,
    justifyContent: 'center',
    paddingRight: 12,
    position: 'absolute',
    right: 0,
    top: 24,
    zIndex: 4,
  },
  scanQrImage: {
    height: 24,
    width: 24,
  },
  textInputEyesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  eye:{
    position: 'absolute',
    right: 10,
  }
};
