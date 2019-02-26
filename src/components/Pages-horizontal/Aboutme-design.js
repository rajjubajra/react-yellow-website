import React from 'react';
import { About, Image, Text } from './Aboutme-style';


const Design = ({Data}) => {
 return(
   <About> 
   <section>
           <div className="left">
               <Text>
                   <h3>{Data[1].title}</h3>
                   <p>{Data[1].text}</p>
               </Text>
               
           </div>
           <div className="right">
               <Image><i>image design</i></Image>
           </div>
  </section>
  </About>
 )
}
export default Design;