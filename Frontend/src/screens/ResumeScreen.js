import React from "react"
import { Jumbotron, Col, Button, Row, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"


const ResumeScreen = () => {
  return (
    <>
      <Jumbotron id='home-jumbo'>
        <h1>
          <em>Charlene Grant</em>
        </h1>
        <h2>Resume</h2>
        <p>Full Stack Software Developer | Graphic Designer | Philanthropist</p>
        <p>
          <Button variant='light'>Contact Me</Button>
        </p>
          </Jumbotron>
          <Container style={{ textAlign: 'left', width: '70vw' }}>
      <h3 style={{color: '#ffcc66'}}>Personal Profile</h3>
      <p>
        The mix of creative thinking and logical delivery makes the tech
        industry the ideal career space. Looking for a role that will embrace
        and help cultivate an innovative and expansive mindset. Would flourish
        in an inclusive environment that supports continued learning and
        personal projects.
      </p>
      <h3 style={{color: '#ffcc66'}}>Key Skills</h3>
      <p>
        <strong style={{color: '#ffcc66'}}>Languages: </strong>JavaScript, Python
      </p>
      <p>
        <strong style={{color: '#ffcc66'}}>Frameworks: </strong>MongoDB, Express, React, Node.js
      </p>
      <p>
        <strong style={{color: '#ffcc66'}}>Processes: </strong>Redux, JSON Web Tokens, Bcrypt, REST API
      </p>
      <p>
        <strong style={{color: '#ffcc66'}}>Programs: </strong>VS Code, PostMan, Illustrator, Photoshop,
        InDesign, Spark, Acrobat, Sage 50
      </p>
      <p>
        <strong style={{color: '#ffcc66'}}>Platforms: </strong>WordPress, Wix, Square Space, Ning, HubSpot,
        Mail Chimp, Canva, GitHub, Heroku, Netlify
      </p>
      <h3 style={{color: '#ffcc66'}}>Experience</h3>
      <Row>
        <Col style={{color: '#ffcc66'}}>Full Stack Developer - Portfolio</Col>
        <Col style={{color: '#ffcc66', textAlign: 'right'}}>Aug 2020 to Present</Col>
      </Row>
      <Row>
        <ul>
          <li>
            With HTML, CSS, and JavaScript together with gamification increased
            the effectiveness of revision
          </li>
          <li>
            Using Agile practices and Trello, collated user stories to produce a
            single page eCommerce application using the MERN Stack and Redux for
            state management. Admins can complete CRUD actions inside the
            browser, saving time and frustration.
          </li>
          <li>
            Created a React + Node.js application which allows users to search
            Google Books API and add favourites to their virtual bookshelf.
          </li>
          <li>
            Using Node.js and MongoDB created a backend application which allows
            a user to search a movie collection in the database and save watched
            movies to a new collection.
          </li>
          <li>This beautiful portfolio website</li>
        </ul>
      </Row>
      <Row>
        <Col style={{color: '#ffcc66'}}>Chief Design Officer | Affirmed Visionary</Col>
        <Col style={{color: '#ffcc66', textAlign: 'right'}}>Feb 2018 to Present</Col>
      </Row>
      <Row>
        <ul>
          <li>
            A graphic designer and branding strategist, creating stationery,
            speaking her authentic story, empowerment, and community endeavours.
          </li>
          <li>
            Taught interns to carry out administration duties such as data
            entry, accounting, and bookkeeping.
          </li>
          <li>Marketing</li>
          <li>Governance including Companies House requirements</li>
        </ul>
      </Row>
      <Row>
        <Col style={{color: '#ffcc66'}}>Founding Director | Big Dreams Clear Visions CIC</Col>
        <Col style={{color: '#ffcc66', textAlign: 'right'}}>Jan 2018 to Present</Col>
      </Row>
      <Row>
        <ul>
          <li>
            Managing a team of four, orchestrated brainstorming, business
            planning and group coaching resulting in the incorporation of 8
            non-profit organisations.{" "}
          </li>
          <li>
            Empowered and inspired 15 young girls through mentorship. Writing
            and facilitating an eighteen-week program. Funding was applied for
            and won from the National Lottery. Local celebrities and the Mayor
            were involved in the venture. The objective of the program was to
            “Be Your Own Heroine”.
          </li>
          <li>Gifted the Web Design, Branding and ongoing Marketing.</li>
          <li>Governance including Companies House requirements.</li>
        </ul>
      </Row>
      <h3 style={{color: '#ffcc66'}}>Public Speaking</h3>

      <Row>
        <Col style={{color: '#ffcc66'}}>Organisation</Col>
        <Col style={{color: '#ffcc66'}}>Topic</Col>
        <Col style={{color: '#ffcc66'}}>
          Pitch Deck?
        </Col>
              </Row>
              <br />
      <Row>
        <Col>C.B.F Round Table Event</Col>
        <Col>Journey in to tech and experience on the Black CodHer Bootcamp</Col>
        <Col>
        <LinkContainer to={`/slides/bch-roundtable`}>
            <Button variant='light' className='btn-sm'>
              View
            </Button>
          </LinkContainer>
        </Col>
              </Row>
              <br />
      <Row>
        <Col>KPMG</Col>
        <Col>How Ai can be used to improve user experience</Col>
        <Col>
        <LinkContainer to={`/slides/kpmg`}>
            <Button variant='light' className='btn-sm'>
              View
            </Button>
          </LinkContainer>
        </Col>
              </Row>
              <br />
      <Row>
        <Col>Blaxk CodHer Demo Day</Col>
        <Col>Showcasing and pitching the eCommerce template SPA as an MVP</Col>
        <Col>
          <LinkContainer to={`/slides/demo-day`} disabled>
            <Button variant='light' className='btn-sm'>
              Soon
            </Button>
          </LinkContainer>
        </Col>
              </Row>
              </Container>
    </>
  )
}

export default ResumeScreen
