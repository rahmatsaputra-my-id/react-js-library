export interface ImageInputProps {
    label?: string;
    subLabel?: string;
    imageUrl?: string | null;
    handleOnUpload: () => void;
    handleOnPreview: () => void;
    containerStyle?: any;
    isMandatory?: boolean;
    isEditAble?: boolean;
}
