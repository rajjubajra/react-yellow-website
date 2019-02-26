import React from 'react';
import { Page, Image, Text } from './Page-style';

const Loading = () => (
  <Page> 
   <section>
           <div className="left">
               <Text>
                 <h1 style={{color: '#ff5722ad', fontSize: '6rem'}}><i className="fas fa-spinner fa-spin"></i></h1>
               </Text>
               
           </div>
           <div className="right">
              
           </div>
  </section>
  </Page>
)
export default Loading;