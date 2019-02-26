import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

/** CSS STYLE********************** */
import './components/Css/Font.css';
/** PAGE COMPONENTS**************** */
import Loading from './components/Pages/Loading';
import Landing from './components/Pages/Landing';
import Introduction from './components/Pages/Introduction';
import Design from './components/Pages/Design';
import Develope from './components/Pages/Develope';
import Status from './components/Pages/Status';
import Contact from './components/Pages/Contact';

/** FOOTER ************************* */
import Footer from './components/Pages/Footer';


const anyWhereHeroku = 'https://cors-anywhere.herokuapp.com';
const apiUrl = 'http://yellow-website.com';
const api = 'd8mailchimp/mysitecontent';


const Page = styled.div`
    height: 100vh;
  //  display: flex;

    

  //  > div.center-block{
  //      width: 95%;
  //  }

  //  > div.right-block{
  //      width: 5%;
  //      height: 100vh;
  //      text-align: center;



  //     > span.nav{
  //       padding: 2px 10px;
  //       background-color: #ddd;
  //       margin-right: 15px;
  //       border-bottom: 2px solid #b15050;
  //       cursor: pointer;
  //     }
      
  //      > ul{
  //         width: 5%;
  //         height: 100vh;
  //         position: fixed;
  //         top: 25%;
  //         right: 15px;
  //         text-align: center;

  //       > li {
  //         list-style: none;
  //       }  

  //        > li a{
  //          font-size: 0.9rem;
  //          line-height: 3em;
  //          cursor: pointer;
  //          border-bottom: 1px solid #ccc; 
  //        }
  //      }



   }
`;



class Pages extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      data: [],
      isLoaded: false,
      yPosition: ''
    }
  }

  componentDidMount(){

    /** FETCH IMAGES TO PREVIEW [ IF SEARCH RESULT IS EMPTY ] */
   fetch(`${anyWhereHeroku}/${apiUrl}/${api}`)
   .then((response) => response.json())
   .then( data => this.setState({
                  isLoaded: true,
                  data: data}))
   .catch(err => console.log(err));

   console.log('DID MOUNT', this.state.data);
  }

  

  routeChangeTo = (route) => {
    console.log('clicked', route);
    this.setState({route: route});
  }

  



  render() {
     console.log('window Position', window.pageYOffset);

     const loading = !this.state.isLoaded && <Loading />;

    return (  
      <div className="App">   
        {loading}
        <Page>
            <div>
                <Element name='landing'>
                  <Landing        data={this.state.data[0]} apiUrl={apiUrl} />
                </Element>
                <Element name='intro'>
                  <Introduction   data={this.state.data} /> 
                </Element>
                <Element name='design'>
                  <Design         data={this.state.data}    apiUrl={apiUrl} />
                </Element>
                <Element name='develope'>
                  <Develope       data={this.state.data[2]} apiUrl={apiUrl} />
                </Element> 
                <Element name='status'>
                   <Status         data={this.state.data[1]} apiUrl={apiUrl} /> 
                </Element>
                <Element name='contact'>
                  <Contact        apiUrl={apiUrl} />
                </Element>
    
                <Footer   anyWhereHeroku={anyWhereHeroku} apiUrl={apiUrl} /> 
            </div>
        
        </Page>
      </div>
    );
  }
}

export default Pages;
