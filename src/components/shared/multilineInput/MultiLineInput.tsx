import React from 'react';

import InputLabel from '@/components/shared/InputLabel/InputLabel';
import { MainMultiInput } from '@/components/shared/multilineInput/styled';
import { MultiLineInputProps } from '@/components/shared/multilineInput/types';

const MultiLineInput: React.FC<MultiLineInputProps> = ({
  className,
  id,
  name,
  onBlur,
  onChange,
  formikErrors,
  formikTouched,
  placeholder,
  value,
  label,
  numbOfRows,
}) => {
  return (
    <div className={`${className} text-ace-black   rounded-[5px]`}>
      <InputLabel id={id} label={label} />
      <MainMultiInput
        className='h-full w-full bg-transparent outline-none'
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        rows={numbOfRows}
        name={name}
      />
      {formikTouched && formikErrors && (
        <div className='ml-3 block  text-left text-[10px] font-light    text-red-600'>
          *{formikErrors}
        </div>
      )}
    </div>
  );
};

export default MultiLineInput;
