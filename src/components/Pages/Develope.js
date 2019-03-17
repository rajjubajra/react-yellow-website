import React from 'react';
import styled from 'styled-components';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';

const Parallax = styled.div`
        min-height: 800px;
        /* image path REST API is defined on inline style */
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
`;



const Develope = (props) => {

  const { contents, apiUrl } = props;
    const develope = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'develope' )
          {
            return(     
              <Text key={item.nid}>
                  <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                  <h3>{ReactHtmlParser(item.title)}</h3>    
                    {ReactHtmlParser(item.field_yellow_website_content)}
                  </ScrollAnimation>                  
              </Text>    
            )
          }
    })
    
  
  
  return(
    <Parallax style={{backgroundImage:`url(${apiUrl})`}}>
            <Page>
            <section>
                    <div className="left">
                    
                    </div>
                    <div className="right">
                        {develope}
                    </div>
            </section>
            </Page> 
    </Parallax>        
  )
}
export default Develope;