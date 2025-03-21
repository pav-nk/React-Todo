import TodoItem from "../TodoItem";
import { Flex } from "@chakra-ui/react";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <div key={id}>
        <TodoItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleDone={() => onToggleDone(id)}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
        />
      </div>
    );
  });

  return (
    <Flex gap="2" direction="column" mb="4">
      {elements}
    </Flex>
  );
};

export default TodoList;
