import React, { useState } from 'react';
import styles from './ShowTodo.module.css';
import { TodoType } from 'service/model/todo';
import { useAppDispatch, useAppSelector } from 'service/store';
import { AiFillEdit } from 'react-icons/ai';
import { IoTrashOutline } from 'react-icons/io5';
import Input from '../common/Input/Input';
import { UpdateInputStateType } from './ShowTodo.interface';
import {
  deleteTodoAction,
  sendAllTodoAction,
  sendSingleTodoIdAction,
  updateTodoAction,
} from 'service/redux/action/todoAction';
import Alert from '../common/alert/Alert';
import SelectTodo from '../selectTodo/SelectTodo';
import Button from '../common/button/Button';
import { useMediaQueryFuncForDownSm } from 'service/util/useMediaQuery';

export const STATUS_MODEL: any = {
  TODO: {
    content: 'Todo',
    style: {
      color: 'red',
      border: '1px solid red',
    },
  },
  UPDATED: {
    content: 'Updated',
    style: {
      // border: '1px solid black',
      color: '#F97B22',
    },
  },
  COMPLETED: {
    content: 'Completed',
    style: {
      color: 'blue',
    },
  },
};

const ShowTodo = () => {
  const matches = useMediaQueryFuncForDownSm();
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [showUpdateInput, setShowUpdateInput] = useState<boolean>(false);
  const [updateInput, setUpdateInput] = useState<UpdateInputStateType>({
    task: '',
  });
  const { todoList, selectedIdList } = useAppSelector(
    (state) => state.todoReducer,
  );

  const editButton = (id: string) => {
    // dispatch(sendSingleTodoIdAction(id));
    if (selectedIdList.length === 1) {
      setShowUpdateInput(true);
    }
  };

  const updateTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const updateNewTask = () => {
    // validation
    const { task } = updateInput;
    if (!task) {
      setShowAlert(true);
    } else {
      console.log(updateInput);
      dispatch(updateTodoAction({ ...updateInput, status: 'Updated' }));
      setShowAlert(false);
    }
    setUpdateInput({ ...updateInput, task: '' });
    setShowUpdateInput(false);
  };

  const deleteButton = (id: string) => {
    // dispatch(sendSingleTodoIdAction(id));
    dispatch(deleteTodoAction());
  };

  const inputCheckBoxEachBox = (id: string) => {
    dispatch(sendSingleTodoIdAction(id));
  };

  const allCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    dispatch(sendAllTodoAction(checked));
  };

  console.log(todoList);
  console.log(selectedIdList);

  return (
    <div
      style={{
        border: '1px solid blue',
        maxWidth: '100%',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}
    >
      <div>
        {showAlert && (
          <Alert width="150px" height="20px" border="1px solid red" />
        )}
      </div>
      <div>
        {showUpdateInput && selectedIdList.length === 1 && (
          <div className={styles.updateInputMain}>
            <Input
              dataTestId=""
              className={styles.updateInputSub}
              name="task"
              value={updateInput.task}
              placeholder="Update"
              onChange={updateTaskInput}
            />
            <Button
              dataTestId=""
              height="70px"
              onClick={updateNewTask}
              text="Update"
            />
            {/* <button className={styles.buttonContainer} onClick={updateNewTask}>
              Update
            </button> */}
          </div>
        )}
      </div>
      <div className={styles.selectContainer}>
        <SelectTodo />
      </div>

      <div className={styles.tableMain}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ minWidth: '30px', border: '1px solid red' }}>
                <input
                  className={styles.inputCheckBoxContainer}
                  type="checkBox"
                  checked={
                    selectedIdList.length === todoList.length ? true : false
                  }
                  onChange={allCheckBox}
                />
              </th>
              <th>#</th>
              <th>Task Name</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo: TodoType, index: number) => {
              // console.log(todo.status);
              return (
                <tr key={todo.id}>
                  <td>
                    <input
                      className={styles.inputCheckBoxContainer}
                      type="checkBox"
                      checked={selectedIdList.includes(todo.id)}
                      onChange={() => inputCheckBoxEachBox(todo.id)}
                    />
                  </td>
                  <td className={styles.number}>{index + 1}</td>
                  <td
                    className={styles.taskName}
                    style={{
                      textDecoration: todo.isDone ? 'line-through' : 'unset',
                    }}
                  >
                    {todo.task}
                  </td>
                  <td className={styles.updatedContainer}>
                    <span
                      style={
                        STATUS_MODEL[`${todo.status}`.toUpperCase()]['style']
                      }
                    >
                      {STATUS_MODEL[`${todo.status}`.toUpperCase()]['content']}
                    </span>
                  </td>
                  <td
                    className={styles.updateIconButton}
                    onClick={() => editButton(todo.id)}
                  >
                    <AiFillEdit />
                  </td>
                  <td
                    className={styles.deleteIconButton}
                    onClick={() => deleteButton(todo.id)}
                  >
                    <IoTrashOutline />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTodo;

// export const STATUS_MODEL: any = {
//   TODO: {
//     content: 'Todo',
//     style: {
//       color: 'red',
//     },
//   },
//   UPDATED: {
//     content: 'Updated',
//     style: {
//       color: 'green',
//     },
//   },
//   COMPLETED: {
//     content: 'Completed',
//     style: {
//       color: 'blue',
//     },
//   },
// };

// import React, { useState } from 'react';
// import styles from './ShowTodo.module.css';
// import { TodoType } from 'service/model/todo';
// import { useAppDispatch, useAppSelector } from 'service/store';
// import { AiFillEdit } from 'react-icons/ai';
// import { IoTrashOutline } from 'react-icons/io5';
// import Input from '../common/Input/Input';
// import { UpdateInputStateType } from './ShowTodo.interface';
// import {
//   deleteTodoAction,
//   sendSingleTodoIdAction,
//   updateTodoAction,
// } from 'service/redux/action/todoAction';
// import Alert from '../common/alert/Alert';
// import SelectTodo from '../selectTodo/SelectTodo';
// import { log } from 'console';

// export const STATUS_MODEL: any = {
//   TODO: {
//     content: 'Todo',
//     style: {
//       // color: 'red',
//     },
//   },
//   UPDATED: {
//     content: 'Updated',
//     style: {
//       // border: '1px solid black',
//       color: '#F97B22',
//     },
//   },
//   COMPLETED: {
//     content: 'Completed',
//     style: {
//       color: 'blue',
//     },
//   },
// };

// const ShowTodo = ({ showUpdateInput, setShowUpdateInput }: any) => {
//   const dispatch = useAppDispatch();
//   const [showAlert, setShowAlert] = useState<boolean>(false);

//   const [updateInput, setUpdateInput] = useState<UpdateInputStateType>({
//     task: '',
//   });
//   const { todoList, selectedIdList } = useAppSelector(
//     (state) => state.todoReducer,
//   );

//   const editButton = (id: string) => {
//     dispatch(sendSingleTodoIdAction(id));

//     setShowUpdateInput(true);
//   };

//   const updateTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
//   };

//   const updateNewTask = () => {
//     // validation
//     const { task } = updateInput;
//     if (!task) {
//       setShowAlert(true);
//     } else {
//       console.log(updateInput);
//       dispatch(updateTodoAction({ ...updateInput, status: 'Updated' }));
//       setShowAlert(false);
//     }
//     setUpdateInput({ ...updateInput, task: '' });
//   };

//   const deleteButton = (id: string) => {
//     dispatch(sendSingleTodoIdAction(id));
//     dispatch(deleteTodoAction());
//   };

//   const inputCheckBoxEachBox = (id: string) => {
//     dispatch(sendSingleTodoIdAction(id));
//   };

//   console.log(todoList);
//   console.log(selectedIdList);

//   return (
//     <div>
//       <div>
//         {showAlert && (
//           <Alert width="150px" height="20px" border="1px solid red" />
//         )}
//       </div>
//       <div>
//         {showUpdateInput && (
//           <div className={styles.updateInputMain}>
//             <Input
//               className={styles.updateInputSub}
//               name="task"
//               value={updateInput.task}
//               placeholder="Update"
//               onChange={updateTaskInput}
//             />
//             <button className={styles.buttonContainer} onClick={updateNewTask}>
//               Update
//             </button>
//           </div>
//         )}
//       </div>
//       <div className={styles.selectContainer}>
//         <SelectTodo />
//       </div>

//       <div className={styles.tableMain}>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>
//                 <input
//                   className={styles.inputCheckBoxContainer}
//                   type="checkBox"
//                   checked={false}
//                 />
//               </th>
//               <th>#</th>
//               <th>Task Name</th>
//               <th>Status</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {todoList.map((todo: TodoType, index: number) => {
//               // console.log(todo.status);
//               return (
//                 <tr key={todo.id}>
//                   <td>
//                     <input
//                       className={styles.inputCheckBoxContainer}
//                       type="checkBox"
//                       checked={selectedIdList.includes(todo.id)}
//                       onChange={() => inputCheckBoxEachBox(todo.id)}
//                     />
//                   </td>
//                   <td className={styles.number}>{index + 1}</td>
//                   <td
//                     className={styles.taskName}
//                     style={{
//                       textDecoration: todo.isDone ? 'line-through' : 'unset',
//                     }}
//                   >
//                     {todo.task}
//                   </td>
//                   <td
//                     style={
//                       STATUS_MODEL[`${todo.status}`.toUpperCase()]['style']
//                     }
//                     className={styles.updatedContainer}
//                   >
//                     {STATUS_MODEL[`${todo.status}`.toUpperCase()]['content']}
//                   </td>
//                   <td
//                     className={styles.updateIconButton}
//                     onClick={() => editButton(todo.id)}
//                   >
//                     <AiFillEdit />
//                   </td>
//                   <td
//                     className={styles.deleteIconButton}
//                     onClick={() => deleteButton(todo.id)}
//                   >
//                     <IoTrashOutline />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ShowTodo;

// export const STATUS_MODEL: any = {
//   TODO: {
//     content: 'Todo',
//     style: {
//       color: 'red',
//     },
//   },
//   UPDATED: {
//     content: 'Updated',
//     style: {
//       color: 'green',
//     },
//   },
//   COMPLETED: {
//     content: 'Completed',
//     style: {
//       color: 'blue',
//     },
//   },
// };
