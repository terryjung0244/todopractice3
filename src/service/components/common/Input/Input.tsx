import React from 'react';
import { InputPropsType } from './Input.interface';

const Input = ({ name, value, placeholder, onChange }: InputPropsType) => {
  return (
    <div>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
