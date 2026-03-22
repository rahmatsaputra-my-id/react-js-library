import { colors } from '@rahmatsaputra-my-id/global-assets';
import { StyleMap } from '../../BottomSheet/BottomSheet.component.types';
import { withOpacity } from '@rahmatsaputra-my-id/global-assets/dist/COLORS';

export const styles: StyleMap = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: withOpacity(colors.black, 0.3),
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  sheet: {
    backgroundColor: colors.white,
    width: '100%',
    maxWidth: 390,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    boxShadow: `0 -2px 10px ${withOpacity(colors.black, 0.15)}`,
    animation: 'slideUp 0.3s ease-out',
    paddingBottom: `calc(20px + env(safe-area-inset-bottom, 0px))`,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${colors.lightGray}`,
    paddingBottom: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButton: {
    background: 'transparent',
    border: 'none',
    fontSize: 24,
    lineHeight: 1,
    cursor: 'pointer',
  },
  content: {
    maxHeight: '60vh',
    overflowY: 'auto',
  },
  contentBottomSheet: {
    marginTop: 8,
    marginBottom: 16,
  },
};