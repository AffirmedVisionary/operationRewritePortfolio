import HomeIcon from "@material-ui/icons/Home"
import ReceiptIcon from "@material-ui/icons/Receipt"
// import NotificationsIcon from "@material-ui/icons/Notifications"
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows"
// import SettingsIcon from "@material-ui/icons/Settings"
// import { LinkContainer } from "react-router-bootstrap"
// import { Link } from "react-router-dom"

/* function onClick(e, item) {
  <Link to={item.link}></Link>
  // window.alert(JSON.stringify(item, null, 2))
} */

const items = [
  { name: "home", label: "Home", Icon: HomeIcon, link: "/" },
  {
    name: "about",
    label: "About",
    Icon: ReceiptIcon,
    items: [
      { name: "charlene", label: "Charlene", link: "/about" },
      { name: "bdcv", label: "BDCV", link: '/bdcv' },
      { name: "affirmed", label: "Affirmed Visionary", link: '/affirmed'},
    ],
  },
  "divider",
  {
    name: "profile",
    label: "Profile",
    Icon: DesktopWindowsIcon,
    items: [
      { name: "content", label: "Content", link: '/content'},
      "divider",
      
    ],
  },
]

export default items
