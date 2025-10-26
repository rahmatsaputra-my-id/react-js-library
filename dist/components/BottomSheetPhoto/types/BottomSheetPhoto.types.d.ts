export interface CameraModalProps {
    onClose: () => void;
    onCapture: (base64: string | null) => void;
}
export interface BottomSheetPhotoProps {
    visible: boolean;
    onClose: () => void;
    title?: string;
    onUploadBase64?: (base64: string | ArrayBuffer | null, file: File | null) => void;
}
