import {StyleMap} from './BottomSheet.component.types';

export const styles: StyleMap = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  sheet: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 390,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.15)',
    animation: 'slideUp 0.3s ease-out',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #eee',
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
};