import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CreateTodo from 'service/components/createTodo/CreateTodo';
import ShowTodo from 'service/components/showTodo/ShowTodo';
import Grid from '@mui/material/Grid';
import './App.css';

const App = () => {
  // const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('xs'));
  // const [windowSize, setWindowSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const handleResize = () => {
  //       setWindowSize({
  //         // 현재 브라우저의 가로, 세로 길이로 셋팅
  //         width: window.innerWidth,
  //         height: window.innerHeight,
  //       });
  //     };

  //     // resize 이벤트가 발생할 때 handleResize 함수가 실행되도록 한다.
  //     window.addEventListener('resize', handleResize);

  //     // 초기값을 설정할 수 있도록 handleResize 함수를 한 번 실행시킨다.
  //     handleResize();

  //     // 이벤트 리스너를 제거하여 이벤트 리스너가 리사이즈될 때마다 계속해서 생겨나지 않도록 처리한다. (clean up)
  //     return () => window.removeEventListener('resize', handleResize);
  //   } else {
  //     return () =>
  //       window.removeEventListener('resize', () => {
  //         return null;
  //       });
  //   }
  // }, []); // 컴포넌트가 처음 마운트 될때와 언마운트 될 때 실행
  // return windowSize;

  // import React from 'react';
  // function MyComponent() {
  //   const [dimensions, setDimensions] = React.useState({
  //     height: window.innerHeight,
  //     width: window.innerWidth,
  //   });
  //   React.useEffect(() => {
  //     function handleResize() {
  //       setDimensions({
  //         height: window.innerHeight,
  //         width: window.innerWidth,
  //       });
  //     }

  //     window.addEventListener('resize', handleResize);
  //   });
  //   return (
  //     <div>
  //       Rendered at {dimensions.width} x {dimensions.height}
  //     </div>
  //   );
  // }

  return (
    <div className="appMain">
      <Grid container rowSpacing={5}>
        <Grid item xs={12} md={12} className="titleMain">
          <h2
            className="titleText"
            // style={{ width: matches ? '200px' : '300px' }}
          >
            Todo List
          </h2>
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
