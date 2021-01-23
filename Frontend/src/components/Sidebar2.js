import React from 'react'
import { LinkContainer } from "react-router-bootstrap"
import '../App.css'


const Sidebar2 = () => {
    return (
        <div class="sidenav">
            
            <LinkContainer to='/'>
            <h3>Home</h3>
          </LinkContainer>
            <LinkContainer to='/resume'>
            <h3>Resume</h3>
          </LinkContainer>
            <LinkContainer to='/bdcv'>
            <h3>BDCV</h3>
          </LinkContainer>
            <LinkContainer to='/affirmed'>
            <h3>Affirmed</h3>
          </LinkContainer>
            <LinkContainer to='/profile'>
            <h3>Profile</h3>
          </LinkContainer>
            <LinkContainer to='/content'>
            <h3>Content</h3>
          </LinkContainer>

        </div>
    )
}

export default Sidebar2
