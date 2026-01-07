import { DocumentUploaderTranslation } from "./DocumentUploader.types";

const translationID: DocumentUploaderTranslation = {
  allowedFormat: formats => `Format: ${formats}`,
  errorInvalidFormat: formats => `File harus berformat: ${formats}`,
  errorMaxSize: size => `Ukuran file maksimal ${size}MB`,
  errorMaxUpload: max => `Maksimal upload ${max} file.`,
  maxData: max => `Data: ${max} baris`,
  maxSize: size => `Ukuran: ${size} MB`,
  maxUpload: max => `Upload: ${max} file`,
  pickFile: 'Pilih File',
  remove: 'Hapus',
  selectFileTitle: 'Pilih file mu di sini.',
  uploadingFiles: (count, max) => `Mengunggah File (${count}/${max})`,
  maximumLimit: 'Batas Maksimal:',
};

export default translationID;