import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';
import BtnAngleDown from './BtnAngleDown';


  class Develope extends React.Component{
    state = {
      btnPosition: 0,
    }

    componentDidMount(){
      //intro scroll position 
      //at id "btn" position from top + 500  < pageYOffset "hide" intro div
      // show and hide variable is defined at the render
    const btnId = document.getElementById('btnDev');
    const btnPosition = btnId.getBoundingClientRect();
    this.setState({btnPosition: btnPosition.top + 500 });
    console.log('ID dev', btnId);
  }

    render(props){


      const { contents, apiUrl } = this.props;
        const develope = contents.map((item)=> {
              if(item.field_yellow_website_unique_bloc === 'develope' )
              {
                return(    
                    <Text key={item.nid}>
                      <h3>{ReactHtmlParser(item.title)}</h3>    
                        {ReactHtmlParser(item.field_yellow_website_content)} 
                    </Text>    
                )
              }
        })

    //show hide btn 
    //if id "btn" top position + 500px  > pageYOffset than hide id "btn"
    const showHide = this.state.btnPosition < this.props.yPosition 
    ? 'hide' : 'show';    
        
      
      return(
        <div className="col-md-12">
          <Page>
            {develope}
            <div id="btnDev" className={showHide}>
              <BtnAngleDown />
            </div>
          </Page>
            
        </div>         
      )
  } 


}
export default Develope;