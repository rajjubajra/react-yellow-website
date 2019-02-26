import React, { Component } from 'react';
// import { render } from 'react-dom'
// import { Router, Route, Link } from 'react-router'
import './components/Css/Style.css';
import './components/Css/Font.css';

//import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal';


import Landing      from './components/Pages-horizontal/Landing';
import Introduction from './components/Pages-horizontal/Aboutme-introduction';
import Design       from './components/Pages-horizontal/Aboutme-design';
import Develop      from './components/Pages-horizontal/Aboutme-develope';
import Status       from './components/Pages-horizontal/Aboutme-status';
import Footer       from './components/Pages-horizontal/Footer';
import Data         from './components/JSON/Aboutme.json';




class App extends Component {
  render() {
    const child   = { width: `1200px`, height: `100vh`, backgroundColor: '#6f6f6f0f'}
    return (
      <div>
        <HorizontalScroll style={{overflow: 'show'}}>
            <div style={child} >
              <Landing />
            </div>
            <div style={child}>
              <Introduction Data={Data} />
            </div>
            <div style={child} >
             <Design Data={Data} />
            </div>
            <div style={child} >
              <Develop Data={Data} />
            </div>
            <div style={child} >
              <Status Data={Data} />
            </div>
        </HorizontalScroll>
     <div style={{position: `fixed`, bottom:`0`, textAlign: `center`, width: `100%`}}>
       <Footer />
     </div>
     </div>   
    )
  }

  
}

export default App;
