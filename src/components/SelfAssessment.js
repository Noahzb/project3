import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button } from 'react-mdl';
import Importboi from './Mainpage';
class Self extends Component {
    
   constructor (props) {
       super(props);
       this.state = { activeTab: 0};
   }
   toggleCategories() {
    if (this.state.activeTab === 0){
        return(
         
            <div className="projects-grid">
            {/* HTML */}
         
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://sabe.io/classes/html/thumbnail.png) center / cover'}}>HTML</CardTitle>
           <CardText>
               Testing your skills with HTML
           </CardText>
                <CardActions border>
                    <a href="https://learn.shayhowe.com/html-css/building-your-first-web-page/" rel="noopener noreferrer" target="_blank">
                    <Button>Getting started</Button>
                    </a>
                    <a href="https://www.quackit.com/html/html_help.cfm" rel="noopener noreferrer" target="_blank">
                    <Button> Quackit html helpl</Button>
                    </a>
                    <a href="https://www.w3schools.com/html/html_quiz.asp" rel="noopener noreferrer" target="_blank">
                    <Button> W3 Schools Test</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* CSS */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://bradsknutson.com/wp-content/uploads/2018/03/css3-social-media-icons.png) center / cover'}}>CSS</CardTitle>
           <CardText>
               Testing your skills with CSS
           </CardText>
                <CardActions border>
                <a href="https://getbootstrap.com/docs/4.1/getting-started/introduction/" rel="noopener noreferrer" target="_blank">
                    <Button> Bootstrap Docs </Button>
                    </a>
                    <a href="http://www.cssdesk.com/" rel="noopener noreferrer" target="_blank">
                    <Button>  Cssdesk Practice </Button>
                    </a>
                    <a href="https://www.w3schools.com/css/css_quiz.asp" rel="noopener noreferrer" target="_blank">
                    <Button> W3 Schools Test</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* JavaScript */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/javascript.png?1512678119) center / cover'}}>JavaScript</CardTitle>
           <CardText>
               Testing your skills with JavaScript
           </CardText>
                <CardActions border>
                <a href="https://javascript30.com/" rel="noopener noreferrer" target="_blank">
                    <Button> Javascript30 </Button>
                    </a>
                    <a href="https://javascript-workbook.netlify.com/" rel="noopener noreferrer" target="_blank">
                    <Button> javascript workbook </Button>
                    </a>
                    <a href="https://www.w3schools.com/js/js_quiz.asp" rel="noopener noreferrer" target="_blank">
                    <Button> W3 Schools Test</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* JQUERY */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://sg.fiverrcdn.com/photos/104964294/original/f044e967955be66ba56d83c5d575def8a87bce19.png?1512052845) center / cover'}}>JQUERY</CardTitle>
           <CardText>
               Testing your skills with JQUERY
           </CardText>
                <CardActions border>
                <a href="https://www.khanacademy.org/computing/computer-programming/html-js-jquery" rel="noopener noreferrer" target="_blank">
                    <Button> Khanacademy </Button>
                    </a> 
                    <a href="https://htmlcheatsheet.com/jquery/" rel="noopener noreferrer" target="_blank">
                    <Button> Jquery cheatsheet</Button>
                    </a>
                    <a href="https://www.w3schools.com/jquery/jquery_quiz.asp" rel="noopener noreferrer" target="_blank">
                    <Button>  W3 Schools Test </Button>
                    </a>
                   
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           </div>
        )
    } else if(this.state.activeTab === 1){
        return(
            <div className="projects-grid">
            {/* Firebase */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://ndroidarmy.files.wordpress.com/2017/02/image00.png?w=1200) center / cover'}}>Firebase</CardTitle>
           <CardText>
               Testing your skills with Firebase
           </CardText>
                <CardActions border>
                <a href="https://firebase.google.com/docs/" rel="noopener noreferrer" target="_blank">
                    <Button> Firebase Documation </Button>
                    </a> 
                    <a href="https://github.com/firebase/" rel="noopener noreferrer" target="_blank">
                    <Button> Firebase Github</Button>
                    </a>
                    <a href="https://www.youtube.com/watch?v=m_Gzzy9V6f0&feature=youtu.be" rel="noopener noreferrer" target="_blank">
                    <Button>Firebase Review Video</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Project 1 */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(http://www.whitehouse51.com/pic/www.shankyfinance.com/uploaded_files/main_img/shankyfinance.com5877335340ff511505663-the-word-project-placed-over-a-plan-project-3d-render--Stock-Photo.jpg) center / cover'}}>Project 1</CardTitle>
           <CardText>
               Resources for Project 1
           </CardText>
                <CardActions border>
                <a href="http://www.ideamachine.io/#view-ideas-top" rel="noopener noreferrer" target="_blank">
                    <Button> Project IdeaMachine </Button>
                    </a> 
                    <a href="https://www.ideaswatch.com/startup-ideas/app" rel="noopener noreferrer" target="_blank">
                    <Button> Project Ideaswatch</Button>
                    </a>
                    <a href="https://www.google.com/url?q=http://nevonprojects.com/web-based-project-ideas-topics/&source=gmail&ust=1549650139006000&usg=AFQjCNGJdkI6-cZmrBM8269kC6dspq0ftA" rel="noopener noreferrer" target="_blank">
                    <Button>web based project ideas</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Portfolio */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://www.raizavegaphotography.com/wp-content/uploads/2017/02/Portfolio.png) center / cover'}}>Portfolio</CardTitle>
           <CardText>
               Resources for Portfolio
           </CardText>
                <CardActions border>
                <a href="https://github.com/iRaul/awesome-portfolios" rel="noopener noreferrer" target="_blank">
                    <Button> Frontend Portfolios </Button>
                    </a> 
                    <a href="https://gist.github.com/MWins/41c6fec2122dd47fdfaca31924647499" rel="noopener noreferrer" target="_blank">
                    <Button> Backend Projects github</Button>
                    </a>
                    <a href="https://trello.com/" rel="noopener noreferrer" target="_blank">
                    <Button> Trello to stay organized</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* NodeJS */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*zSyNQs8tbBU1sV3XABnhhg.png) center / cover'}}>NodeJS</CardTitle>
           <CardText>
               Testing your skills with NodeJS
           </CardText>
                <CardActions border>
                <a href="https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_" rel="noopener noreferrer" target="_blank">
                    <Button> Node Intro for beginners </Button>
                    </a> 
                    <a href="https://github.com/workshopper/learnyounode" rel="noopener noreferrer" target="_blank">
                    <Button> Node workshop github </Button>
                    </a> <a href="https://www.c-sharpcorner.com/article/overview-and-functionality-of-npm-node-package-manager/" rel="noopener noreferrer" target="_blank">
                    <Button> overview and functionality </Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           </div>
        )
    } else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">
           {/* MYSQL */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-images-1.medium.com/max/1600/0*AhVo_3sCq-ft64ki.jpg) center / cover'}}>MYSQL</CardTitle>
           <CardText>
               Testing your skills with MYSQL
           </CardText>
                <CardActions border>
                <a href="https://www.youtube.com/watch?v=yxyxYQckNHU&feature=youtu.be" rel="noopener noreferrer" target="_blank">
                    <Button> MYSQL introduction </Button>
                    </a> 
                    <a href="http://www.mysqltutorial.org/mysql-cheat-sheet.aspx" rel="noopener noreferrer" target="_blank">
                    <Button> MYSQL cheatsheet </Button>
                    </a> <a href="http://joins.spathon.com/" rel="noopener noreferrer" target="_blank">
                    <Button> Visual Join MYSQL </Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Express */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://miro.medium.com/max/832/1*uPL1uCtLBRSk6akPL2hNzg.jpeg) center / cover'}}>Express</CardTitle>
           <CardText>
               Testing your skills with Express
           </CardText>
                <CardActions border>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction" rel="noopener noreferrer" target="_blank">
                    <Button> NExpress with NodeJS </Button>
                    </a> 
                    <a href="https://www.youtube.com/watch?v=F7NVpxxmmgM" rel="noopener noreferrer" target="_blank">
                    <Button> Super Simple Setup </Button>
                    </a> <a href="https://www.sporcle.com/games/Tsardines/expressjs-quiz" rel="noopener noreferrer" target="_blank">
                    <Button> Express with node Quiz </Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Handle Bars */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1) center / cover'}}>Handlebars</CardTitle>
           <CardText>
               Testing your skills with Handlebars
           </CardText>
                <CardActions border>
                <a href="https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes" rel="noopener noreferrer" target="_blank">
                    <Button> Introduction to Handlebars </Button>
                    </a> 
                    <a href="https://www.google.com/url?q=http://thisdavej.com/learn-handlebars-with-node-js-and-help-freddys-fish/&source=gmail&ust=1549650137331000&usg=AFQjCNGNsP0pXOI8VJXzuIgFqpfCQPVxZA" rel="noopener noreferrer" target="_blank">
                    <Button> Freddy's Fish Farm </Button>
                    </a> <a href="https://www.youtube.com/watch?v=utsrg2L1hec" rel="noopener noreferrer" target="_blank">
                    <Button>Js templates with Handlebars</Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
            {/* Project 2 */}
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://www.voxmusica.net/wp-content/uploads/2019/01/ProjectTwo.jpg) center / cover'}}>Project 2</CardTitle>
           <CardText>
               Resources for Project 2
           </CardText>
                <CardActions border>
                <a href="http://www.ideamachine.io/#view-ideas-top" rel="noopener noreferrer" target="_blank">
                    <Button> Project 2 ideamachine </Button>
                    </a> 
                    <a href="https://www.ideaswatch.com/startup-ideas/app" rel="noopener noreferrer" target="_blank">
                    <Button> project 2 Ideas watch </Button>
                    </a> <a href="https://www.google.com/url?q=http://nevonprojects.com/web-based-project-ideas-topics/&source=gmail&ust=1549650136580000&usg=AFQjCNG6f6KsrEK8Xr4tQiHeJUEU8VkALw" rel="noopener noreferrer" target="_blank">
                    <Button> Web Based Project Ideas</Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           </div>
        )
        } else if(this.state.activeTab === 3){
        return(
            <div className="projects-grid">
           {/* MongoDB */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png) center / cover'}}>MongoDB</CardTitle>
           <CardText>
               Testing your skills with MongoDB
           </CardText>
                <CardActions border>
                <a href="https://www.mongodb.com/what-is-mongodb" rel="noopener noreferrer" target="_blank">
                    <Button> introduction to MONGODB </Button>
                    </a> 
                    <a href="https://medium.freecodecamp.org/introduction-to-mongoose-for-mongodb-d2a7aa593c57" rel="noopener noreferrer" target="_blank">
                    <Button> Free Code Camp </Button>
                    </a> <a href="https://www.tutorialspoint.com/mongodb/mongodb_online_quiz.htm" rel="noopener noreferrer" target="_blank">
                    <Button> Mongodb web Quiz </Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* React */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://miro.medium.com/max/1120/1*dLaDL-lSN0iprzmOpmM7zQ.png) center / cover'}}>React</CardTitle>
           <CardText>
               Testing your skills with React
           </CardText>
                <CardActions border>
                <a href="https://www.google.com/url?q=https://egghead.io/courses/start-learning-react&source=gmail&ust=1549650136185000&usg=AFQjCNGA6u8315GD5IIY5H8sAirIsgLqhA" rel="noopener noreferrer" target="_blank">
                    <Button> Start Learning react </Button>
                    </a> 
                <a href="https://github.com/facebook/create-react-app" rel="noopener noreferrer" target="_blank">
                    <Button> React github repo </Button>
                    </a> 
                    <a href="http://buildwithreact.com/tutorial" rel="noopener noreferrer" target="_blank">
                    <Button> interactive overview </Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
            {/* PHP */}
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn0.froala.com/assets/editor/docs/server/meta-social/php-00441489844a0103eae71ba2fe15244c.png) center / cover'}}>PHP</CardTitle>
           <CardText>
               Testing your skills with PHP
           </CardText>
                <CardActions border>
                <a href="https://www.w3schools.com/php/" rel="noopener noreferrer" target="_blank">
                    <Button> PHP 5 tutorial</Button>
                    </a> 
                    <a href="https://www.udemy.com/learn-php-fundamentals-from-scratch/" rel="noopener noreferrer" target="_blank">
                    <Button> PHP from scratch </Button>
                    </a> 
                    <a href="https://www.w3schools.com/php/php_quiz.asp" rel="noopener noreferrer" target="_blank">
                    <Button> PHP W3 schools quiz </Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Final Projects */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '200px', background: 'url(http://www.rv337.com/vimages/shared/vnews/stories/5669b385854d9/1_Final_350X170.png) center / cover'}}>Final Project</CardTitle>
           <CardText>
               Resources for the Final Project
           </CardText>
                <CardActions border>
                <a href="http://www.ideamachine.io/#view-ideas-top" rel="noopener noreferrer" target="_blank">
                    <Button> Final project ideamachine </Button>
                    </a> 
                    <a href="https://www.ideaswatch.com/startup-ideas/app" rel="noopener noreferrer" target="_blank">
                    <Button> final project Ideas watch </Button>
                    </a> <a href="https://www.google.com/url?q=http://nevonprojects.com/web-based-project-ideas-topics/&source=gmail&ust=1549650136580000&usg=AFQjCNG6f6KsrEK8Xr4tQiHeJUEU8VkALw" rel="noopener noreferrer" target="_blank">
                    <Button> Web Based Project Ideas</Button>
                    </a> 
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           </div>
        )
        }

   }


    render(){
        return (
            <div className="selfassessmentPage">
            <Importboi />
            <div className = "category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Week 1-5</Tab>
                    <Tab>Week 6-10</Tab>
                    <Tab>Week 10-15</Tab>
                    <Tab>Week 16-20</Tab>
                </Tabs>

                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>

            </div>
            </div>
            
        )
    }
    

}

export default Self;