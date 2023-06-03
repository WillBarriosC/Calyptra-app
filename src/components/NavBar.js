import { Navbar, Link, Text } from "@nextui-org/react";
import Login from "@/components/Login";

export default function App() {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
  ];

  return (
    <>
      <Navbar isCompact isBordered variant="static">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <Navbar.Content>
            <Text b>CALYPTRA</Text>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content>
          <Login />
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
