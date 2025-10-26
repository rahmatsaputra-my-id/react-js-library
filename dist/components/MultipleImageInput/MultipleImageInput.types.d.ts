/// <reference types="react" />
export type TImage = {
    file: string;
    src: string;
};
export interface IMultipleImageInput {
    style?: React.CSSProperties;
    handleSelectedImages?: any;
    arrImage?: TImage[];
    label?: string;
}
