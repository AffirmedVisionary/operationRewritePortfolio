import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Nav, NavLink } from "react-bootstrap"
import "../App.css"

const Sidebar3 = () => {
  return (
    // <div class='sidenav'>
      <Nav defaultActiveKey="/" className="flex-column">
        
        <LinkContainer to='/'>
          <NavLink>Home</NavLink>
        </LinkContainer>
        
        <LinkContainer to='/resume'>
          <Nav.Link>Resume</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/bdcv'>
          <Nav.Link>BDCV</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/affirmed'>
          <Nav.Link>Affirmed</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/shop'>
          <Nav.Link>Shop</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/profile'>
          <Nav.Link>Profile</Nav.Link>
        </LinkContainer>

        <LinkContainer to='/content'>
          <Nav.Link>Content</Nav.Link>
        </LinkContainer>
      </Nav>
    // </div>
  )
}

export default Sidebar3
