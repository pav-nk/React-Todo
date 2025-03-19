import TodoItem from "../TodoItem";
import { Flex } from "@chakra-ui/react";
import "./TodoList.css";

const TodoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <div key={id}>
        <TodoItem {...itemProps} />
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
