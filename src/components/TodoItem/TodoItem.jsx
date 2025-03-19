import { Component } from "react";
import { CheckboxCard, IconButton, Flex, Text } from "@chakra-ui/react";
import { LuStar, LuDelete } from "react-icons/lu";
import "./TodoItem.css";

class TodoItem extends Component {
  state = {};

  render() {
    const { label, important = false } = this.props;

    const style = {
      color: important ? "tomato" : "white",
      fontWeight: important ? "bold" : "normal",
    };

    return (
      <CheckboxCard.Root
        size="md"
        onChange={(e) => console.log(e.target.checked)}
      >
        <Flex alignItems="center" pr="2">
          <CheckboxCard.Control flex="0">
            <CheckboxCard.Indicator />
          </CheckboxCard.Control>
          <CheckboxCard.Label textStyle="lg" flex="1">
            <Text textStyle="lg">{label}</Text>
          </CheckboxCard.Label>
          <Flex gap="2">
            <IconButton
              aria-label="Important ToDo"
              variant="outline"
              colorPalette="yellow"
            >
              <LuStar />
            </IconButton>
            <IconButton
              aria-label="Delete ToDo"
              variant="outline"
              colorPalette="red"
            >
              <LuDelete />
            </IconButton>
          </Flex>
        </Flex>
        <CheckboxCard.HiddenInput />
      </CheckboxCard.Root>
    );
  }
}

export default TodoItem;
