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

  onChange,
}: InputPropsType) => {
  return (
    <input
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
