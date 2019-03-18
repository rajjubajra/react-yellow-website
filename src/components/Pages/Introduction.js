import React from 'react';
import styled from 'styled-components';
import { Page, Text} from './Page-style';
import ReactHtmlParser from 'react-html-parser';
import ScrollAnimation from 'react-animate-on-scroll';

const ScrollNav = styled.div`
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
        top: -80px;
        h2{
          color: #333;
        }
      

      .fas{
        cursor: pointer;
      }
`;

class Introduction extends React.Component{
  state = {
    introPosition: 0,
  }


  componentDidMount(){
    //intro scroll position 
    //scroll up 1.8 time of the total height of the windows from id "intro"
    const element = document.getElementById('intro');
    const introPosition = element.getBoundingClientRect();
    this.setState({introPosition: -introPosition.height * 1.8 });
    console.log(introPosition);
  }

  smoothScroll = () => {
    
        window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': - this.state.introPosition,
      });
  }

  
  

  render(props){

    const { contents, apiUrl } = this.props;
    const introduction = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'introduction' )
          {
            return(
                  <Page key={item.nid} className='parallax-bg'>
                          <Text>
                            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                              {ReactHtmlParser(item.field_yellow_website_content)}
                            </ScrollAnimation>                  
                          </Text> 
                  </Page>
            )
          }
    })
        
    return(
      <div className="col-md-12">
            <div id="intro">
              {introduction}
              <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset="200" >
                <ScrollNav>
                  <h3>What Can I do</h3>
                  <i onClick={this.smoothScroll} className="fas fa-angle-down"></i>
                </ScrollNav>
              </ScrollAnimation>  
            </div>         
      </div>      
        )
  }
}


export default Introduction;