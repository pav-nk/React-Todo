import { Component } from "react";
import { Provider } from "../ui/provider";
import { Theme, Container } from "@chakra-ui/react";
import "./App.css";

import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";
import TodoList from "../TodoList";

import ItemAddForm from "../ItemAddForm";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const onDeleted = () => {};

  const todoData = [
    { id: 1, label: "Drink Coffee", important: false },
    { id: 2, label: "Make Awesome App", important: false },
    { id: 3, label: "Have a lunch", important: false },
  ];

  return (
    <Provider>
      <Theme p="4" appearance={theme} colorPalette="green" height="100vh">
        <Container maxW="xl" px="2" paddingTop="5">
          <AppHeader
            toDo={1}
            done={3}
            theme={theme}
            toggleTheme={toggleTheme}
            onDeleted={onDeleted}
          />
          <SearchPanel />
          <TodoList todos={todoData} />
          <ItemAddForm />
        </Container>
      </Theme>
    </Provider>
  );
};

export default App;
