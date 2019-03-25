import React from 'react';
import styled, {keyframes} from 'styled-components';

const splash = keyframes`
0% { border : 0px }
100% { border: 100px solid #ddd; opacity: 0;
`;

const Div = styled.div`
width: 100%
height: 100vh;
position: relative;
top: -100vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 0;


i.circle{
  width: 50px;
    height: 50px;
    background-color: #ff0000;
    border-radius: 100px;
    position: relative;
    top: -3px;
    left: -203px;
    border: 0px;
    animation: ${splash} 4s infinite;

    @media (max-width: 768px) {
      top: -31px;
      left: 1px;
    }
    
}
`;

class BackgroundAnimation extends React.Component{

  

  render(){
    
    return(
      <Div>
      <i className="circle"></i>
      </Div>
      
    )
  }
}
export default BackgroundAnimation;