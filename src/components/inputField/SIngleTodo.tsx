import { type } from "os";
import React from "react";
import { Todo } from "../../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SIngleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default SIngleTodo;
