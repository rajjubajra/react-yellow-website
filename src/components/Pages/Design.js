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
      {design} 
   </div>
 )
}
export default Design;