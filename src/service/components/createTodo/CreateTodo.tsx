import React, { useState } from 'react';
import './CreateTodo.css';
import Input from '../common/Input/Input';
import { CreateInputStateType } from './CreateTodo.interface';
import { useAppDispatch } from 'service/store';
import { createTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoid';
import Alert from '../common/alert/Alert';

const CreateTodo = () => {
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
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
    const { task } = createInput;
    if (!task) {
      setShowAlert(true);
    } else {
      dispatch(
        createTodoAction({ ...createInput, id: getNanoid(), status: 'Todo' }),
      );
      setShowAlert(false);
    }
    setCreateInput({ ...createInput, task: '' });
  };
  return (
    <div className="createTodoMain">
      <button className="addTaskButton" onClick={addTaskButton}>
        Add Task
      </button>
      <div>
        {showAlert && (
          <Alert width="150px" height="20px" border="1px solid red" />
        )}
      </div>
      <div>
        {showInput && (
          <div className="inputAndButton">
            {/* <input className="input"></input> */}
            <Input
              className="input"
              name="task"
              value={createInput.task}
              placeholder="Task Name"
              onChange={createTaskInput}
            />

            <button className="inputAddTaskButton" onClick={addNewTaskBtn}>
              Add Task
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTodo;
