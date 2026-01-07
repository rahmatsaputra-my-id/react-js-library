import { Colors } from '../../constants/Colors';

export const styles = {
  containerWithBorder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 4,
    border: `0.5px solid ${Colors.grey80}`,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },
  toogleContainer: {
    display: 'flex',
    flexDirection: 'row' as const,
    alignItems: 'center',
  },
  toogleText: {
    fontSize: '14px',
    marginLeft: 8,
  },
};