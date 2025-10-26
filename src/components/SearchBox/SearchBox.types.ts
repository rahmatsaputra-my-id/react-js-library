import { ChangeEvent } from 'react';

export interface SearchBoxProps {
  handleOnSubmitSearch: (value: string) => void;
  handleOnClearSearch?: () => void;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleOnScanQr?: (data?: string) => void;
  [key: string]: any; // For additional props passed to TextInput
}