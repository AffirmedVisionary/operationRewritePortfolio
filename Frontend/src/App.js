import React from "react"
// import items from "./screens/Sidebar-Items"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Grid, Segment } from 'semantic-ui-react'

// import Sidebar from "./components/Sidebar"
import Sidebar2 from "./components/Sidebar2"
import Footer from "./components/Footer"
import ResumeScreen from "./screens/ResumeScreen"
import BdcvScreen from "./screens/BdcvScreen"
import AffirmedScreen from "./screens/AffirmedScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ContentScreen from "./screens/ContentScreen"
import ContactScreen from "./screens/ContactScreen"

function App() {


  return (
    <>
                    <Router>
        <div className='App'>
          <div id='navspace'>Top Menu</div>
          <div className='row'>
         
            <div className='col' id='side-col'>
                            <Sidebar2 />
            
              </div>
            <div className='col' id='main-col'>
            <div className='box'>
                <Container id='screenContainer'>
              <Route path='/' component={HomeScreen} exact />
              <Route path='/about' component={AboutScreen} exact />
              <Route path='/resume' component={ResumeScreen} exact />
              <Route path='/bdcv' component={BdcvScreen} exact />
              <Route path='/affirmed' component={AffirmedScreen} exact />
              <Route path='/profile' component={ProfileScreen} exact />
              <Route path='/content' component={ContentScreen} exact />
              <Route path='/contact' component={ContactScreen} exact />
              </Container>
              </div>
              <Footer />
            </div>
          {/*         <div className="col">
          <div className="box">Col 3/3</div>
        </div>
 */}
        </div>
        </div>
        </Router>
    </>
    /*     <Router>
<Grid columns='equal'>
    <Grid.Column>
      <Segment>      <Sidebar items={items} /> </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
          <Segment>
          <Route path='/' component={HomeScreen} exact />

      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>
    </Router> */
    /*     <Router>
      <Sidebar items={items}
      <main className='py-4'>

           <Container fluid>

            <Route path='/' component={HomeScreen} exact />
            </Container>

        </main>
    </Router>
 */
  )
}

export default App
