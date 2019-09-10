import React, { createContext, useReducer } from "react";
import todoReducer from "../reducer/todo.reducer";
import {useLocalStorageReducer} from "../hooks/useLocalStorageReducer";

const defaultTodos = [
  { id: 1, task: "Buy Groceries", completed: false },
  { id: 2, task: "Wash Car", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer("todos",defaultTodos,todoReducer) // passing reducer & initial state
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
