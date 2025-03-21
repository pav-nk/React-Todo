import { Component } from "react";
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
  };

  toggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === "dark" ? "light" : "dark",
    }));
  }

  deleteItem(id) {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((toDo) => toDo.id !== id),
    }));
  }

  createTodoItem(label) {
    return {
      id: crypto.randomUUID(),
      label,
      important: false,
      done: false,
    };
  }

  addItem(label) {
    this.setState(({ todoData }) => ({
      todoData: todoData.concat(this.createTodoItem(label)),
    }));
  }

  toggleProperty(arr, id, propName) {}

  onToggleDone(id) {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
    console.log(this.state);
  }

  onToggleImportant(id) {
    console.log(id);
  }

  render() {
    const { theme, todoData } = this.state;

    const doneCount = todoData.filter((el) => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <Provider>
        <Theme p="4" appearance={theme} colorPalette="green" height="100vh">
          <Container maxW="xl" px="2" paddingTop="5">
            <AppHeader
              toDo={todoCount}
              done={doneCount}
              theme={theme}
              toggleTheme={this.toggleTheme.bind(this)}
            />
            <SearchPanel />
            <TodoList
              todos={todoData}
              onDeleted={this.deleteItem.bind(this)}
              onToggleDone={this.onToggleDone.bind(this)}
              onToggleImportant={this.onToggleImportant}
            />
            <ItemAddForm onAdded={this.addItem.bind(this)} />
          </Container>
        </Theme>
      </Provider>
    );
  }
}

export default App;
