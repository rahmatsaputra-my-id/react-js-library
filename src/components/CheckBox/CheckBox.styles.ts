import { CSSProperties } from 'react';

export const styles = {
  label: {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none' as CSSProperties['userSelect'],
  } as CSSProperties,
  input: {
    width: 18,
    height: 18,
    marginRight: 8,
  } as CSSProperties,
};