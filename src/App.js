import List from "./List";
import "./App.css";
import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  AddToTodos,
  deleteTodo,
  editTodo,
} from "./redux/features/todoSlice";

const tododata = [
  { title: "Todo 1", id: 1, isDone: false, isDeleted: false },
  { title: "Todo 2", id: 3, isDone: false, isDeleted: false },
  { title: "Todo 3", id: 4, isDone: false, isDeleted: false },
  { title: "Todo 4", id: 5, isDone: false, isDeleted: false },
];
function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  //const [data1, setData] = useState(tododata);
  useEffect(() => {
    dispatch(AddToTodos(tododata));
  }, []);
  const data = useSelector((state) => state.todo.todos);
  let onClickHandler = useCallback(() => {
    let newTodo = {
      id: data.length + 1,
      title: value,
      isDone: false,
      isDeleted: false,
    };
    dispatch(addTodo(newTodo));
    // setData((prevState) => [...prevState, newTodo]);
    setValue("");
  }, [data, value, dispatch, setValue]);

  let onTodoClickHandler = useCallback(
    (id) => {
      //with findIndex
      // let todos = [...data];
      // let index = todos.findIndex((itm) => itm.id == id);
      // todos[index].isDone = !todos[index].isDone;
      //    setData([...todos]);
      dispatch(editTodo(id));
    },
    [data]
  );

  let onDeleteHandler = (id) => {
    // let todo = data.filter((itm, ind) => {
    //   if (itm.id === id) {
    //     itm.isDeleted = !itm.isDeleted;
    //   }
    //});
    dispatch(deleteTodo(id));
    // setData((prevState) => [...prevState, ...todo]);
  };

  console.log("PArent", data);
  return (
    <div className="App">
      <h1>Todo App</h1>

      <input
        type="text"
        name="todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" onClick={onClickHandler} />

      <List
        data={data}
        onTodoClick={useCallback((id) => onTodoClickHandler(id), [])}
        onDelete={(id) => onDeleteHandler(id)}
      />
      {/**
       * Input Component
       * List
       * Individual Todo
       *
       */}
    </div>
  );
}

export default App;
