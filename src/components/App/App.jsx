import React, { Component } from "react";
import { Provider } from "../ui/provider";
import { Theme, Container } from "@chakra-ui/react";
import "./App.css";

import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";

import ItemAddForm from "../ItemAddForm";

class App extends Component {
  state = {
    theme: "dark",
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    status: "All",
  };

  handleSearchChange = (label) => {
    this.setState({
      term: label,
    });
  };

  handleStatusChange = (status) => {
    this.setState({
      status: status,
    });
  };

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "dark" ? "light" : "dark",
    }));
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((todo) => todo.id !== id),
    }));
  };

  createTodoItem(label) {
    return {
      id: crypto.randomUUID(),
      label,
      important: false,
      done: false,
    };
  }

  addItem = (label) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.concat(this.createTodoItem(label)),
    }));
  };

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, "done"),
    }));
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.toggleProperty(todoData, id, "important"),
    }));
  };

  search = (todos, term) => {
    if (term === "") return todos;
    return todos.filter((todo) =>
      todo.label.toLoerCase().includes(term.toLowerCase())
    );
  };

  filter = (todos) => {
    switch (this.state.status) {
      case "All":
        return todos;
      case "Active":
        return todos.filter((todo) => todo.done === false);
      case "Done":
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  };

  render() {
    const { theme, todoData, term } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    const visibleItems = this.search(todoData, term);

    const filteredItems = this.filter(visibleItems);

    return (
      <Provider>
        <Theme p="4" appearance={theme} colorPalette="green" height="100vh">
          <Container maxW="xl" px="2" paddingTop="5">
            <AppHeader
              toDo={todoCount}
              done={doneCount}
              theme={theme}
              toggleTheme={this.toggleTheme}
            />
            <SearchPanel
              handleSearchChange={this.handleSearchChange}
              handleStatusChange={this.handleStatusChange}
            />
            <TodoList
              todos={filteredItems}
              onDeleted={this.deleteItem}
              onToggleDone={this.onToggleDone}
              onToggleImportant={this.onToggleImportant}
            />
            <ItemAddForm onAdded={this.addItem} />
          </Container>
        </Theme>
      </Provider>
    );
  }
}

export default App;
