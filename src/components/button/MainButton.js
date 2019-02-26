import React from 'react';
import styled, {keyframes} from 'styled-components';
import MenuBlock from './MenuBlock';


const Bounce_in_top = keyframes`
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }

  /*------------------------------------*/

  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
 
`;

const Bounce_out_top = keyframes`

  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }

/*------------------------*/
  0% {
    -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }



`;




const Button = styled.div`
      width: 100%;
      display: flex;
      justify-content: flex-end;
      position: ;
      right: 27px;
      cursor: pointer;

      ul.line-button{
        margin: 10px 29px;
        padding: 0px;        
      }
    
    
      li.line-item{
        width: 22px;
        list-style: none;
        height: 2px;
        background-color: #046732;
        margin: 0.30rem;
      }

      /* mouseover on li.line-item */
          li.line-c-one::after{
            ont-family: sans-serif;
            font-size: 1.0rem;
            margin: -1px -3px;
            padding: 3px 10px;
            content: 'x';
            background-color: #fff;
            width: 20px;
            height: 20px;
            border: 0.09rem solid #046732; 
          }
      
      li.line-c-two{
        display: none;
      }
      li.line-c-three{
        display: none;
      }
`;

const MenuBox = styled.div`

  .menuBox{
    margin-top: 5px;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80vh;
    background: #fff;
  
        .menu-content{
          margin: 0px auto;
          width: 600px;
          min-height: 200px;
          padding: 20px;
         
        }
    
  }
  .show{
    visibility: visible;
    -webkit-animation: ${Bounce_in_top} 1.1s ease-in-out both;
	  animation: ${Bounce_in_top} 1.1s ease-in-out both;
  }

  .hide{
    -webkit-animation: ${Bounce_out_top} 1.1s ease-in-out reverse both;
    animation: ${Bounce_out_top} 1.1s ease-in-out reverse both;
    visibility: hidden;
  }

`;





class MainButton extends React.Component{
   
  componentDidMount(){
    const lineItem = document.querySelectorAll('.line-item');
    const lineButton = document.querySelector('.line-button');
    const menuBox = document.querySelector('.menuBox');

    lineButton.addEventListener('mouseenter', () => {
      menuBox.classList.add('show');
      menuBox.classList.remove('hide');
      lineItem[0].classList.add('line-c-one');
      lineItem[1].classList.add('line-c-two');
      lineItem[2].classList.add('line-c-three');        
    } )

  }

  removeClass = () => {
      const lineItem = document.querySelectorAll('.line-item');
      const menuBox = document.querySelector('.menuBox');
      menuBox.classList.remove('show');
      menuBox.classList.add('hide');
      lineItem[0].classList.remove('line-c-one');
      lineItem[1].classList.remove('line-c-two');
      lineItem[2].classList.remove('line-c-three');
  }

  

  
  render(){
    


    return(
      <div>
          <Button>
            <ul className="line-button" onClick={this.removeClass}>
              <li className="line-item" ></li>
              <li className="line-item"></li>
              <li className="line-item"></li>
            </ul>
          </Button> 
          <MenuBox>
            <div className="menuBox hide">
                <div className="menu-content"><MenuBlock /></div>
            </div>    
          </MenuBox>     
      </div>
    )
  }
}
export default MainButton;