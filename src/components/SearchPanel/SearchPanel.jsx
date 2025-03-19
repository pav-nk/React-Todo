import { Input, Flex } from "@chakra-ui/react";
import AppStatusFilter from "../AppStatusFilter";
import "./SearchPanel.css";

const SearchPanel = () => {
  return (
    <>
      <Flex gap="2" mb="4">
        <Input placeholder="Type to search..." />
        <Flex wrap="wrap">
          <AppStatusFilter />
        </Flex>
      </Flex>
    </>
  );
};

export default SearchPanel;
