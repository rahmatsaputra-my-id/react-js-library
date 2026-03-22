import { colors } from '@rahmatsaputra-my-id/global-assets';
import { withOpacity } from '@rahmatsaputra-my-id/global-assets/dist/COLORS';
import React from 'react';

export const styles: {[key: string]: React.CSSProperties} = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: withOpacity(colors.black, 0.85),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: colors.black,
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  noImageContainer: {
    color: colors.white,
    textAlign: 'center'
  }
};
