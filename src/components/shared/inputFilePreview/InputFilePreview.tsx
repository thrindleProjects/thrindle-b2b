import { MdClose } from 'react-icons/md';

import ImageComponent from '@/components/shared/ImageComponent';

type InputFilePreviewProps = React.FC<{
  value: File[];
  onRemove: (file: File) => void;
}>;

const InputFilePreview: InputFilePreviewProps = ({ value, onRemove }) => {
  return (
    <div className='flex h-20 w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2'>
      {value.map((file) => {
        const isImage = file.type.startsWith('image/');
        return (
          <div
            key={file.name}
            className={`relative h-full w-full ${
              value.length >= 2 ? 'max-w-[50%]' : ''
            } flex-shrink-0 snap-start`}
          >
            {isImage ? (
              <ImageComponent alt={file.name} src={URL.createObjectURL(file)} />
            ) : (
              <object
                data={URL.createObjectURL(file)}
                type={file.type}
                className='h-full w-auto'
              >
                {/* <p>{file.name}</p> */}
              </object>
            )}
            <button
              className='absolute right-2 top-2'
              type='button'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRemove(file);
              }}
            >
              <MdClose />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default InputFilePreview;
