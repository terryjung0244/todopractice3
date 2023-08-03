import { TodoType } from 'service/model/todo';

export const todoMockData: TodoType[] = [
  {
    id: 'todoMockId1',
    task: 'todoMockTask1',
    isDone: false,
    status: 'todo1',
  },
  {
    id: 'todoMockId2',
    task: 'todoMockTask2',
    isDone: true,
    status: 'todo2',
  },
];

export const selectedIdListMockData: string[] = ['todoMockId1', 'todoMockId2'];
