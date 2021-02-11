import React from "react"
import "../../App.css"
import "../style/canva.css"
import { Jumbotron, Button, Row } from "react-bootstrap"
import Iframe from "react-iframe"

const kpmgAiScreen = () => {
  return (
    <>
      <Jumbotron id='home-jumbo'>
        <h1>
          <em>Charlene Grant</em>
        </h1>
        <h3>How Ai can improve user experience</h3>
        <p>
          Using a ChatBot to direct a user to specific information
        </p>
        <p>
          <Button variant='light'>Contact Me</Button>
        </p>
      </Jumbotron>
      <Row>
        <Iframe
          url='https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEU5Zz927A&#x2F;view?embed'
          id='bch-roundtable'
          className='canva-iframe'
          display='initial'
          position='relative'
        />
      </Row>
    </>
  )
}

export default kpmgAiScreen
