import { Component } from "react";
import { SegmentGroup } from "@chakra-ui/react";
import "./AppStatusFilter.css";

const AppStatusFilter = ({ handleStatusChange }) => {
  return (
    <>
      <SegmentGroup.Root onValueChange={(e) => handleStatusChange(e.value)}>
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={["All", "Active", "Done"]} />
      </SegmentGroup.Root>
    </>
  );
};

export default AppStatusFilter;
