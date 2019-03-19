import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled, {keyframes} from 'styled-components';


const MoveRight = keyframes`
      from {left: -200px;}
      to {left: 0px;}
`;
const FadeOut = keyframes`
      0% {opacity: 0; rotate: 0deg;}
      100% {opacity: 1; rotate: 180deg;}
`;
const MoveUp = keyframes`
     from {top: -3000px;}
     to{top: 0px;}
`;



const Page = styled.div`
    display: flex;
    width; 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    margin-top: 0px;

    > div.logo {
      border-right: 1px solid #ccc;
      position: relative;
      top: 15px;
      margin-right: 30px;
      -webkit-animation: ${MoveUp} 2s; /* Safari 4.0 - 8.0 */
      animation: ${MoveUp} 2s ease-out;
    }

    > div >  img{
      width: 100px;
      margin-right: 25px;
      opacity: 0;
      position: relative;
      -webkit-animation: ${FadeOut} 5s; /* Safari 4.0 - 8.0 */
      animation: ${FadeOut} 5s ease-out;
      animation-delay: 2.5s;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }

    > div > h2{
        font-size: 4rem;
        -webkit-letter-spacing: 5px;
        -moz-letter-spacing: 5px;
        -ms-letter-spacing: 5px;
        letter-spacing: -7px;
        line-height: 0.2em;
        color: #2b2b2b;
        font-family: sans-serif;
        font-weight: 500;  
          opacity: 0;
          position: relative;
          -webkit-animation: ${FadeOut} 5s; /* Safari 4.0 - 8.0 */
          animation: ${FadeOut} 5s ease-out;
          animation-delay: 2.5s;
          animation-duration: 2s;
          animation-fill-mode: forwards;

    }
    > div > p{
            font-family: sans-serif;
            font-size: 1.0rem;
            font-weight: 100;
            -webkit-letter-spacing: 0.37rem;
            -moz-letter-spacing: 0.37rem;
            -ms-letter-spacing: 0.37rem;
            -webkit-letter-spacing: 0.37rem;
            -moz-letter-spacing: 0.37rem;
            -ms-letter-spacing: 0.37rem;
            letter-spacing: 0.555rem;
            position: relative;
            top: 55px;
            color: black;
            opacity: 0;
            position: relative;
            -webkit-animation: ${FadeOut} 5s;
            -webkit-animation: ${FadeOut} 5s ease-out;
            animation: ${FadeOut} 5s ease-out;
            -webkit-animation-delay: 3.5s;
            animation-delay: 3.5s;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    }

    // Medium devices (tablets, 768px and up)
    @media (max-width: 768px) {
        flex-direction: column;
        > div.logo {
          border-right: 0px solid #ccc;
          width: 100px;
          margin: 0px auto;
        }

        > div > h2{
          font-size: 3rem;
          letter-spacing: -6px;
          position: relative;
          top: 35px;
          text-align: center; 
        }

        > div > p{
          letter-spacing: 0.22rem;
          text-align: center;
          top: 55px;
          left: 5px;
        }
     }


`;



const Landing = (props) => {
    const { contents, apiUrl } = props;
    const landing = contents.map((item)=> {
         return item.field_yellow_website_unique_bloc === 'landingpage' 
          &&     
              <Page key={item.nid}>
                  <div className='logo'>
                    <img src={apiUrl + item.field_yellow_website_image_for_t} />
                  </div>
                  <div>
                    {ReactHtmlParser(item.field_yellow_website_content)}
                  </div>
              </Page>
    })

    
    return(
      <div className="col-md-12">
        {landing} 
      </div>
       )
 
}
export default Landing;