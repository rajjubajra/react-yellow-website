import styled from 'styled-components';

export const Page = styled.div`



color: #666;
font-family: sans-serif;
width: 100%;
height: 100vh;
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




export const Image = styled.div`
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

export const Text = styled.div`
  padding: 20px;
`;
