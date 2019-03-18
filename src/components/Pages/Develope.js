import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';


const Develope = (props) => {

  const { contents, apiUrl } = props;
    const develope = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'develope' )
          {
            return(    
              <Page>
                <Text key={item.nid}>
                  <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                  <h3>{ReactHtmlParser(item.title)}</h3>    
                    {ReactHtmlParser(item.field_yellow_website_content)}
                  </ScrollAnimation>                  
                </Text>    
              </Page> 
            )
          }
    })
    
  
  return(
    <div className="col-md-12">
        {develope}
    </div>         
  )
}
export default Develope;