import React from 'react';
import CreateTodo from 'service/components/createTodo/CreateTodo';
import ShowTodo from 'service/components/showTodo/ShowTodo';
import Grid from '@mui/material/Grid';
import './App.css';
import SelectTodo from 'service/components/selectTodo/SelectTodo';

const App = () => {
  return (
    <div style={{ border: '' }} className="appMain">
      <Grid container rowSpacing={5}>
        <Grid item xs={12} md={6} className="titleMain">
          <h2 className="titleText">Todo List</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <CreateTodo />
        </Grid>
        <Grid item xs={12} md={12}>
          <ShowTodo />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
