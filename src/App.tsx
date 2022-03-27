import React from "react";
import "./App.css";
import Lists from "./components/Lists";

const Box: React.FunctionComponent = ({ children }) => {
  return <div>{children}</div>;
};

function App() {
  return (
    <div>
      <Box></Box>
      <Lists />
    </div>
  );
}

export default App;
