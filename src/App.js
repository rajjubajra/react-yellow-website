import React, { Component } from 'react';
import ajax from './Restapi/ajax.js'
import events from 'events';

//import MainButton from './components/button/MainButton';
import Loading from './components/Pages/Loading';
import Landing from './components/Pages/Landing';
import Introduction from './components/Pages/Introduction';
import Design from './components/Pages/Design';
import Develope from './components/Pages/Develope';
import Status from './components/Pages/Status';
//import Contact from './components/Pages/Contact';

/** FOOTER ************************* */
import Footer from './components/Pages/Footer';


// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();

const apiUrl = 'https://yellow-website.com';


class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      contents: [],
      footer: [],
      isLoaded: false,
      images: [],
      yPosition: 0,
    }
  }

  componentWillMount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  componentWillUnmount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  async componentDidMount() {
    await this.refresh()
    //get scroll position
    this.getScrollPosition()
  }

  async refresh() {
    // AJAX fetch server/node/rest?_format=json and setState with the response data
    try {
          const axios = await ajax() // wait for an initialized axios object
         
          //get Content Data 
          const contents = await axios.get('/rest/yellow-website-contents') // wait for the POST AJAX request to complete
          if (contents.data) {
            // setState will trigger repaint
            this.setState({ 
                            contents: contents.data,                 
                          })
              }

           //get Footer Data 
           const footer = await axios.get('/rest/yellow-website-footer') // wait for the POST AJAX request to complete
          if (footer.data) {
            // setState will trigger repaint
            this.setState({ 
                            footer: footer.data,   
                            isLoaded: true              
                          })
                }

       

  

      } catch (e) {
      alert(e)
    }
  }

  getScrollPosition = () => {      

      window.onscroll = () => {
        this.setState({yPosition: window.pageYOffset})
      }

  }

  
  routeChangeTo = (route) => {
    console.log('clicked', route);
    this.setState({route: route});
  }

  

  render() {
     
     const loading = !this.state.isLoaded && <Loading />;
     console.log(this.state.yPosition);

    return (  
      <div className="App">  
           
         
        <div className="container">
           <div className="row">
             {loading}
           </div>
          <div className="row">
            {/* <MainButton />  */}
          </div>
                
          <div className="row">
              <Landing        contents={this.state.contents} apiUrl={apiUrl} />
          </div>
          <div className="row">
             <Introduction   
             contents={this.state.contents}    
             apiUrl={apiUrl} 
             bgImages={this.state.bgImages} 
             yPosition={this.state.yPosition}
             /> 
          </div>
          <div className="row">
             <Design  
                contents={this.state.contents}    
                apiUrl={apiUrl} 
                yPosition={this.state.yPosition}
                />
          </div>
          <div className="row">
            <Develope       
                 contents={this.state.contents} 
                 apiUrl={apiUrl}
                 yPosition={this.state.yPosition}
            />
          </div>
          <div className="row">
            <Status         
                contents={this.state.contents} 
                apiUrl={apiUrl} 
            /> 
          </div>      
          <div className="row">
             <Footer   footer={this.state.footer} apiUrl={apiUrl} />  
          </div>
        </div>
      </div>  //**  class App */
    );
  }
}

export default App;
