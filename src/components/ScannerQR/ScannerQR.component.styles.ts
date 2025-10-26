import {Colors} from '../../constants/Colors';

export const cameraStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: Colors.black,
    zIndex: 2000,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontSize: 24,
    backgroundColor: Colors.blackTransparent5,
    color: Colors.white,
    border: 'none',
    borderRadius: '50%',
    width: 36,
    height: 36,
    cursor: 'pointer',
    textAlign: 'center',
    lineHeight: '36px',
  },
  floatingBottomRotateButtons: {
    position: 'absolute',
    bottom: 65,
    left: '85%',
    transform: 'translate(-50%, 0)',
  },
  captureRotateButton: {
    height: 50,
    width: 50,
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotateButton: {
    height: 22,
    width: 22,
  },
};