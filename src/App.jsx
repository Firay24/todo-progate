import React, { useState } from "react";
import Todos from "./components/Todos";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  console.log(todos);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteButton = (todoid) => {
    const result = todos.filter((todo) => todo.id !== todoid);
    setTodos(result);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })} */}
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteButton={deleteButton}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};

export default App;
