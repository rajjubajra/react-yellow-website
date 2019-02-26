import React from 'react';
import { About, Text} from './Aboutme-style';
import styled from 'styled-components';




const Introduction = ({Data} ) => {

  return(
    <About>
         <section>
              <Text>
                <h3>{Data[0].title}</h3>
                <p>{Data[0].text}</p>
              </Text> 
          </section>           
    </About>
  )
}
export default Introduction;