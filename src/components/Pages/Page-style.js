import styled from 'styled-components';

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
flex-wrap: wrap;

  > div{
    max-width: 460px;
    margin: 0px auto;
    text-align: justify;
    margin-top: 60px;
    margin-bottom: 60px;
  }

  
`;




export const Image = styled.div`
      
`;

export const Text = styled.div`
  padding: 20px;
`;
