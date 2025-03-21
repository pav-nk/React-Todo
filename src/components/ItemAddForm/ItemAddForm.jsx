import { Component } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import "./ItemAddForm.css";

class ItemAddForm extends Component {
  state = {
    value: "",
  };

  render() {
    const { value } = this.state;
    const { onAdded } = this.props;

    return (
      <Flex gap="2">
        <Input
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <Button onClick={() => onAdded(value)}>Add ToDo</Button>
      </Flex>
    );
  }
}

export default ItemAddForm;
