import React, { useState } from 'react';
import './ShowTodo.css';
import { TodoType } from 'service/model/todo';
import { useAppSelector } from 'service/store';
import { AiFillEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import Input from '../common/Input/Input';
import { UpdateInputStateType } from './ShowTodo.interface';

const ShowTodo = () => {
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  const [updateInput, setUpdateInput] = useState<UpdateInputStateType>({
    task: '',
  });
  const { todoList } = useAppSelector((state) => state.todoReducer);

  const updateTodo = (id: string) => {
    console.log(id);
    setShowUpdateInput(true);
  };

  const updateTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const updateNewTask = () => {
    // validation
    const { task } = updateInput;
    console.log(task);
  };

  console.log(todoList);

  return (
    <div>
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
                <td onClick={() => updateTodo(todo.id)}>
                  Update
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
