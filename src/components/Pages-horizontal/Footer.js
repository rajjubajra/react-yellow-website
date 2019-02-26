import React from 'react';
import styled from 'styled-components';

const StickToButtom = styled.div`
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    > p{
      font-size: 1rem;
      letter-spacing: 0px;
    }
`;

class Footer extends React.Component{

    render(){

      let dt = new Date();
      return(
        <div>
        <StickToButtom>
                  <p>&copy; {dt.getFullYear()} www.Yellow-Website.com. All rights reserved | Tel: +44 (0) 7828991384, London, UK</p>
        </StickToButtom>
        </div>
       
      )
    }


}
export default Footer;