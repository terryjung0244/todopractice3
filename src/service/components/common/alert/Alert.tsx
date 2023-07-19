import React from 'react';

interface AlertContainerPropsType {
  width?: string;
  height?: string;
  border?: string;
  borderRadius?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  backgroundColor?: string;
}

const Alert = ({
  width,
  height,
  border = '5px solid red',
  borderRadius = '5px',
  display = 'flex',
  justifyContent = 'center',
  alignItems = 'center',
  backgroundColor = '#FF7F50',
}: AlertContainerPropsType) => {
  return (
    <div
      style={{
        width,
        height,
        border,
        borderRadius,
        display,
        justifyContent,
        alignItems,
        backgroundColor,
      }}
    >
      Alert! Fill in the blank
    </div>
  );
};

export default Alert;
