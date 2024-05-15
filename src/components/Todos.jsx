import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        // return <p key={todo.id}>{todo.title}</p>;
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Todos;
