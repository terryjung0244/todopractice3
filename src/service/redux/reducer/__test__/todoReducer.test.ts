import { createStore } from 'service/store';
import { Store } from '@reduxjs/toolkit';
import {
  createTodoAction,
  sendSingleTodoIdAction,
  sendAllTodoAction,
  updateTodoAction,
  deleteTodoAction,
  markAsDoneAction,
  markAsNotDoneAction,
} from 'service/redux/action/todoAction';

describe('src/service/redux/reducer/todoReducer', () => {
  const store: Store = createStore();

  it('test create Todo action', () => {});
});

// Start with mockData instruction & reducer testing
