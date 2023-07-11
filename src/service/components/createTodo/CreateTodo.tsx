import React, { useState } from 'react';
import Input from '../common/Input/Input';

const CreateTodo = () => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const addTaskButton = () => {
    setShowInput(true);
  };

  return (
    <div>
      <button onClick={addTaskButton}>Add Task</button>
      <div>{showInput && <Input />}</div>
    </div>
  );
};

export default CreateTodo;
