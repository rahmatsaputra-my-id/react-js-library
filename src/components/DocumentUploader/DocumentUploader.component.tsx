import {useRef, useState} from 'react';

import id from './translation.id';
import us from './translation.us';

import {styles} from './DocumentUploader.component.styles';
import {View} from '../View';
import {Text} from '../Text';
import {DocumentUploaderProps} from './DocumentUploader.types';

const translations = {id, us};

const DocumentUploader = ({
  allowedExtensions = ['.xlsx'],
  maxUpload = 1,
  maxSizeMB = 1,
  lang = 'us',
  maxData = 70,
  onChangeFiles = () => {},
  listErrorMessage = false,
  successMessage = false,
}: DocumentUploaderProps) => {
  const t = translations[lang] ?? translations.us;

  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (files.length >= maxUpload) {
      setError(t.errorMaxUpload(maxUpload));
      fileInputRef.current && (fileInputRef.current.value = '');
      return;
    }

    const isValidExt = allowedExtensions.some(ext =>
      file.name.toLowerCase().endsWith(ext.toLowerCase()),
    );

    if (!isValidExt) {
      setError(t.errorInvalidFormat(allowedExtensions.join(', ')));
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(t.errorMaxSize(maxSizeMB));
      return;
    }

    const updated = [...files, file];
    setFiles(updated);
    setError(null);
    onChangeFiles(updated);

    fileInputRef.current && (fileInputRef.current.value = '');
  };

  const handleRemove = (index: number) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    setError(null);
    onChangeFiles(updated);
  };

  const shortenFileName = (name: string, max = 25) => {
    if (name.length <= max) return name;
    const dot = name.lastIndexOf('.');
    const ext = dot !== -1 ? name.slice(dot) : '';
    return name.slice(0, max - ext.length - 3) + '...' + ext;
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.uploadBox}>
        <div style={styles.cloudIcon}>☁️</div>

        <p style={styles.title}>{t.selectFileTitle}</p>
        <p style={styles.subtitle}>
          {t.allowedFormat(allowedExtensions.join(', '))} — {t.maximumLimit}
        </p>

        <View style={styles.noteContainer}>
          <Text type="normal_14" style={styles.note}>
            {t.maxSize(maxSizeMB)}
          </Text>
          <Text type="normal_14" style={styles.note}>
            {t.maxUpload(maxUpload)}
          </Text>
          <Text type="normal_14" style={styles.note}>
            {t.maxData(maxData)}
          </Text>
        </View>

        <label
          style={{
            ...styles.button,
            backgroundColor: files.length >= maxUpload ? '#9ca3af' : '#f97316',
            cursor: files.length >= maxUpload ? 'not-allowed' : 'pointer',
          }}>
          {t.pickFile}
          <input
            ref={fileInputRef}
            type="file"
            accept={allowedExtensions.join(',')}
            disabled={files.length >= maxUpload}
            style={styles.hiddenInput}
            onChange={handleFileChange}
          />
        </label>

        {error && <p style={styles.error}>⚠️ {error}</p>}

        {Array.isArray(listErrorMessage) &&
          listErrorMessage.map((msg, i) => (
            <p key={i} style={styles.error}>
              ⚠️ {msg}
            </p>
          ))}

        {successMessage && <p style={styles.success}>✅ {successMessage}</p>}
      </div>

      {files.length > 0 && (
        <div style={styles.fileListBox}>
          <p style={styles.fileListHeader}>
            {t.uploadingFiles(files.length, maxUpload)}
          </p>

          {files.map((file, i) => (
            <div key={i} style={styles.fileRow}>
              <p style={styles.fileName}>📄 {shortenFileName(file.name)}</p>
              <button
                style={styles.removeButton}
                onClick={() => handleRemove(i)}>
                {t.remove}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentUploader;
