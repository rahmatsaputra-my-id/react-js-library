import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BottomSheetProps} from './BottomSheet.component.types';
import {styles} from './BottomSheet.component.styles';

const BottomSheet: React.FC<BottomSheetProps> = ({
  visible,
  onClose,
  title = '',
  children,
}) => {
  const [paddingBottom, setPaddingBottom] = useState(20);

  useEffect(() => {
    function detectPadding() {
      let basePadding = 20;

      if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        basePadding = 80; // default safe area for iPhones with notch
      } else if (/Android/.test(navigator.userAgent)) {
        basePadding = 50;
      }

      // Then override with measured safe area inset if available
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.bottom = '0';
      div.style.height = 'env(safe-area-inset-bottom)';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      const computedHeight = window.getComputedStyle(div).height;
      const insetBottom = parseInt(computedHeight, 10);
      document.body.removeChild(div);

      setPaddingBottom(Math.max(basePadding, insetBottom || 0));
    }

    detectPadding();
    window.addEventListener('resize', detectPadding);
    return () => window.removeEventListener('resize', detectPadding);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (visible) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return ReactDOM.createPortal(
    <div style={styles.backdrop} onClick={onClose}>
      <div
        style={{...styles.sheet, paddingBottom: paddingBottom}}
        onClick={e => e.stopPropagation()}>
        <div style={styles.header}>
          <span style={styles.title}>{title}</span>
          <button style={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div style={styles.content}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default BottomSheet;
