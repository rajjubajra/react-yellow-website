import styled, {keyframes} from 'styled-components';

const FadeOut = keyframes`
0%   {border: 1px solid #ccc; color: yellow;box-shadow: 0px 0px 0px #ccc;}
70%  {border: 1px solid #eee; }
100% {border: 1px solid #eee; color: #000; box-shadow: 1px 1px 6px #ccc;}
`;


export const Page = styled.div`

.show{
  display: flex;
  flex-direction: column;
}
.hide{
  display: none;
}

color: #666;
font-family: sans-serif;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;

  > div{
    max-width: 460px;
    margin: 0px auto;
    text-align: justify;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 50px;
    border: 1px solid #fff;
    
  }

  >div:hover{
    border: 1px solid #eee;
    box-shadow: 1px 1px 6px #ccc;
    animation-name: ${FadeOut} ;
    animation-duration: 4s;
    cursor: default;
    color: #000;
    
  }

  
`;




export const Image = styled.div`
      
`;

export const Text = styled.div`
  padding: 20px;
`;
