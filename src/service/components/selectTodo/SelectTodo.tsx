import React from 'react';
import styles from './SelectTodo.module.css';

const SelectTodo = () => {
  return (
    <div>
      <select>
        <option>Completed</option>
        <option>InCompleted</option>
      </select>
    </div>
  );
};

export default SelectTodo;
