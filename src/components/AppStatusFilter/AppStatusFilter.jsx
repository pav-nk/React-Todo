import { Component } from "react";
import { SegmentGroup } from "@chakra-ui/react";

class AppStatusFilter extends Component {
  state = {
    value: "All",
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <SegmentGroup.Root
          value={value}
          onValueChange={(e) => this.setState({ value: e.value })}
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items items={["All", "Active", "Done"]} />
        </SegmentGroup.Root>
      </>
    );
  }
}

export default AppStatusFilter;
