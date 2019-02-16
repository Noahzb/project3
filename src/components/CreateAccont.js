import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Cell} from 'react-mdl'
// semantic-ui
import { Container, Grid } from 'semantic-ui-react'

import CreateAccontForm from './CreateAccontForm'

class CreateAccont extends Component {

  render() {

    return(

      <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
      <Grid className="landing-grid">
          <Cell col={12} style={{marginLeft:"10%"}}>
              <img
                  src="https://i0.wp.com/www.sunitagirl.com/wp-content/uploads/2017/05/badge.png?resize=300%2C300"
                  alt="avatar"
                  className="avatar-img"
              />
              <div className="banner-text">
              <br></br>
              <Link to="/create_acount">Already have an account? Click me to log in</Link>
              <CreateAccontForm />
                  <h1>UCF Coding Bootcamp Guide to Staying on Track</h1>

               

                  <p> HTML/CSS | JavaScript | React | MongoDB | NodeJS | Express | PHP</p>

                  <div className="social-links">
                  </div>
                  </div>
                  </Cell>
</Grid>
</div>
    )
  }
}

// react-redux
function mapStateToProps ( {user} ) {
  return {
    user
  }
}

// export default withRouter(MainPage);
export default withRouter( connect( mapStateToProps )(CreateAccont) )
