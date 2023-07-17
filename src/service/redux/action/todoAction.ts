import { TODO_CONST_ACTIONS } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';
import {
  CreateTodoActionType,
  DeleteTodoActionType,
  MarkAsDoneActionType,
  MarkAsNotDoneActionType,
  SendSingleTodoIdActionType,
  UpdateTodoActionType,
} from './todoAction.interface';

const {
  CREATE_TODO,
  SEND_SINGLE_TODO_ID,
  UPDATE_TODO,
  DELETE_TODO,
  MARK_AS_DONE,
  MARK_AS_NOT_DONE,
} = TODO_CONST_ACTIONS;

export const createTodoAction = (input: TodoType): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: input,
  };
};

export const sendSingleTodoIdAction = (
  id: string,
): SendSingleTodoIdActionType => {
  return {
    type: SEND_SINGLE_TODO_ID,
    payload: id,
  };
};

export const updateTodoAction = (
  input: Partial<TodoType>,
): UpdateTodoActionType => {
  return {
    type: UPDATE_TODO,
    payload: input,
  };
};

export const deleteTodoAction = (): DeleteTodoActionType => {
  return {
    type: DELETE_TODO,
    payload: null,
  };
};

export const markAsDoneAction = (): MarkAsDoneActionType => {
  return {
    type: MARK_AS_DONE,
    payload: null,
  };
};

export const markAsNotDoneAction = (): MarkAsNotDoneActionType => {
  return {
    type: MARK_AS_NOT_DONE,
    payload: null,
  };
};
