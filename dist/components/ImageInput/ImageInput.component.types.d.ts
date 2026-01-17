export interface ImageInputProps {
    label?: string;
    subLabel?: string;
    imageUrl?: string;
    containerStyle?: any;
    isMandatory?: boolean;
    isEditAble?: boolean;
    handleOnPickImage: () => void;
}
