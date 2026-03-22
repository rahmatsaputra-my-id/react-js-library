import { colors } from '@rahmatsaputra-my-id/global-assets';

export const styles = {
  containerWithBorder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 4,
    border: `0.5px solid ${colors.lightGray}`,
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