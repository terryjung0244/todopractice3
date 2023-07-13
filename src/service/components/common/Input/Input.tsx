import React from 'react';
import { InputPropsType } from './Input.interface';

const Input = ({
  className,
  name,
  value,
  placeholder,
  onChange,
}: InputPropsType) => {
  return (
    <div>
      <input
        className={className}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
