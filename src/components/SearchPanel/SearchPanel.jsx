import { Input, Flex } from "@chakra-ui/react";
import AppStatusFilter from "../AppStatusFilter";
import "./SearchPanel.css";

const SearchPanel = ({ handleSearchChange, handleStatusChange }) => {
  return (
    <>
      <Flex gap="2" mb="4">
        <Input
          placeholder="Type to search..."
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <Flex wrap="wrap">
          <AppStatusFilter handleStatusChange={handleStatusChange} />
        </Flex>
      </Flex>
    </>
  );
};

export default SearchPanel;
