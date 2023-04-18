export interface MultiLineInputProps {
  formikTouched?: boolean;
  formikErrors?: string;
  value?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onBlur: (event: any) => void;
  label: string;
  className: string;
  placeholder?: string;
  id: string;
  name: string;
  numbOfRows: number;
}
