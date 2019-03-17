import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

/** CSS STYLE********************** */
import './components/Css/Font.css';
/** PAGE COMPONENTS**************** */
import MainButton from './components/button/MainButton';
import Loading from './components/Pages/Loading';
import Landing from './components/Pages/Landing';
import Introduction from './components/Pages/Introduction';
import Design from './components/Pages/Design';
import Develope from './components/Pages/Develope';
import Status from './components/Pages/Status';
//import Contact from './components/Pages/Contact';

/** FOOTER ************************* */
import Footer from './components/Pages/Footer';


const anyWhereHeroku = 'https://cors-anywhere.herokuapp.com';
const apiUrl = 'http://yellow-website.com';
const api = 'd8mailchimp/mysitecontent';
const backgroundImagesApi = 'd8mailchimp/bgimages';


const Page = styled.div`
    height: 100vh;
    .page-block{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
    }
   }
`;



class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      data: [],
      isLoaded: false,
      yPosition: '',
      bgImages: []
    }
  }

  componentDidMount(){

    /** FETCH IMAGES TO PREVIEW [ IF SEARCH RESULT IS EMPTY ] */
   fetch(`${anyWhereHeroku}/${apiUrl}/${api}`)
   .then((response) => response.json())
   .then( data => this.setState({
                  isLoaded: true,
                  data: data}))
   .catch(err => console.log('REST API DATA: ',err));

   console.log('REST API DATA :', this.state.data);


   fetch(`${anyWhereHeroku}/${apiUrl}/${backgroundImagesApi}`)
   .then((res) => res.json())
   .then(data => this.setState({
       bgImages: data
   }))
   .catch( err => console.log('REST API -IMAGE ERROR:', err))



  }

  

  routeChangeTo = (route) => {
    console.log('clicked', route);
    this.setState({route: route});
  }

  



  render() {
     console.log('window Position', window.pageYOffset);
     console.log('REST API BG-IMAGE', this.state.bgImages);

   //  const loading = !this.state.isLoaded && <Loading />;
   
    return (  
      <div className="App">   
        {/* {loading} */}
        <Page>
            <MainButton />   
            <div className="page-block">
                <Element name='landing'>
                  <Landing        data={this.state.data[0]} apiUrl={apiUrl} />
                </Element>
                <Element name='intro'>
                  <Introduction   data={this.state.data}    apiUrl={apiUrl} bgImages={this.state.bgImages} /> 
                </Element>
                <Element name='design'>
                  <Design         data={this.state.data}    apiUrl={apiUrl} />
                </Element>
                <Element name='develope'>
                  <Develope       data={this.state.data[2]} apiUrl={apiUrl} bgImages={this.state.bgImages[0]}/>
                </Element> 
                <Element name='status'>
                   <Status         data={this.state.data[1]} apiUrl={apiUrl} /> 
                </Element>

                <Footer   anyWhereHeroku={anyWhereHeroku} apiUrl={apiUrl} /> 
            </div>
        
        </Page>
      </div>
    );
  }
}

export default App;
