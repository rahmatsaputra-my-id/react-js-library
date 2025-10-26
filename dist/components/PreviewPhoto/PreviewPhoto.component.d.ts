/// <reference types="react" />
import { IPreviewPhotoProps } from './PreviewPhoto.types';
declare const PhotoPreviewModal: ({ visible, onDismiss, imageUrl, }: IPreviewPhotoProps) => import("react").ReactPortal | null;
export default PhotoPreviewModal;
