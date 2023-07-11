import React, { useState } from 'react';
import Input from '../common/Input/Input';
import { CreateInputStateType } from './CreateTodo.interface';
import { useAppDispatch } from 'service/store';
import { createTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoid';

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState<boolean>(false);
  const [createInput, setCreateInput] = useState<CreateInputStateType>({
    task: '',
  });

  const createTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateInput({ ...createInput, [e.target.name]: e.target.value });
  };

  const addTaskButton = () => {
    setShowInput(true);
  };

  const addNewTaskBtn = () => {
    dispatch(createTodoAction({ ...createInput, id: getNanoid() }));
  };
  return (
    <div>
      <button onClick={addTaskButton}>Add Task</button>
      <div>
        {showInput && (
          <div>
            <Input
              name="task"
              value={createInput.task}
              placeholder="Task Name"
              onChange={createTaskInput}
            />
            <button onClick={addNewTaskBtn}>Add Task</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTodo;
