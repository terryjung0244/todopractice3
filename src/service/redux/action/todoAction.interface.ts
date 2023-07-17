import { AnyAction } from '@reduxjs/toolkit';
import { TODO_CONST_ACTIONS } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';

const {
  CREATE_TODO,
  SEND_SINGLE_TODO_ID,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_AS_DONE,
  MARK_AS_NOT_DONE,
} = TODO_CONST_ACTIONS;

export interface CreateTodoActionType {
  type: typeof CREATE_TODO;
  payload: TodoType;
}

export interface SendSingleTodoIdActionType {
  type: typeof SEND_SINGLE_TODO_ID;
  payload: string;
}

export interface UpdateTodoActionType {
  type: typeof UPDATE_TODO;
  payload: Partial<TodoType>;
}

export interface DeleteTodoActionType {
  type: typeof DELETE_TODO;
  payload: null;
}
export interface MarkAsDoneActionType {
  type: typeof MARK_AS_DONE;
  payload: null;
}

export interface MarkAsNotDoneActionType {
  type: typeof MARK_AS_NOT_DONE;
  payload: null;
}

export type TodoActionsType =
  | CreateTodoActionType
  | SendSingleTodoIdActionType
  | UpdateTodoActionType
  | DeleteTodoActionType
  | MarkAsDoneActionType
  | MarkAsNotDoneActionType
  | AnyAction;
