import React from 'react';
import FormContact from './FormContact';
import { About, Text} from './Aboutme-style';


const Status = ({Data} ) => {

  return(
   <About>
     <section>
            <Text>
                <h3>{Data[3].title}</h3>
                <p>{Data[3].text}</p>
                <FormContact />
            </Text>
      </section>
    </About>  
  )
}
export default Status;