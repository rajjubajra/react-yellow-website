import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';


const Design = (props) => {

    const { contents, paiUrl } = props;
    const design = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'design' )
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
    
   // const image = props.data[3] && props.apiUrl +'/'+props.data[3].field_image;
 
 return(
   <Page> 
   <section>
           <div className="left">
               {design} 
           </div>
           <div className="right">
              
           </div>
  </section>
  </Page>
 )
}
export default Design;