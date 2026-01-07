import { DocumentUploaderTranslation } from "./DocumentUploader.types";

const translationUS: DocumentUploaderTranslation = {
  allowedFormat: formats => `Allowed formats: ${formats}`,
  errorInvalidFormat: formats => `File must be in format: ${formats}`,
  errorMaxSize: size => `Maximum file size is ${size}MB`,
  errorMaxUpload: max => `Maximum upload is ${max} files.`,
  maxData: max => `Data: ${max} rows`,
  maxSize: size => `Size: ${size} MB`,
  maxUpload: max => `Upload: ${max} files`,
  pickFile: 'Pick File',
  remove: 'Remove',
  selectFileTitle: 'Choose your file here.',
  uploadingFiles: (count, max) => `Uploading Files (${count}/${max})`,
  maximumLimit: 'Maximum Limit:',
};

export default translationUS;