import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState() || { todos: [] }; 

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  preloadedState, 
});

store.subscribe(() => {
  saveState(store.getState().todos); // Still saving only the todos array
});