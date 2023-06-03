import React from "react";
import { Dropdown, Container } from "@nextui-org/react";


export default function FilterItem() {
  const [selected, setSelected] = React.useState(new Set(["Sort by"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Container align="center">
      <Dropdown>
        <Dropdown.Button light css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="default"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Dropdown.Item key="A-Z">A-Z</Dropdown.Item>
          <Dropdown.Item key="Price: Low to High">
            Price: Low to High
          </Dropdown.Item>
          <Dropdown.Item key="Price: High to Low">
            Price: High to Low
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}
