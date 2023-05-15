import moment from 'moment';

export const useTimeFormatHook = ({
  date,
  format,
}: {
  date: string;
  format: string;
}) => {
  const formattedDate = moment(date).format(format);

  return {
    formattedDate,
  };
};
