export interface LoginData {
  email: string;
  password: string;
}

// NETWORK TYPES
export interface INetworkSuccessResponse<T> {
  data: T;
  message: string;
  status?: number;
  success?: boolean;
}

export type InputPasswordType = 'password';
export type InputTextType = 'text';
export type InputEmailType = 'email';
export type InputDateType = 'date';
export type InputFileType = 'file';
export type InputSelectType = 'select';

export interface FundsModalProps {
  title: string;
  text: string;
}
