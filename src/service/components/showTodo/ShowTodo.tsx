import React, { useState } from 'react';
import './ShowTodo.css';
import { TodoType } from 'service/model/todo';
import { useAppDispatch, useAppSelector } from 'service/store';
import { AiFillEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import Input from '../common/Input/Input';
import { UpdateInputStateType } from './ShowTodo.interface';
import {
  sendSingleTodoIdAction,
  updateTodoAction,
} from 'service/redux/action/todoAction';
import Alert from '../common/alert/Alert';

const ShowTodo = () => {
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  const [updateInput, setUpdateInput] = useState<UpdateInputStateType>({
    task: '',
  });
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer,
  );

  const editButton = (id: string) => {
    dispatch(sendSingleTodoIdAction(id));
    setShowUpdateInput(true);
  };

  const updateTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const updateNewTask = () => {
    // validation
    const { task } = updateInput;
    if (!task) {
      setShowAlert(true);
    } else {
      console.log(updateInput);
      dispatch(updateTodoAction({ ...updateInput }));
      setShowAlert(false);
    }
    setUpdateInput({ ...updateInput, task: '' });
  };

  console.log(selectedIdList);

  return (
    <div>
      <div>
        {showAlert && (
          <Alert width="150px" height="20px" border="1px solid red" />
        )}
      </div>
      <div>
        {showUpdateInput && (
          <div>
            <Input
              name="task"
              value={updateInput.task}
              placeholder="Update"
              onChange={updateTaskInput}
            />
            <button onClick={updateNewTask}>Update</button>
          </div>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo: TodoType) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.task}</td>
                <td>{todo.status}</td>
                <td onClick={() => editButton(todo.id)}>
                  Edit
                  <AiFillEdit />
                </td>
                <td>
                  Delete
                  <IoTrashOutline />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
