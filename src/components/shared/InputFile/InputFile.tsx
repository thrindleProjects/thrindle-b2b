import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';

import InputFilePreview from '@/components/shared/inputFilePreview/InputFilePreview';
import InputLabel from '@/components/shared/InputLabel';

import { FileInput } from './styled';
import { InputFileProps } from './types';

const InputFile: React.FC<InputFileProps<HTMLInputElement>> = (props) => {
  const {
    error,
    label,
    value,
    onChange,
    required,
    onBlur,
    placeholder,
    className,
    errorText,
    id,
    name,
    multiple,
    extensions,
    showPreview,
    // previewAt,
  } = props;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && Array.from(e.target.files);
    if (!files) {
      return;
    }
    onChange(id, files);
    return;
  };

  return (
    <div className='flex w-full flex-col gap-2'>
      {label && !!label.length && <InputLabel id={id} label={label} />}
      <FileInput
        className={`border-primary-blue relative w-full rounded-lg border border-dashed px-2 text-xs shadow-inner outline-none transition-all duration-300 ease-in placeholder:text-xs md:px-4 xl:text-sm xl:placeholder:text-sm ${
          className ? className : ''
        }`}
      >
        <input
          type='file'
          name={name}
          id={id}
          onBlur={onBlur}
          className='absolute left-0 top-0 h-full w-full opacity-0'
          required={required}
          onChange={handleFileUpload}
          multiple={Boolean(multiple)}
          accept={`${extensions ? extensions : '.doc, .docx, '}`}
        />
        <div className='text-primary-black/60 grid grid-cols-7 font-medium'>
          <span className='col-span-1 grid place-items-center text-xl'>
            <Icon icon='material-symbols:photo-camera-outline' />
          </span>
          <span className='col-span-5 flex items-center py-4 pl-2 lg:py-4 xl:py-5'>
            {value && value.length
              ? value.length === 1
                ? value[0].name
                : 'Upload more'
              : placeholder}
          </span>
        </div>
      </FileInput>
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-300'
          >
            {errorText}
          </motion.div>
        )}
      </AnimatePresence>
      {showPreview && value && !!value.length && (
        <InputFilePreview value={value} />
      )}
    </div>
  );
};

export default InputFile;
