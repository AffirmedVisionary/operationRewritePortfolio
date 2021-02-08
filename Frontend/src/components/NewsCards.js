import React from "react"
import { CardColumns, Card } from "react-bootstrap"

const NewsCards = () => {
  return (
      <CardColumns>
                <Card className='text-right' text='dark' border="warning">
        <blockquote className='blockquote mb-0 card-body'>
          <p>
            When you know your name, you should hang on to it, for unless it is
            noted down and remembered, it will die when you do.
          </p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              <cite title='Toni Morrison'>Toni Morrison</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card bg='info' text='white'>
        <Card.Img
          variant='top'
          src='https://7qvrka.db.files.1drv.com/y4p_4estNXrJpIGnBf7MoRd2rk6ew7w2hKIkxNM1JKDD5ZGFZ4vASQMuM99E6hU6GhOvm8QMeJvFB5RSdpDhfSNLvM-nRhuwdTMlxRysDlRMGtxVkGDrrepHSBFBo2gmfH8khXdnMdOX01iUCp6urKnQHV3U3T-ci8CSrvYhAM1dkhvHfxhJ_cnlmYUCD01_wYYsrbSx9UfrEBW1NinqfNWog/card%20image%202_png.png?psid=1'
        />
        <Card.Body>
          <Card.Title>Follow your wildest dreams</Card.Title>
          <Card.Text>
            I dream of a family dynasty, of great philanthropy. One where I can
            help others daily find great power in their story. To empower others
            to inspire others to ultimately be free.
          </Card.Text>
        </Card.Body>
      </Card>

          
      <Card text='dark' border="warning" className='text-center p-3'>
        <blockquote className='blockquote mb-0 card-body'>
          <p>
            One can choose to go back toward safety or forward toward growth.
            Growth must be chosen again and again: fear must be overcome again
            and again.
          </p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              <cite title='Abraham Maslow'>Abraham Maslow</cite>
            </small>
          </footer>
        </blockquote>
          </Card>
          
      <Card bg='info' text='white'>
        <Card.Img
          variant='top'
          src='https://gyo0bq.db.files.1drv.com/y4pWeunVyqecXa5zA1rLf5-UU0ScW-nNwZJQtqeEq35vUIz8oJ8TZRpa3alchsLJfsfagbgXE31O37uxvYAwo3gEc3_S8l-yHsgtUr1noJGz3PSuiN7QfR4JRA4u6Ai_BrPfX10BDOse4NDti7GWIc97g-pMd7RAyGng3GqKqRxdDt9W847XyCbJQqX2OLspxpjQhDL8GWEpZGCgl6wgd5rZA/card%20image%201_png.png?psid=1'
        />
        <Card.Body>
          <Card.Title>Full Stack Gems</Card.Title>
          <Card.Text>
            Gratitude begets more, I am so thankful for the knowledge and
            support I encountered on this bootcamp. Six Months well spent.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 1 day ago</small>
        </Card.Footer>
      </Card>

      <Card className='p-3' text='dark' border="warning">
        <blockquote className='blockquote mb-0 card-body'>
          <p>
            Hold on to your dreams of a better life and stay committed to
            striving to realise it.
          </p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              <cite title='Earl G Graves. Sr.'>Earl G Graves. Sr.</cite>
            </small>
          </footer>
        </blockquote>
          </Card>

      <Card bg='info' text='white' className='text-center p-3'>
        <blockquote className='blockquote mb-0 card-body'>
          <p>
            I prefer to be rue to myself, even at the hazard of incurring the ridicule of others, rather than be false and to incur my own abhorrence.
          </p>
          <footer className='blockquote-footer'>
            <small className='text-muted'>
              <cite title='Frederic Douglas'>Frederic Douglas</cite>
            </small>
          </footer>
        </blockquote>
      </Card>

      <Card className='text-center' text='dark' border="warning">
        <Card.Body>
          <Card.Title>B.D.C.V</Card.Title>
          <Card.Text>
            Big Dreams Clear Visions CIC is a non-profit I founded in 2018, we
            offer business coaching/planning, accountability and mentorship.{" "}
          </Card.Text>
          <Card.Text>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card bg='info' text='white'>
        <Card.Body>
          <Card.Title>The Great Hub</Card.Title>
          <Card.Text>
            Ideas run through my vains. Going against the grain, apparently my
            destiny. To put all my loves, passions, work into a central place.
            Lets see how this goes shall we. Since what is more niche than
            oneself?
          </Card.Text>
          <Card.Text>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
          </Card>
          
          <Card>
        <Card.Img src='https://gyo0bq.db.files.1drv.com/y4pZoO9sUBlSsEDoPG0xwOeUNLq0Bz7O2DXuL6XliZH0HbPrnKgtINoNKSR3Yo3Nhh1ucWcjdMtdrjPU2wAfkvve-eR7hELP1kLjLPG1FyQax_fbFHvzRaRtGXJQPIS9A_ColwCgRJKx7RA63Ca1b7St1V2FHe90bQpcWJZ25NI5rMs_Fzx6ufB6rSenusOEaA7ZEqHXMupKtIPxeq1latZ6w/card%20image%203_png.png?psid=1' />
      </Card>

    </CardColumns>
  )
}

export default NewsCards
