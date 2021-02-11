import React from "react"
import { Col, Row, Button } from "react-bootstrap"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"
import PinterestIcon from "@material-ui/icons/Pinterest"
import GitHubIcon from "@material-ui/icons/GitHub"

const Socials = () => {
  const socialList = [
    {
      platform: "Instagram",
      link: "https://www.instagram.com/affirmedvisionary/",
      tooltip: "Main Instagram Account",
      icon: InstagramIcon,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/affirmedmerch/",
      tooltip: "Merch Account",
      icon: InstagramIcon,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/affirmedv/",
      tooltip: "Animal Crossing Account",
      icon: InstagramIcon,
    },
    {
      platform: "Twitter",
      link: "https://twitter.com/AffirmedVision",
      tooltip: "Personal Twitter Account",
      icon: TwitterIcon,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/affirmedvisionary/",
      tooltip: "Official LinkedIn Profile",
      icon: LinkedInIcon,
    },
    {
      platform: "Pinterest",
      link: "https://www.pinterest.co.uk/affirmedvisionary",
      tooltip: "Official Pinterest Profile",
      icon: PinterestIcon,
    },
    {
      platform: "Github",
      link: "https://github.com/AffirmedVisionary",
      tooltip: "Official Github Profile",
      icon: GitHubIcon,
    },
  ]

  return (
    <>
      <Row>
        <Col>Socials</Col>
      </Row>
      <Row>
        {socialList.map((social) => (
          <Col sm={1}>
              <Button href={social.link} variant='link' >
                <social.icon fontSize='large' />
              </Button>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Socials
