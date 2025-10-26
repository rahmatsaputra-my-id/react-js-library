import React from "react";
import { Colors } from "../../constants/Colors";

export const styles: {[key: string]: React.CSSProperties} = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: Colors.blackTransparent85,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  modalContent: {
    width: '90%',
    height: '70%',
    backgroundColor: Colors.black,
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
    color:Colors.white,
    textAlign: 'center'
  }
};
