import { Input, Flex } from "@chakra-ui/react";
import AppStatusFilter from "../AppStatusFilter";

const SearchPanel = () => {
  return (
    <>
      <Flex gap="4">
        <Input placeholder="Type to search..." />
        <AppStatusFilter />
      </Flex>
    </>
  );
};

export default SearchPanel;
