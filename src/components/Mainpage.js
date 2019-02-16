import React, { Component } from 'react';
import { Layout } from 'react-mdl';
import { Header } from 'react-mdl';
import { Navigation } from 'react-mdl';
import { Drawer} from 'react-mdl';
import { Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import '../App.css';





class Importboi extends Component {
  render() {
    return (
        <div>
        <ul>
  <li> <a href="/career">Career</a></li>
  <li><a href="/selfassesment">Self Assesment</a></li>
  <li><a href="/mypage"></a></li>
</ul>

    </div>
    );
  }
}

export default Importboi;