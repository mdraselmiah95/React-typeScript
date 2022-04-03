import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span className="heading">Cool-Todo</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
