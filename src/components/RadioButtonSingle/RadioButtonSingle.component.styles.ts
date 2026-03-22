import { colors } from '@rahmatsaputra-my-id/global-assets';

export const styles = {
  singleRadioContainer: {
    display: 'flex',
    marginBottom: '10px',
    flexDirection: 'row',
    alignItems: 'center'
  },
  outterBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginRight: 8,
    border: '1px solid rgba(0, 0, 0, 0.6)',
  },

  innerBulletActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.black,
  },

  innerBulletNotActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.white,
  },
};