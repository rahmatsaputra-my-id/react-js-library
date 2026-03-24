import { colors } from '@rahmatsaputra-my-id/global-assets';
import { withOpacity } from '@rahmatsaputra-my-id/global-assets/dist/COLORS';

export const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 5,
    backgroundColor: withOpacity(colors.black, 0.8),
  },
  card: {
    maxWidth: '60%',
    padding: 24,
    borderRadius: 8,
    backgroundColor: colors.white,
    width: 300,
    justifyContent: 'space-between',
  },
  headerTitle: {
    alignSelf: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerDescription: {
    alignSelf: 'center',
    marginBottom: 50,
    fontSize: 18,
  },
  buttonPositive: {
    width: '100%',
  },
  buttonNegative: {
    width: '100%',
    marginBottom: 12,
  },
};
