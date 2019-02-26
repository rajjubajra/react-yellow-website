import React from 'react';
import { About, Image, Text } from './Aboutme-style';

const Develope = ({Data}) => {
  return(
     <About>
     <section>
            <div className="left">
                <Image><i></i></Image>
            </div>
            <div className="right">
                <Text>
                    <h3>{Data[2].title}</h3>
                    <p>{Data[2].text}</p>
                </Text>
            </div>
      </section>
      </About> 
  )
}
export default Develope;