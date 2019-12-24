import React from "react";
import { Navbar, NavDropdown, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <div className="nav-bar-div">
      <Navbar className="nav-bar" bg="none" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/Main">
              <NavItem id="nav-item" bsPrefix="nav-link">
                {" "}
                Home{" "}
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/Project">
              <NavItem id="nav-item" bsPrefix="nav-link">
                {" "}
                Projects{" "}
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/Illustrations">
              <NavItem id="nav-item" bsPrefix="nav-link">
                {" "}
                Art{" "}
              </NavItem>
            </LinkContainer>
            {/* <LinkContainer to="/Contact">
              <NavItem id="nav-item" bsPrefix="nav-link">
                {" "}
                Say-Hello{" "}
              </NavItem>
            </LinkContainer> */}
            <NavDropdown className="resume-menu" title="Downloads">
              <NavDropdown.Item
                href="https://drive.google.com/open?id=1cLvKPkg4c5kb3tD06I_8wTD7VRNemzxf"
                target="_blank"
              >
                Resume
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://drive.google.com/file/d/1y0iMgiSggtAgHhhMaG0UqVtA1QIzRJ3i/view?usp=sharing"
                target="_blank"
              >
                Casual Position Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
