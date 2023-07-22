import React from 'react';

export interface ButtonPropsType {
  width?: string;
  height?: string;
  dataTestId: string;
  onClick: () => void;
  text: string;
}

const Button = ({
  width = '100px',
  height = '40px',
  dataTestId,
  onClick,
  text,
}: ButtonPropsType) => {
  return (
    <button
      data-testid={dataTestId}
      style={{ width, height }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
