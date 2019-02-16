import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardActions, CardMenu, Button } from 'react-mdl';

class Career extends Component{
    render(){
        return (
<div>
               <div>
        <ul>
  <li> <a href="/career">Career</a></li>
  <li><a href="/selfassesment">Self Assesment</a></li>
  <li><a href="/mypage"></a></li>
</ul>

    </div>
                <br></br>
                <div className="career-grid">
            <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
             {/* Frontend*/}
             <br></br>
           <CardTitle style={{color: '#fff', height: '370px', background: 'url(https://4qr7k2a2xza2vctux33bisalkw-wpengine.netdna-ssl.com/wp-content/uploads/2015/07/Full-time-hiring-8.2015-09-e1440676083937.png) center / cover'}}>Front-End</CardTitle>
           <CardText>
               Front-End:
               development is the practice of converting data to graphical interface for user to view and interact with data through digital interaction using HTML, CSS and JavaScript.
           </CardText>
                <CardActions border>
                <a href="https://skillcrush.com/2016/02/11/skills-to-become-a-front-end-developer/" rel="noopener noreferrer" target="_blank">
                    <Button>becoming a frontend developer</Button>
                    </a>
                    <a href="https://learntocodewith.me/web-dev/front-end-developer-skills/" rel="noopener noreferrer" target="_blank">
                    <Button> frontend developer skills</Button>
                    </a>
                    <a href="https://frontendmasters.com/books/front-end-handbook/2018/practice/interview-q.html" rel="noopener noreferrer" target="_blank">
                    <Button> Interview questions</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Backend*/}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '370px', background: 'url(https://blog.siliconstraits.vn/wp-content/uploads/2015/07/Full-time-hiring-8.2015-10-e1440676643494.png) center / cover'}}>Back-end</CardTitle>
           <CardText>
               Back-end:
               responsible for server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers.
           </CardText>
                <CardActions border>
                    <a href="https://www.upwork.com/hiring/development/back-end-web-developer/" rel="noopener noreferrer" target="_blank">
                    <Button> Roles as a backend developer</Button>
                    </a>
                    <a href="https://www.thebalancecareers.com/the-skills-you-need-to-be-a-backend-developer-2071184" rel="noopener noreferrer" target="_blank">
                    <Button>backend developer skills</Button>
                    </a>
                    <a href="https://www.orchard.co.uk/blog/10-expert-questions-for-interviewing-a-back-end-developer-8556.aspx" rel="noopener noreferrer" target="_blank">
                    <Button> Interview questions</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           {/* Fullstack */}
           <Card shadow={5} style ={{minWidth:"450", margin:"auto"}}>
           <CardTitle style={{color: '#fff', height: '370px', background: 'url(https://decidigital.com/wp-content/uploads/2017/03/developer.jpg) center / cover'}}>Full-Stack</CardTitle>
           <CardText>
               Full-Stack:
               an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack, a Web stack, or a native application stack.           </CardText>
                <CardActions border>
                    <a href="http://techgenix.com/full-stack-developer/" rel="noopener noreferrer" target="_blank">
                    <Button> Becoming a full-stack developer</Button>
                    </a>
                    <a href="https://www.bacancytechnology.com/blog/skills-to-look-into-a-full-stack-developer" rel="noopener noreferrer" target="_blank">
                    <Button>full-stack developer skills</Button>
                    </a>
                    <a href="https://www.glassdoor.com/Interview/full-stack-developer-interview-questions-SRCH_KO0,20.htm" rel="noopener noreferrer" target="_blank">
                    <Button> Interview questions</Button>
                    </a>
                </CardActions>
           <CardMenu style={{color:'#fff'}}>
           </CardMenu>
           </Card>
           </div>
           <br></br><br></br><br></br><br></br><br></br>
           <div className="friends-img">
           </div>
           <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className='guide'>
            <h2>Become Employer Competitive!</h2>
            <h3>We are here to guide you</h3>
            <ul>
                <h4>LinkedIn:</h4>
                <p>LinkedIn is the best "Social Media" for the young professional after getting their degree or certificate. Having a Strong portrait photo heading your profile page is crutial. Under your picture is where you input your online resume breaking down past experiences, current jobs and schooling and showing off skill sets that friends and peers have validated for you. </p>
                <h4>Portfolio:</h4>
                <p>Get creative and showcase your style and unqueness for your futures and managers to see. Try to hammer down what type of job you would like to have, change your portfolio accordingly. Some jobs are on the more serious end but jobs like Disney want to see your creativity so have fun with making them. This is where all previous work will be showcased and is hand in hand in importance with your resume.  </p>
                <h4>GitHub/Heroku:</h4>
                <p>Github is the website that holds all your school work and lets people view whats on your local computer, Heroku is the platform that will deploy all your work for the world to see.</p>
                <h4>MeetUps:</h4>
                <p>Finding weekly and monthly meetups are going to be essencial for meeting new people because Networking is everything in todays job world.</p>
                <h4>Job Searching:</h4>
                <p>Searching for a job is going to be a full time job on its own. LinkedIn Premium will be a great resource to utilize, it does cost 30$ month so you're going to have to be committed to finding a job. The Premium offers a selection that you can break down companies by job titles and find exact people to meet and talk to about positions and great for networking.   </p>
            </ul>
            </div>
           </div>
         
        )
        
    }
}
export default Career;