export interface DocumentUploaderProps {
  allowedExtensions?: string[];
  maxUpload?: number;
  maxSizeMB?: number;
  lang?: 'id' | 'us';
  maxData?: number;
  onChangeFiles?: (files: File[]) => void;
  listErrorMessage?: string[] | false;
  successMessage?: string | false;
}

export interface DocumentUploaderTranslation {
  allowedFormat: (formats: string) => string;
  errorInvalidFormat: (formats: string) => string;
  errorMaxSize: (size: number) => string;
  errorMaxUpload: (max: number) => string;
  maxData: (max: number) => string;
  maxSize: (size: number) => string;
  maxUpload: (max: number) => string;
  pickFile: string;
  remove: string;
  selectFileTitle: string;
  uploadingFiles: (count: number, max: number) => string;
  maximumLimit: string;
}
