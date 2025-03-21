import { Component } from "react";
import { CheckboxCard, IconButton, Flex, Text } from "@chakra-ui/react";
import { LuStar, LuDelete } from "react-icons/lu";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    let labelStyle = "";

    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      done,
      important,
    } = this.props;

    if (important) {
      labelStyle += " important";
    }
    if (done) {
      labelStyle += " done";
    }

    return (
      <CheckboxCard.Root
        size="md"
        onChange={(e) => onToggleDone()}
        onClick={onToggleDone}
      >
        <Flex alignItems="center" pr="2">
          <CheckboxCard.Control flex="0">
            <CheckboxCard.Indicator />
          </CheckboxCard.Control>
          <CheckboxCard.Label textStyle="lg" flex="1">
            <Text textStyle="lg" className={labelStyle}>
              {label}
            </Text>
          </CheckboxCard.Label>
          <Flex gap="2">
            <IconButton
              aria-label="Important ToDo"
              variant={important ? "solid" : "outline"}
              colorPalette="yellow"
              onClick={() => {
                onToggleImportant();
              }}
            >
              <LuStar />
            </IconButton>
            <IconButton
              aria-label="Delete ToDo"
              variant="outline"
              colorPalette="red"
              onClick={onDeleted}
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
