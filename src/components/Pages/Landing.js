import React from 'react';
import styled from 'styled-components';
import Data from './Landing.json';


const Page = styled.div`
    display: flex;
    width; 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin-top: -60px;

    > div >  img{
      width: 100px;
      padding: 15px;
      border-right: 1px solid #ccc;
      margin-right: 25px;
    }

    > div > h3{
    font-size: 4rem;
    -webkit-letter-spacing: 5px;
    -moz-letter-spacing: 5px;
    -ms-letter-spacing: 5px;
    letter-spacing: -7px;
    line-height: 0.2em;
    color: #b14f4f;
    font-family: sans-serif;
    font-weight: 500;  
    }
    > div > p{
      font-family: sans-serif;
      font-size: 1.2rem;
      font-weight: 100;
      letter-spacing: 0.37rem;
      position: relative;
      top: -25px;
      color: tomato;
    }

`;







class Landing extends React.Component{


  render(){
    console.log('data', Data);
    return(
      <div>     
          <Page>
            
            <div>
            <img src={Data[0].logourl} title={Data[0].logotitle} alt={Data[0].logoalt}/>
            </div>
            <div>
              <h3>{Data[0].job}</h3>
              
            </div>
          </Page>
      </div>
    )
  }
}
export default Landing;