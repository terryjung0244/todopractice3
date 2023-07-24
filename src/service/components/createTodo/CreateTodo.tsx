import React, { useState } from 'react';
import './CreateTodo.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Input from '../common/Input/Input';
import { CreateInputStateType } from './CreateTodo.interface';
import { useAppDispatch } from 'service/store';
import { createTodoAction } from 'service/redux/action/todoAction';
import { getNanoid } from 'service/util/nanoid';
import Alert from '../common/alert/Alert';
import Button from '../common/button/Button';
import { match } from 'assert';

const CreateTodo = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
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
    <div className="createTodoMain" style={{ display: 'flex' }}>
      <button
        className="addTaskButton"
        onClick={addTaskButton}
        style={{ width: matches ? '800px' : '200px' }}
      >
        Add Task
      </button>
      <div>{showAlert && <Alert width="200px" height="30px" />}</div>
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
            <Button dataTestId="" onClick={addNewTaskBtn} text="Add Task" />
            {/* <button className="inputAddTaskButton" onClick={addNewTaskBtn}>
              Add Task
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateTodo;
