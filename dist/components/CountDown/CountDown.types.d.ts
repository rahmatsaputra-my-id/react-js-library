import { CSSProperties } from 'react';
export interface ICountDownProps {
    cardStyle?: CSSProperties;
    containerStyle?: CSSProperties;
    fontStyle?: CSSProperties;
    weddingDate?: any;
}
export type TItems = {
    label?: string;
    value?: number;
};
