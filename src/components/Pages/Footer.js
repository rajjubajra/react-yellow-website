import React from 'react';
import styled from 'styled-components';

const Footerdiv = styled.div`
    width: 100%;
    height: 200px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;  
    > section > ul{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        list-style: none;
        list-style: none;
        padding-inline-start: 0px;
      > li a{
            margin: 3px 20px;
      }
    }

`;

const StickToButtom = styled.div`
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: #efefef;  
`;

class Footer extends React.Component{

    render(){

      let dt = new Date();
      return(
        <div>
        <Footerdiv>
          <section>
             
                <ul>
                  <li><a>About</a></li>
                  <li><a>Contact</a></li>
                  <li><a>Home</a></li>
                </ul>
             
          </section>                          
        </Footerdiv>

        <StickToButtom>
                  <p>&copy; {dt.getFullYear()} www.Yellow-Website.com. All rights reserved</p>
        </StickToButtom>

        </div>
       
      )
    }


}
export default Footer;