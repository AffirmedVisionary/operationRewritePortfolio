import React from "react"
import "../../App.css"
import "../style/canva.css"
import { Jumbotron, Button, Row } from "react-bootstrap"
import Iframe from "react-iframe"

const roundtableScreen = () => {
  return (
    <>
      <Jumbotron id='home-jumbo'>
        <h1>
          <em>Charlene Grant</em>
        </h1>
        <h3>My Journey Into Tech</h3>
        <p>
          Find out how I got into tech and what Black Codher Bootcamp was like.
        </p>
        <p>
          <Button variant='light'>Contact Me</Button>
        </p>
      </Jumbotron>
      <Row>
        <Iframe
          url='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEOtZJIWh0&#x2F;view?embed'
          id='bch-roundtable'
          className='canva-iframe'
          display='initial'
          position='relative'
        />
      </Row>
    </>
  )
}

export default roundtableScreen
