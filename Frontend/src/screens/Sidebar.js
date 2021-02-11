import React from "react"
import "./style/Sidebar.css"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import Collapse from "@material-ui/core/Collapse"
// import { Link } from "react-router-dom"
// import { Router } from "express"
// import { LinkContainer } from "react-router-bootstrap"

function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
  const [collapsed, setCollapsed] = React.useState(true)
  const { label, items, Icon } = item

  function toggleCollapse() {
    setCollapsed((prevValue) => !prevValue)
  }

/*     function onClick(e) {
        if (Array.isArray(items)) {
            toggleCollapse()
        }     
    }
 */
    let changeRoute = () => {
        if (Array.isArray(items)) {
            toggleCollapse()
        }
        this.context.router.push(`/${item.items.link}`)
    }

  let expandIcon

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className={
          "sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded"
        }
      />
    ) : (
      <ExpandMoreIcon className='sidebar-item-expand-arrow' />
    )
  }

  return (
    <>
      <ListItem
        className='sidebar-item'
        onClick={changeRoute}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: depth * depthStep }}
          className='sidebar-item-content'
        >
          {Icon && <Icon className='sidebar-item-icon' fontSize='small' />}
          <div className='sidebar-item-text'>{label}</div>
        </div>
        {expandIcon}
          </ListItem>
          
      <Collapse in={!collapsed} timeout='auto' unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                  {subItem === "divider" ? (
                    <Divider style={{ margin: "6px 0" }} />
                    ) : (
                    <SidebarItem
                      depth={depth + 1}
                      depthStep={depthStep}
                      item={subItem}
                            />
                  )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </>
  )
}

function Sidebar({ items, depthStep, depth, expanded }) {
  return (
    <div className='sidebar'>
      <List disablePadding dense>
        {items.map((sidebarItem, index) => (
            <React.Fragment key={`${sidebarItem.name}${index}`}>
              {sidebarItem === "divider" ? (
                <Divider style={{ margin: "6px 0" }} />
              ) : (
                <SidebarItem
                  depthStep={depthStep}
                  depth={depth}
                  expanded={expanded}
                  item={sidebarItem}
                />
              )}
            </React.Fragment>
        ))}
      </List>
    </div>
  )
}

Sidebar.contextTypes = {
    router: React.PropTypes.func.isRequired
}

export default Sidebar