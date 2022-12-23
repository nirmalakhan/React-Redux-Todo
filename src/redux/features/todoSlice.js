import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    AddToTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      // console.log(action);
      state.todos = [...state.todos, action.payload];
    },
    editTodo: (state, action) => {
      let todo = state.todos.filter((itm) => {
        if (itm.id == action.payload) {
          itm.isDone = !itm.isDone;
        }
      });

      state.todos = [...state.todos, ...todo];
    },
    deleteTodo: (state, action) => {
      let todo = state.todos.filter((itm) => {
        if (itm.id == action.payload) {
          itm.isDeleted = !itm.isDeleted;
        }
      });
      state.todos = [...state.todos, ...todo];
    },
  },
});

export const { addTodo, editTodo, deleteTodo, AddToTodos } = TodoSlice.actions;

export default TodoSlice.reducer;
