import React from 'react';

interface AlertContainerPropsType {
  width?: string;
  height: string;
  border: string;
}

const Alert = ({ width, height, border }: AlertContainerPropsType) => {
  return <div style={{ width, height, border }}>Alert! Create your task</div>;
};

export default Alert;
