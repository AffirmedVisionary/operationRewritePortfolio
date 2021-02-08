import React from "react"
import { Jumbotron, Col, Button, Row } from "react-bootstrap"
import NewsCards from "../components/NewsCards"

const HomeScreen = () => {
  return (
    <>
      <Jumbotron id='home-jumbo'>
        <h1>
          <em>Charlene Grant</em>
        </h1>
        <h3>Welcome,</h3>
        <p>
          Get directions, learn with free content, shop with me, work with me
        </p>
        <p>
          <Button variant='light'>Contact Me</Button>
        </p>
      </Jumbotron>
        <Row>
        <Col>
          <h2>News</h2>
        </Col>
        </Row>
        <Row>
        <Col>
          <NewsCards />
        </Col>
      </Row>
      <Row>
        <Col>
        <h1>Home</h1>
      <p>Welcome to the hub of Charlene Grant</p>
        </Col>
      </Row>
    </>
  )
}

export default HomeScreen
