import React from "react"
import { Col, Row } from "react-bootstrap"
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
    <Row>
      {socialList.map((social) => (
        <Col>
            <a href={`${social.link}`} target='_blank' rel='noreferrer'>
              <social.icon fontSize='large' />
              </a>
              <br />
              <span className='social-tooltip'>{social.tooltip}</span>
        </Col>
      ))}
    </Row>
  )

  /*   return (
    <Row>
      <Col lg={2}>
        <OverlayTrigger
          key='bottom'
          placement='bottom'
          overlay={
            <Tooltip id='tooltip-bottom'>
              <strong>Main Instagram Page</strong>.
            </Tooltip>
          }
        >
          <a
            href='https://www.instagram.com/affirmedvisionary/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon fontSize='large' />
          </a>
        </OverlayTrigger>
      </Col>
      <Col lg={2}>
        <OverlayTrigger
          key='bottom'
          placement='bottom'
          overlay={
            <Tooltip id='tooltip-bottom'>
              <strong>All things merch</strong>.
            </Tooltip>
          }
        >
          <a
            href='https://www.instagram.com/affirmedmerch/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon fontSize='large' />
          </a>
        </OverlayTrigger>
      </Col>
      <Col lg={2}>
        <OverlayTrigger
          key='bottom'
          placement='bottom'
          overlay={
            <Tooltip id='tooltip-bottom'>
              <strong>ANCH Appreciation</strong>.
            </Tooltip>
          }
        >
          <a
            href='https://www.instagram.com/affirmedv/'
            target='_blank'
            rel='noreferrer'
          >
            <InstagramIcon fontSize='large' />
          </a>
        </OverlayTrigger>
      </Col>
      <Col lg={2}>
        <a
          href='https://www.linkedin.com/in/affirmedvisionary/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon fontSize='large' />
        </a>
      </Col>
      <Col lg={2}>
        <a
          href='https://twitter.com/AffirmedVision'
          target='_blank'
          rel='noreferrer'
        >
          <TwitterIcon fontSize='large' />
        </a>
      </Col>
      <Col lg={2}>
        <a
          href='https://www.pinterest.co.uk/affirmedvisionary'
          target='_blank'
          rel='noreferrer'
        >
          <PinterestIcon fontSize='large' />
        </a>
      </Col>
    </Row>
  )
 */
}

export default Socials
