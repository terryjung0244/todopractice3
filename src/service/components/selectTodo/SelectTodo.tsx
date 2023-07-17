import React from 'react';
import styles from './SelectTodo.module.css';
import { SELECT_CONST } from 'service/const/selectConst';
import { useAppDispatch } from 'service/store';
import {
  markAsDoneAction,
  markAsNotDoneAction,
} from 'service/redux/action/todoAction';

const { SELECT_MARK_AS_DONE, SELECT_MARK_AS_NOT_DONE } = SELECT_CONST;

const SelectTodo = () => {
  const dispatch = useAppDispatch();
  const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    switch (value) {
      case SELECT_MARK_AS_DONE:
        dispatch(markAsDoneAction());
        break;

      case SELECT_MARK_AS_NOT_DONE:
        dispatch(markAsNotDoneAction());
        break;

      default:
        break;
    }
  };

  return (
    <>
      <select className={styles.selectContainer} onChange={selectOption}>
        <option>Select</option>
        <option value={SELECT_MARK_AS_DONE}>Completed</option>
        <option value={SELECT_MARK_AS_NOT_DONE}>InCompleted</option>
      </select>
    </>
  );
};

export default SelectTodo;
