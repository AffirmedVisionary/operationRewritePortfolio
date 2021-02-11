import React from "react"
import { Nav, NavDropdown, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "../App.css"

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='#000' tect='white'>
        <LinkContainer to='/'>
          <Navbar.Brand>Charlene Grant</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
    <span>
      <FontAwesomeIcon
        icon={faCoffee} color="#ffffff" size="2x"
      />
    </span>
  </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <NavDropdown
              title='About'
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Header>Personal</NavDropdown.Header>

              <LinkContainer to='/profile'>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/resume'>
                <NavDropdown.Item>Resume</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <NavDropdown.Header>Personal</NavDropdown.Header>

              <LinkContainer to='/affirmed'>
                <NavDropdown.Item>Affirmed</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to='/bdcv'>
                <NavDropdown.Item>B.D.C.V</NavDropdown.Item>
              </LinkContainer>

            </NavDropdown>

            <LinkContainer to='/shop' style={{ color: "#fff" }}>
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/content' style={{ color: "#fff" }}>
              <Nav.Link>Content</Nav.Link>
            </LinkContainer>

          </Nav>
          {/*           <Nav>
            <Nav.Link href='#deets' style={{ color: "#fff" }}>
              More deets
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              Login
            </Nav.Link>
          </Nav>
 */}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
