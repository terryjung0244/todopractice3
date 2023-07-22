import React from 'react';
import CreateTodo from 'service/components/createTodo/CreateTodo';
import ShowTodo from 'service/components/showTodo/ShowTodo';
import Grid from '@mui/material/Grid';
import './App.css';

const App = () => {
  // const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  return (
    <div style={{ border: '' }} className="appMain">
      <Grid container rowSpacing={5}>
        <Grid item xs={12} md={12} className="titleMain">
          <h2 className="titleText">Todo List</h2>
        </Grid>
        <Grid item xs={12} md={12}>
          <CreateTodo />
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <ShowTodo
            showUpdateInput={showUpdateInput}
            setShowUpdateInput={setShowUpdateInput}
          /> */}
          <ShowTodo />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
