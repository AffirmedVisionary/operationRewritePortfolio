import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
    SidebarContent,
    Menu, MenuItem, SubMenu
} from "react-pro-sidebar"
import { Link } from "react-router-dom";
import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
import '../App.css'
// import HomeIcon from "@material-ui/icons/Home"


const Sidebar = () => {



    return (
        
        <ProSidebar id='proside'>
  <SidebarHeader>Menu</SidebarHeader>
  <SidebarContent>
    <Menu iconShape='square'>
    <MenuItem >
                Home
                <Link to="/" />
      </MenuItem>
      <SubMenu title='About' >
                <MenuItem>
                    Charlene
                    <Link to="/resume" /> 
                    </MenuItem>
                <MenuItem>
                    BDCV
                    <Link to='/bdcv' />
                    </MenuItem>
                <MenuItem>
                    Affirmed
                    <Link to='/affirmed' />
                    </MenuItem>
      </SubMenu>
      <SubMenu title='Profiles'>
                <MenuItem>
                    Profile
                    <Link to="/profile" /> 
                    </MenuItem>
                <MenuItem>
                    Content
                    <Link to='/content' />
                    </MenuItem>
            </SubMenu>
            <MenuItem >
                Contact
                <Link to="/contact" />
      </MenuItem>
    </Menu>
  </SidebarContent>
  <SidebarFooter>Footer</SidebarFooter>
</ProSidebar>

    )
}

export default Sidebar

