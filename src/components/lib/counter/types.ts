export interface CounterProps {
  add: () => void;
  subtract: () => void;
  counter: number;
  error: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
