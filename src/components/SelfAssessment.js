import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton } from 'react-mdl';

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
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sabe.io/classes/html/thumbnail.png) center / cover'}}>HTML</CardTitle>
           <CardText>
               Testing your skils with HTML
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* CSS */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.ostraining.com/cdn/images/oscampus/courses/CSS-part-1.jpg) center / cover'}}>CSS</CardTitle>
           <CardText>
               Testing your skils with CSS
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* JavaScript */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/javascript.png?1512678119) center / cover'}}>JavaScript</CardTitle>
           <CardText>
               Testing your skils with JavaScript
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* JQUERY */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://sg.fiverrcdn.com/photos/104964294/original/f044e967955be66ba56d83c5d575def8a87bce19.png?1512052845) center / cover'}}>JQUERY</CardTitle>
           <CardText>
               Testing your skils with JQUERY
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           </div>
        )
    } else if(this.state.activeTab === 1){
        return(
            <div className="projects-grid">
            {/* Firebase */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://ndroidarmy.files.wordpress.com/2017/02/image00.png?w=1200) center / cover'}}>Firebase</CardTitle>
           <CardText>
               Testing your skils with Firebase
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* Project 1 */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.whitehouse51.com/pic/www.shankyfinance.com/uploaded_files/main_img/shankyfinance.com5877335340ff511505663-the-word-project-placed-over-a-plan-project-3d-render--Stock-Photo.jpg) center / cover'}}>Project 1</CardTitle>
           <CardText>
               Resources for Project 1
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* Portfolio */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.raizavegaphotography.com/wp-content/uploads/2017/02/Portfolio.png) center / cover'}}>Portfolio</CardTitle>
           <CardText>
               Resources for Portfolio
           </CardText>
                <CardActions border>
                    <Button colored>Help</Button>
                    <Button colored>Help</Button>
                    <Button colored>Help</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* NodeJS */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2000/1*zSyNQs8tbBU1sV3XABnhhg.png) center / cover'}}>NodeJS</CardTitle>
           <CardText>
               Testing your skils with NodeJS
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           </div>
        )
    } else if(this.state.activeTab === 2){
        return(
            <div className="projects-grid">
           {/* MYSQL */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/0*AhVo_3sCq-ft64ki.jpg) center / cover'}}>MYSQL</CardTitle>
           <CardText>
               Testing your skils with MYSQL
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* Express */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/832/1*uPL1uCtLBRSk6akPL2hNzg.jpeg) center / cover'}}>Express</CardTitle>
           <CardText>
               Testing your skils with Express
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* Handle Bars */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2017/07/handlebars-js.png?fit=500%2C500&ssl=1) center / cover'}}>Handlebars</CardTitle>
           <CardText>
               Testing your skils with Handlebars
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
            {/* Project 2 */}
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.voxmusica.net/wp-content/uploads/2019/01/ProjectTwo.jpg) center / cover'}}>Project 2</CardTitle>
           <CardText>
               Resources for Project 2
           </CardText>
                <CardActions border>
                    <Button colored>Help</Button>
                    <Button colored>Help</Button>
                    <Button colored>Help</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           </div>
        )
        } else if(this.state.activeTab === 3){
        return(
            <div className="projects-grid">
           {/* MongoDB */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/370xauto/8a68280fd20eebfa7789cdaa6fb5eff1/mongo-db-logo.png) center / cover'}}>MongoDB</CardTitle>
           <CardText>
               Testing your skils with MongoDB
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* React */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://miro.medium.com/max/1120/1*dLaDL-lSN0iprzmOpmM7zQ.png) center / cover'}}>React</CardTitle>
           <CardText>
               Testing your skils with React
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
            {/* PHP */}
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn0.froala.com/assets/editor/docs/server/meta-social/php-00441489844a0103eae71ba2fe15244c.png) center / cover'}}>PHP</CardTitle>
           <CardText>
               Testing your skills with PHP
           </CardText>
                <CardActions border>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                    <Button colored>Test</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           {/* Final Projects */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.rv337.com/vimages/shared/vnews/stories/5669b385854d9/1_Final_350X170.png) center / cover'}}>Final Project</CardTitle>
           <CardText>
               Resources for the Final Project
           </CardText>
                <CardActions border>
                    <Button colored>Help</Button>
                    <Button colored>Help</Button>
                    <Button colored>Help</Button>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
                <IconButton name="share" />
           </CardMenu>
           </Card>
           </div>
        )
        }

   }
   

    render(){
        return (
            <div className ="category-tabs">
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
        )
    }

}

export default Self;