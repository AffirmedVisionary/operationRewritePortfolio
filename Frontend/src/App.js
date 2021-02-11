import React from "react"
// import items from "./screens/Sidebar-Items"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Col, Row } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Grid, Segment } from 'semantic-ui-react'

// import Sidebar from "./components/Sidebar"
// import Sidebar3 from "./components/Sidebar3"
import Footer from "./components/Footer"
import Header from "./components/Header"
// import Navbar from "./components/Nav/Navbar"
// import MenuTop from "./components/MenuTop"
import ResumeScreen from "./screens/ResumeScreen"
import BdcvScreen from "./screens/BdcvScreen"
import AffirmedScreen from "./screens/AffirmedScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ContentScreen from "./screens/ContentScreen"
import ContactScreen from "./screens/ContactScreen"
import roundtableScreen from "./screens/slides/roundtableScreen"
import kpmgAiScreen from "./screens/slides/kpmgAiScreen"
import TestScreen from "./screens/TestScreen"

function App() {
  return (
    <React.Fragment id='page'>
      <Router>
      <Route path='/test' component={TestScreen} exact />

        <Row id='App'>
          <Row>
            <Col id='main-col'>
            <Header />
              <Route path='/' component={HomeScreen} exact />
              <Route path='/about' component={AboutScreen} exact />
              <Route path='/resume' component={ResumeScreen} exact />
              <Route path='/bdcv' component={BdcvScreen} exact />
              <Route path='/affirmed' component={AffirmedScreen} exact />
              <Route path='/profile' component={ProfileScreen} exact />
              <Route path='/content' component={ContentScreen} exact />
              <Route
                path='/slides/bch-roundtable'
                component={roundtableScreen}
                exact
              />
              <Route path='/slides/kpmg' component={kpmgAiScreen} exact />
              <Route path='/contact' component={ContactScreen} exact />
              <Footer />
            </Col>
          </Row>
        </Row>
      </Router>
    </React.Fragment>
  )
}

export default App
