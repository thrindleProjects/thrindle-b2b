import { IRecurrentItems, ISingleRecurrentItem } from '@/api/recurrent/types';

export interface IListCardProps {
  data: ISingleRecurrentItem[] | IRecurrentItems[] | undefined;
  active?: string;
  setActive?: React.Dispatch<React.SetStateAction<string>>;
}
