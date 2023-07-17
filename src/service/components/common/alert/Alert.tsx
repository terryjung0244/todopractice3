import React from 'react';

interface AlertContainerPropsType {
  width?: string;
  height: string;
  border: string;
  borderRadius: string;
  backgroundColor: string;
}

const Alert = ({
  width,
  height,
  border,
  borderRadius,
  display,
  justifyContent,
  alignItems,
  backgroundColor,
}: any) => {
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
