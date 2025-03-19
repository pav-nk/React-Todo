import { Component } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import "./ItemAddForm.css";

class ItemAddForm extends Component {
  render() {
    return (
      <Flex gap="2">
        <Input placeholder="What needs to be done?" />
        <Button>Add ToDo</Button>
      </Flex>
    );
  }
}

export default ItemAddForm;
