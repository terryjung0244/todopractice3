import { TodoType } from 'service/model/todo';

export interface TodoReducerStateType {
  todoList: TodoType[];
  selectedIdList: string[];
}
