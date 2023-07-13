import { Reducer } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { TodoReducerStateType } from './todoReducer.interface';
import { TodoActionsType } from '../action/todoAction.interface';
import { TODO_CONST_ACTIONS } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';

const { CREATE_TODO, SEND_SINGLE_TODO_ID, UPDATE_TODO, DELETE_TODO } =
  TODO_CONST_ACTIONS;

const initialState: TodoReducerStateType = {
  todoList: [],
  selectedIdList: [],
};

export const todoReducer: Reducer<TodoReducerStateType, TodoActionsType> = (
  state = initialState,
  action: TodoActionsType,
): TodoReducerStateType => {
  return produce(state, (draft) => {
    switch (action.type) {
      // * CREATE *
      case CREATE_TODO:
        draft.todoList.push(action.payload);
        break;

      // * SEND SINGLE TODO ID FOR UPDATE *
      case SEND_SINGLE_TODO_ID:
        draft.selectedIdList.push(action.payload);
        // const index = draft.selectedIdList.indexOf(action.payload);
        // if (index === -1) {
        //   draft.selectedIdList.push(action.payload);
        // } else {
        //   draft.selectedIdList.splice(index, 1);
        // }
        // break;
        break;
      // * UPDATE *
      case UPDATE_TODO:
        const { task } = action.payload;

        draft.selectedIdList.forEach((id: string) => {
          let index = draft.todoList.findIndex(
            (todo: TodoType) => id === todo.id,
          );
          draft.todoList[index].task = task;
          draft.selectedIdList = [];
        });
        break;
      // * DELETE *
      case DELETE_TODO:
        draft.selectedIdList.forEach((id: string) => {
          let index = draft.todoList.findIndex(
            (todo: TodoType) => id === todo.id,
          );
          if (index > -1) {
            draft.todoList.splice(index, 1);
          }
          draft.selectedIdList = [];
        });
        break;

      default:
        return state;
    }
  });
};
