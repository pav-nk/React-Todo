import { Flex } from "@chakra-ui/react";
import { Heading, Icon } from "@chakra-ui/react";
import { LuListTodo } from "react-icons/lu";

const AppHeader = () => {
  return (
    <>
      <Flex gap="4" mb="4">
        <Heading size="5xl" display="flex" gap="2" alignItems="center">
          <Icon size="5xl" color="green.600">
            <LuListTodo />
          </Icon>
          TODO APP
        </Heading>
      </Flex>
    </>
  );
};

export default AppHeader;
