import { Colors } from '../../constants/Colors';

export const styles = {
  label: {
    marginBottom: 16,
  },
  singleRadioContainer: {
    display: 'flex',
    marginBottom: '10px',
    flexDirection: 'row',
  },
  outterBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginRight: 8,
    border: '1px solid rgba(0, 0, 0, 0.6)',
  },

  innerBulletActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.black100,
  },

  innerBulletNotActive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.white,
  },
};