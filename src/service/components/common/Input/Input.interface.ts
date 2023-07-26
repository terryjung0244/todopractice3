export interface InputPropsType {
  className?: string;
  name: string;
  value: string | number;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId: string;
}
