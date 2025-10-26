import { CSSProperties } from 'react';
export interface ISwipeableProps {
    children?: any;
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    style?: CSSProperties;
}
