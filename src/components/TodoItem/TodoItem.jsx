import "./TodoItem.css";

const TodoItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };

  return (
    <span className="todo-item" style={style}>
      {label}
    </span>
  );
};

export default TodoItem;
