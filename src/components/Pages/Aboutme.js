import React from 'react';
import FormContact from './FormContact';
import styled from 'styled-components';
import Data from './Aboutme.json';

const About = styled.div`
background-color: #fafafa;
color: #666;
font-family: sans-serif;
width: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;

  > div{
    max-width: 460px;
    margin: 0px auto;
    text-align: justify;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  > section{
    max-width: 1000px;
    margin: 0px auto;
    margin-top: 100px;
    margin-bottom: 100px;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div{
      max-width: 500px;
    }
    > div.right{
      margin-left: 15px;
    }
  }

  > div > div > button{
    width: 200px;
    height: 50px;
    background-color: wheat;
  }

 
`;


const Image = styled.div`
      min-width: 200px;
      min-height: 200px;
      width: 100%;
      content: "Image";
      padding: 10px 5px;
      maring: 0px 10px;
      border: 1px solid #ccc;
   > i{
    margin: 0px auto;
    width: 200px;
    height: 200px;
    background-color: wheat;
    display: flex;
    align-self: center;
   }
`;

const Text = styled.div`
  padding: 20px;
`;


class Aboutme extends React.Component{

  


  render(){
    return(
      <About>
          <div className="intro">
              <div>
                <h3>{Data[0].title}</h3>
                <p>{Data[0].text}</p>
              </div>         
          </div>

          <h2>What can I do</h2>

          <section>
           
              <div className="left">
                  <Text>
                      <h3>{Data[1].title}</h3>
                      <p>{Data[1].text}</p>
                  </Text>
                  
              </div>
              <div className="right">
                  <Image><i></i></Image>
              </div>
          </section>

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


          <div className="status">
            <div>
                <h3>{Data[3].title}</h3>
                <p>{Data[3].text}</p>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                 <FormContact />
            </div>
          </div>
        

      </About>
    )
  }
}
export default Aboutme;