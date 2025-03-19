import { Card, IconButton, Flex } from "@chakra-ui/react";
import { LuStar, LuDelete } from "react-icons/lu";
import "./TodoItem.css";

const TodoItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "white",
    fontWeight: important ? "bold" : "normal",
  };

  return (
    <Card.Root>
      <Flex gap="2" p="2" alignItems="center">
        <Card.Title flex="1" pl="2">
          {label}
        </Card.Title>
        <IconButton aria-label="Important ToDo" variant="outline">
          <LuStar />
        </IconButton>
        <IconButton aria-label="Delete ToDo" variant="outline">
          <LuDelete />
        </IconButton>
      </Flex>
    </Card.Root>
  );
};

export default TodoItem;
