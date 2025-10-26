import type { ReactNode, CSSProperties } from 'react';
export interface BottomSheetProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
}
export interface StyleMap {
    [key: string]: CSSProperties;
}
