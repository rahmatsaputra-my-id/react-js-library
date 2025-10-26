import { ReactNode } from 'react';
import { styles } from './Text.styles';
export interface ITextProps {
    bottom?: number;
    center?: boolean;
    children: ReactNode;
    color?: string;
    left?: number;
    right?: number;
    style?: any;
    top?: number;
    type?: keyof typeof styles;
}
