import { TODO_CONST_ACTIONS } from 'service/const/actionConst';
import { TodoType } from 'service/model/todo';
import { CreateTodoActionType } from './todoAction.interface';

const { CREATE_TODO } = TODO_CONST_ACTIONS;

export const createTodoAction = (input: TodoType): CreateTodoActionType => {
  return {
    type: CREATE_TODO,
    payload: input,
  };
};
