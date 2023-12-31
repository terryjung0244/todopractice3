import { Reducer } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { TodoReducerStateType } from './todoReducer.interface';
import { TodoActionsType } from '../action/todoAction.interface';
import { TODO_CONST_ACTIONS } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';

const {
  CREATE_TODO,
  SEND_SINGLE_TODO_ID,
  SEND_ALL_TODO_ID,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_AS_DONE,
  MARK_AS_NOT_DONE,
} = TODO_CONST_ACTIONS;

const initialState: TodoReducerStateType = {
  todoList: [],
  selectedIdList: [],
  // openUpdateComp: false,
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

      // * SEND SINGLE TODO ID *
      case SEND_SINGLE_TODO_ID:
        console.log('11');
        // console.log(action.payload);
        // draft.selectedIdList.push(action.payload);
        const index = draft.selectedIdList.indexOf(action.payload);
        if (index === -1) {
          draft.selectedIdList.push(action.payload);
        } else {
          draft.selectedIdList.splice(index, 1);
        }
        break;

      // * SEND ALL TODO ID *
      case SEND_ALL_TODO_ID:
        if (action.payload) {
          const resultForSendAllId = draft.todoList.map(
            (todo: TodoType) => todo.id,
          );
          draft.selectedIdList = resultForSendAllId;
        } else {
          draft.selectedIdList = [];
        }
        break;

      // * UPDATE *
      case UPDATE_TODO:
        const { task, status } = action.payload;
        draft.selectedIdList.forEach((id: string) => {
          let index = draft.todoList.findIndex(
            (todo: TodoType) => id === todo.id,
          );
          draft.todoList[index].task = task;
          draft.todoList[index].status = status;
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

      case MARK_AS_DONE:
        const resultForMarkAsDone = draft.todoList.map((todo: TodoType) => {
          return {
            ...todo,
            isDone: draft.selectedIdList.includes(todo.id) ? true : false,
          };
        });
        draft.todoList = resultForMarkAsDone;

        break;

      case MARK_AS_NOT_DONE:
        const resultForMarkAsNotDone = draft.todoList.map((todo: TodoType) => {
          return {
            ...todo,
            isDone: draft.selectedIdList.includes(todo.id) ? false : true,
          };
        });
        draft.todoList = resultForMarkAsNotDone;
        break;

      default:
        return state;
    }
  });
};

// const people = ['hong', 'terry', 'jung'];
// const newPeople = people.forEach((person: string) => {
//   console.log(person);
//   return person;
// });
// console.log(newPeople);
// const newPeople2 = people.map((person: string) => {
//   console.log(person);
//   return person;
// });
// console.log(newPeople2);
