import { Component } from "react";
import { Flex, Input, Button } from "@chakra-ui/react";
import "./ItemAddForm.css";

class ItemAddForm extends Component {
  state = {
    value: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.value);
    this.setState({
      value: "",
    });
  };

  render() {
    const { value } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <Input
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <Button type="submit">Add ToDo</Button>
      </form>
    );
  }
}

export default ItemAddForm;
