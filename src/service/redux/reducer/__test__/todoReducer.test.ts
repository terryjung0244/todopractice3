import { createStore } from 'service/store';
import { Store } from '@reduxjs/toolkit';
import {
  todoMockData,
  selectedIdListMockData,
} from 'service/mock/data/todoMockData';
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
  let store: Store;
  beforeEach(() => {
    store = createStore();
  });
  // const store: Store = createStore();

  it('test create Todo action', () => {
    store.dispatch(createTodoAction(todoMockData[0]));
    expect(store.getState().todoReducer.todoList).toEqual([todoMockData[0]]);
  });

  it('test send Single Id Todo Action', () => {
    store.dispatch(sendSingleTodoIdAction(selectedIdListMockData[0]));
    expect(store.getState().todoReducer.selectedIdList).toEqual([
      selectedIdListMockData[0],
    ]); // array
  });

  it('test send All Id Todo Action', () => {
    store.dispatch(sendAllTodoAction(true));
    expect(store.getState().todoReducer.selectedIdList).toEqual([]);
  });

  it('test update Todo Action', () => {
    store.dispatch(createTodoAction(todoMockData[0]));
    store.dispatch(sendSingleTodoIdAction(selectedIdListMockData[0]));
    store.dispatch(updateTodoAction({ task: 'aaa', status: 'bbb' }));
    expect(store.getState().todoReducer.todoList).toEqual([
      {
        id: todoMockData[0].id,
        isDone: todoMockData[0].isDone,
        task: 'aaa',
        status: 'bbb',
      },
    ]);
  });

  it('test deleteTodoAction', () => {
    store.dispatch(createTodoAction(todoMockData[0]));
    store.dispatch(sendSingleTodoIdAction(todoMockData[0].id));
    expect(store.getState().todoReducer.todoList).toEqual([todoMockData[0]]);
    store.dispatch(deleteTodoAction());
    expect(store.getState().todoReducer.todoList).toEqual([]);
  });

  it('test markAsDoneAction', () => {
    store.dispatch(createTodoAction(todoMockData[0]));
    store.dispatch(createTodoAction(todoMockData[1]));
    store.dispatch(sendSingleTodoIdAction(todoMockData[0].id));
    store.dispatch(markAsDoneAction());
    expect(store.getState().todoReducer.todoList[0].isDone).toEqual(true);
    expect(store.getState().todoReducer.todoList[1].isDone).toBe(false);
    // expect(store.getState().todoReducer.todoList).toEqual([
    //   {
    //     ...todoMockData[0],
    //     isDone: true,
    //   },
    //   { ...todoMockData[1] },
    // ]);
  });

  it('test markAsNotDoneAction', () => {
    store.dispatch(createTodoAction(todoMockData[1]));
    store.dispatch(sendSingleTodoIdAction(todoMockData[1].id));
    expect(store.getState().todoReducer.todoList[0].isDone).toBe(true);
    store.dispatch(markAsNotDoneAction());
    expect(store.getState().todoReducer.todoList[0].isDone).toBe(false);
  });
});
