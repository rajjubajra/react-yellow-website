import React, { Component } from 'react';
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

import './components/Css/Font.css';
import FullPagNav from './components/Pages/FullPageNav';
import Landing from './components/Pages/Landing';
import Aboutme from './components/Pages/Aboutme';
import Footer from './components/Pages/Footer';
import Test from './components/Pages/Test';


class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home'
    }
  }

  routeChangeTo = (route) => {
    console.log('clicked', route);
    this.setState({route: route});
  }

  pageRoute = (nav) => {
    switch(nav){
      case 'home':
        return <Landing />
      break;

      case 'nav':
        return <FullPagNav />
      break;

      case 'about':
        return <Aboutme />
      break;

    }

  }



  render() {
    return (
      <div className="App">
        <Landing />
        <Aboutme />
        <Footer  />

        {/* <div><button onClick={() => this.routeChangeTo('nav')}>Nav</button></div>

        {this.pageRoute(this.state.route)}
        
         <Footer  routeChangeTo={this.routeChangeTo} /> */}
      </div>
    );
  }
}

export default App;
