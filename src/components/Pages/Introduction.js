import React from 'react';
import styled from 'styled-components';
import { Page, Text} from './Page-style';
import ReactHtmlParser from 'react-html-parser';
import ScrollAnimation from 'react-animate-on-scroll';

const Parallax = styled.div`
         
      /* background-image: url("/images/intro.jpg");*/
      /*  filter: grayscale(100%); */
       
      
       /* Set a specific height */
        min-height: 800px; 
          
        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      
      p, h3{
        color: #333;
      }

      .what-can-i-do{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        align-items: center;
        position: relative;
        top: -100px;
        h2{
          color: #333;
        }
      }
`;

class Introduction extends React.Component{
  

  render(props){
    const bgImagePath = this.props.bgImages[1] && this.props.bgImages[1].field_background_image;
    const apiUrl = this.props.apiUrl && this.props.apiUrl;
    const introduction = this.props.data[4] && this.props.data[4].body;
    return(
          <Parallax style={{backgroundImage:`url(${apiUrl}/${bgImagePath})`}}  >
            <Page className='parallax-bg'>
               <section>
                    <Text>
                      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        {ReactHtmlParser(introduction)}
                      </ScrollAnimation>                  
                    </Text> 
                </section>           
           </Page>
           <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="100" >
             <div className='what-can-i-do'>
             <h2>What Can I do</h2>
             <i className="fas fa-angle-down"></i>
            </div>
           </ScrollAnimation>
           
          </Parallax>
        )
  }
}

// const Introduction = (props) => {
//   /** get data if not empty */
//   console.log('bg image', props.bgImages[0] && props.bgImages[0].field_background_image);
//   const introduction =  props.data[4] && props.data[4].body; 
  
//   return(
//     <Parallax >
//       <Page className='parallax-bg'>
//          <section>
//               <Text>
//                 <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
//                   {ReactHtmlParser(introduction)}
//                 </ScrollAnimation>                  
//               </Text> 
//           </section>           
//      </Page>
//      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="100" >
//        <div className='what-can-i-do'>
//        <h2>What Can I do</h2>
//        <i className="fas fa-angle-down"></i>
//       </div>
//      </ScrollAnimation>
     
//     </Parallax>
    
//   )
// }
export default Introduction;