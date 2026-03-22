import { colors } from '@rahmatsaputra-my-id/global-assets';

export const styles = {
  badgeContainer: {
    position: 'absolute',
    zIndex: 1,
    pointerEvents: 'none',
  },
  ribbon: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '150px',
    height: '150px',
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    left: -28,
    top: 10,
    transform: 'rotate(-45deg)',
    background: `linear-gradient(145deg, ${colors.red[400]}, ${colors.red[600]})`,
    color: colors.white,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 2,
    paddingBottom: 2,
    fontWeight: 'bold',
    fontSize: 13,
    boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
    borderTopRightRadius: '8px',
    borderBottomLeftRadius: '8px',
  },
};