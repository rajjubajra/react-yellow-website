import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';


const Design = (props) => {
    const designTitle = props.data[3] && props.data[3].title;
    const designText = props.data[3] && props.data[3].body;
    const image = props.data[3] && props.apiUrl +'/'+props.data[3].field_image;
 
 return(
   <Page> 
   <section>
           <div className="left">
               <Text>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                        <h3>{ReactHtmlParser(designTitle)}</h3> 
                        {ReactHtmlParser(designText)}
                    </ScrollAnimation>  
               </Text>       
           </div>
           <div className="right">
              
           </div>
  </section>
  </Page>
 )
}
export default Design;