import React, { useCallback, useReducer, useRef, useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface Todo {
  id: number;
  text: string;
}

type ActionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

function App() {
  // const [myState, setMyState] = useState<Todo>();

  const [todos, dispatch] = useReducer((state: Todo[], action: ActionType) => {
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
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  //useCallBack
  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: "ADD",
        text: newTodoRef.current.value,
      });
      newTodoRef.current.value = "";
    }
  }, []);

  return (
    <>
      <div className="App">
        <Box sx={{ mt: "4rem", width: "75%", mx: "auto" }}>
          <TextField
            variant="outlined"
            label="Your Name"
            type="text"
            // value={}
            inputRef={newTodoRef}
            fullWidth
          />
          <Button
            color="success"
            variant="contained"
            sx={{ px: "3rem", py: "1rem", mt: "12px" }}
            onClick={onAddTodo}
          >
            Add
          </Button>
          {todos.map((todo) => (
            <Box key={todo.id} sx={{ mt: "3rem", display: "flex" }}>
              <Typography
                variant="h3"
                color="secondary"
                sx={{ mr: "1rem", fontWeight: 500 }}
              >
                {todo.text}
              </Typography>

              <Button
                variant="outlined"
                onClick={() => dispatch({ type: "REMOVE", id: todo.id })}
              >
                Remove
              </Button>
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
}

export default App;
