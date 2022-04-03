import React from "react";
import "./App.css";
import InputField from "./components/inputField/InputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Cool-Todo</span>
      <InputField />
    </div>
  );
};

export default App;
