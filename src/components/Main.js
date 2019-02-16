import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Career from './Career';
import SelfAssessment from './SelfAssessment';
import Logout from './Logout';
import MyPage from './MyPage';
import Importboi from './Mainpage';

const Main = () => (
    <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/Career" component ={Career}/>
        <Route path = "/selfassessment" component ={SelfAssessment}/>
        <Route path = "/Logout" component ={Logout}/>
        <Route path = "/MyPage" component ={MyPage}/>
        <Route path = "/Mainpage" component ={Importboi}/>
    </Switch>
)

export default Main;