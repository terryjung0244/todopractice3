import React from 'react';
import './ShowTodo.css';
import { TodoType } from 'service/model/todo';
import { useAppSelector } from 'service/store';

const ShowTodo = () => {
  const { todoList } = useAppSelector((state) => state.todoReducer);

  console.log(todoList);

  return (
    <div>
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
                <td>Progressing</td>
                <td>Completed</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowTodo;
