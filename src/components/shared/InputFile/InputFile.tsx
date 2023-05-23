import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';

import InputFilePreview from '@/components/shared/inputFilePreview/InputFilePreview';
import InputLabel from '@/components/shared/InputLabel';

import { FileInput } from './styled';
import { InputFileProps } from './types';

function uniqueFileArray(arr: File[]): File[] {
  const uniqueMap = new Map<string, File>();

  uniqueMap.values();
  arr.forEach((file) => {
    const key = `${file.name}-${file.type}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, file);
    }
  });

  return Array.from(uniqueMap.values());
}

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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files && Array.from(e.target.files);
    if (!files || !files.length) {
      return;
    }
    if (!multiple) {
      onChange(id, files);
      return;
    }
    const fileArrayNoDuplicates = uniqueFileArray([...(value || []), ...files]);
    onChange(id, fileArrayNoDuplicates, true);
    return;
  };

  const handleRemoveFile = (removeFile: File) => {
    if (!value || !value.length) return;

    const updatedValue = value.filter((file) => file.name !== removeFile.name);
    onChange(id, updatedValue, true);
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
        <div className='grid grid-cols-7'>
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
        <InputFilePreview value={value} onRemove={handleRemoveFile} />
      )}
    </div>
  );
};

export default InputFile;
