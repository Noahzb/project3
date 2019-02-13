import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, IconButton, Button, Textfield } from 'react-mdl';
import '../../node_modules/react-mdl/material'

class MyPage extends Component {
    render() {
        return (

            <div className="homePage">

                <div header><h1>Home Page</h1></div>
                <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
                    <Grid className="landing-grid">
                        <Cell col={12}>
                            <img
                                src="https://i0.wp.com/www.sunitagirl.com/wp-content/uploads/2017/05/badge.png?resize=300%2C300"
                                alt="avatar"
                                className="avatar-img"
                            />
                            <div className="banner-text">
                                <h1>UCF Coding Bootcamp Guide to Staying on Track</h1>

                                <hr />

                                <p> HTML/CSS | JavaScript | React | MongoDB | NodeJS | Express | PHP</p>

                                <div className="social-links">

                                    {/* Facebook */}
                                    <a href="https://www.facebook.com/ucfcebootcamps/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-facebook-square" aria-hidden="true" />
                                    </a>

                                    {/* Github */}
                                    <a href="https://github.com/orgs/UCF-Coding-Boot-Camp/teams" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                    {/* Free code Bootcamp*/}
                                    <a href="https://www.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                                    </a>

                                    {/* Linkedin */}
                                    <a href="https://www.linkedin.com/showcase/ucf-coding-boot-camp/about/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/* youtube */}
                                    <a href="https://www.youtube.com/channel/UCyrmbwsJdFE7fbIp2BaVwjw" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-youtube-square" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>

                            <br></br><br></br><br></br><br></br><br></br><br></br>
                            <div>
                                <div className heading><h1>TrillogyHub Database</h1>
                                    <h3>When you come across a vital website or line of code from StackOverFlow you need a place to store it so you dont spend countless hours looking through your computer to see where you saved it. This is TrillogyHub's Database and it's going to be perfect for you.</h3></div>
                                <br></br><br></br>
                                <div className="myStuff-grid">
                                    {/* HTML */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://sabe.io/classes/html/thumbnail.png) center / cover' }}>HTML</CardTitle>
                                        <CardText>
                                            Notes for HTML Pages
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />

                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                    {/* CSS */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://bradsknutson.com/wp-content/uploads/2018/03/css3-social-media-icons.png) center / cover' }}>CSS</CardTitle>
                                        <CardText>
                                            Notes for CSS, Bootstrap, SASS, Materialize
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                    {/* JavaScript */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/javascript.png?1512678119) center / cover' }}>JavaScript</CardTitle>
                                        <CardText>
                                            Notes For All JavaScript, JQuery
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                    {/* Project 1 */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.whitehouse51.com/pic/www.shankyfinance.com/uploaded_files/main_img/shankyfinance.com5877335340ff511505663-the-word-project-placed-over-a-plan-project-3d-render--Stock-Photo.jpg) center / cover' }}>Project 1</CardTitle>
                                        <CardText>
                                            All Notes For All Projects
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                </div>
                                <br></br><br></br><br></br><br></br>
                                <div className="myStuff-grid">
                                    {/* Portfolio */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.raizavegaphotography.com/wp-content/uploads/2017/02/Portfolio.png) center / cover' }}>Portfolio</CardTitle>
                                        <CardText>
                                            All Notes For Portfolios
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                    {/* MongoDB */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png) center / cover' }}>MongoDB/MYSQL</CardTitle>
                                        <CardText>
                                            Database Notes for MongoDB, MYSQL, Firebase, Squelize
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                    {/* React */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1120/1*dLaDL-lSN0iprzmOpmM7zQ.png) center / cover' }}>React</CardTitle>
                                        <CardText>
                                            All Notes For ReactJS
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                    {/* Other */}
                                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500) center / cover' }}>Other</CardTitle>
                                        <CardText>
                                            Notes for Anything you find important
           </CardText>
                                        <CardActions border>
                                            <Textfield
                                                onChange={() => { }}
                                                label="Text lines..."
                                                rows={3}
                                                style={{ width: '200px' }}
                                            />
                                        </CardActions>
                                        <CardMenu style={{ color: '#fff' }}>
                                            <IconButton name="share" />
                                        </CardMenu>
                                    </Card>
                                </div>
                            </div>
                        </Cell>
                    </Grid>

                </div>
                <div class="wrapper video">
                    <div><a href="https://www.youtube.com/user/TechGuyWeb" rel="noopener noreferrer" target="_blank"><h2>Travesty Media</h2></a></div>
                    <iframe src='https://www.youtube.com/embed/UnTQVlqmDQ0'
                        frameBorder='10'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                    ></iframe>
                    <div><h3>Travesty Media is great Online tool to use when you want to break down a subject and get a
                    different teacher's perspective on the specific component you're stuck on. </h3></div>
                </div>
                </div>

        )
    
    }

}





function mapStateToProps({ user }) {
    return {
        user
    }
}
export default withRouter(connect(mapStateToProps)(MyPage))

