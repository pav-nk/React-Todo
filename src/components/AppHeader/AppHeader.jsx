import { Flex } from "@chakra-ui/react";
import { Heading, Icon, Text, IconButton } from "@chakra-ui/react";
import { LuListTodo, LuSun, LuMoon } from "react-icons/lu";

const AppHeader = ({ toDo, done, theme, toggleTheme }) => {
  return (
    <>
      <Flex gap="4" mb="4" alignItems="center" justify="space-between">
        <Heading size="3xl" display="flex" gap="2" alignItems="center">
          <Icon size="3xl" color="green.600">
            <LuListTodo />
          </Icon>
          TODO APP
        </Heading>
        <Flex gap="4" alignItems="center">
          <Text lineClamp="2">
            {toDo} more to do, {done} done
          </Text>
          <IconButton onClick={toggleTheme} variant="outline">
            {theme === "dark" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </Flex>
      </Flex>
    </>
  );
};

export default AppHeader;
