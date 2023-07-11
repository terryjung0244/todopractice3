import React, { useState } from 'react';
import { CreateInputStateType } from './Input.interface';

const Input = () => {
  const [createInput, setCreateInput] = useState<CreateInputStateType>({
    task: '',
  });
  const createTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        name="task"
        value={createInput.task}
        placeholder="Task Name"
        onChange={createTaskInput}
      />
    </div>
  );
};

export default Input;
