import { Navbar, Link, Text } from "@nextui-org/react";
import Login from "@/components/Login";

export default function NavBar() {
  const collapseItems = [
    "Customers",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
  ];

  return (
    <>
      <Navbar
        isCompact
        isBordered
        variant="static"
        maxWidth="fluid"
        borderWeight="black"
      >
        <Navbar.Toggle aria-label="toggle navigation" />
        <Navbar.Content>
          <Text b>CALYPTRA</Text>
        </Navbar.Content>

        <Navbar.Content>
          <Login />
        </Navbar.Content>
        <Navbar.Collapse transitionTime={1000}>
          {collapseItems.map((item) => (
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
