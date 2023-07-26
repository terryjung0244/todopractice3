import React from 'react';
import CreateTodo from 'service/components/createTodo/CreateTodo';
import ShowTodo from 'service/components/showTodo/ShowTodo';
import Grid from '@mui/material/Grid';
import './App.css';

const App = () => {
  // const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);

  return (
    <div className="appMain">
      <Grid
        container
        rowSpacing={5}
        style={{
          // border: '2px solid blue',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          className="titleMain"
          style={{ width: '100%' }}
        >
          <h2
            className="titleText"
            // style={{ width: matches ? '200px' : '300px' }}
          >
            Todo List
          </h2>
        </Grid>
        <div
          style={{
            border: '2px solid red',
            width: '100%',
            maxWidth: '1120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            style={{ border: '1px solid red', width: '100%' }}
          >
            <CreateTodo />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            style={{ border: '1px solid green', width: '1024px' }}
          >
            {/* <ShowTodo
            showUpdateInput={showUpdateInput}
            setShowUpdateInput={setShowUpdateInput}
          /> */}
            <ShowTodo />
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default App;
