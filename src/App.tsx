import React, { useReducer, useRef } from "react";
import "./App.css";
import Lists from "./components/Lists";

// const Box: React.FunctionComponent<{ title: string }> = ({ title }) => {
//   return <div></div>;
// };
interface Todo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {
  //useReducer
  function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];
      case "REMOVE":
        return state.filter(({ id }) => id !== action.id);
    }
  }

  const [todos, dispatch] = useReducer(reducer, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      {/* <Box title="hello"></Box>
      <Lists /> */}

      <input type="text" name="" id="" ref={newTodoRef} />
      {todos.map((todo) => {
        <div key={todo.id}>{todo.text}</div>;
      })}
    </div>
  );
}

export default App;
