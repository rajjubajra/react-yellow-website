import React from 'react';
import styled, {keyframes} from 'styled-components';

const animate = keyframes`
0% {bottom: -10px;}
20% {bottom: -30px;}
40% {bottom: -40px;}
80% {bottom: -50px; opcity: 0.5;}
100% {bottom: -60px; opacity: 0;}
`;

const Btn = styled.div`
width: 30px;
margin: 0px auto;
 .far{
   position: relative;
   transform: rotate(135deg);
   font-size: 1.3rem;
   animation: ${animate} 1.2s infinite;
 }

 .far:hover{
   animation-play-state: paused;
 }
`;


class BtnAngleDown extends React.Component{

  render(){
    return(
      <Btn>
        <i className="far fa-paper-plane"></i>
      </Btn>
      
    )
  }
}
export default BtnAngleDown;