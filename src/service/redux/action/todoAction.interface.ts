import { AnyAction } from '@reduxjs/toolkit';
import { TODO_CONST_ACTIONS } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';

const { CREATE_TODO } = TODO_CONST_ACTIONS;

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export type TodoActionsType = CreateTodoActionType | AnyAction;
