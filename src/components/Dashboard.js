import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { LOCAL_STRAGE_KEY } from '../utils/Settings'
import { Grid, Cell} from 'react-mdl'
// API
import * as MyAPI from '../utils/MyAPI'

class Dashboard extends Component {

  logoutRequest = () => {

    const { user } = this.props

    const param = {
      login_token: user.login_token
    }

    MyAPI.logout(param)
    .then((results) => {
      localStorage.removeItem(LOCAL_STRAGE_KEY);
      this.props.history.push("/")
    })
    .catch((err) => {
      console.log("err: ", err)
      localStorage.removeItem(LOCAL_STRAGE_KEY);
      this.props.history.push("/")
    })
  }

  render() {

    const { user } = this.props

    return(
      <div className='dashboard' style={{textAlign: 'center'}}>
          <div>
     
      
          <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                        
                            <img
                                src="https://i0.wp.com/www.sunitagirl.com/wp-content/uploads/2017/05/badge.png?resize=300%2C300"
                                alt="avatar"
                                className="avatar-img"
                            />
                            
                            <div className="banner-text">
                            <br></br>
                            <a href="/Mypage">Account Detected! click here to continute</a>
                                <h1>UCF Coding Bootcamp Guide to Staying on Track</h1>

                                <hr />

                                <p> HTML/CSS | JavaScript | React | MongoDB | NodeJS | Express | PHP</p>

                              
                              


          
         
          </div>
          </Cell>
</Grid>
      </div>
      </div>
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
export default withRouter( connect( mapStateToProps )(Dashboard) )
