import React from 'react';
import CreateTodo from 'service/components/createTodo/CreateTodo';
import ShowTodo from 'service/components/showTodo/ShowTodo';

const App = () => {
  return (
    <div>
      <h2>Todo List</h2>
      <CreateTodo />
      <ShowTodo />
    </div>
  );
};

export default App;
