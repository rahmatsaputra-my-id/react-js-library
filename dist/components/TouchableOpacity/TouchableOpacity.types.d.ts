import { ReactNode } from 'react';
export interface ITouchableOpacityProps {
    children: ReactNode;
    onPress?: any;
    style?: any;
    onTouchStart?: any;
    onTouchMove?: any;
    onTouchEnd?: any;
    onMouseDown?: any;
    onMouseMove?: any;
    onMouseUp?: any;
    onMouseLeave?: any;
}
