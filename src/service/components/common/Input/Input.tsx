import React from 'react';
import { InputPropsType } from './Input.interface';

// const inputCss = {
//   height: '50px',
//   width: '300px',
// };

const Input = ({
  className,
  name,
  value,
  placeholder,
  dataTestId,

  onChange,
}: InputPropsType) => {
  return (
    <input
      data-testid={dataTestId}
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      style={{ outline: 'none' }}
    />
  );
};

export default Input;

// export interface InputPropsType {
//   className?: string;
//   name: string;
//   value: string | number;
//   placeholder?: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   dataTestId: string;
// }
