import React from 'react';
import styled from 'styled-components';
import { Page, Text} from './Page-style';
import ReactHtmlParser from 'react-html-parser';
import BtnAngleDown from './BtnAngleDown';


const Div = styled.div`

// background: linear-gradient(to bottom right,#fff 0%,#fff 50%,#e9ecef 50%,#dad6d6 100%);


`;



const Intro = styled.div`
  position: relative;
  top: -170px;

  h3{
    width: 100%;
  }

  .show{
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .hide{
    display: none;
  }

       
`;

class Introduction extends React.Component{
  state = {
    introPosition: 0,
    show: true,
  }


  componentDidMount(props){
    //intro scroll position 
    //at id "intro" position from top + 500  < pageYOffset "hide" intro div
    // show and hide variable is defined at the render
    const element = document.getElementById('intro');
    const introPosition = element.getBoundingClientRect();
    this.setState({introPosition: introPosition.top + 500});
  }


  smoothScroll = () => {
        window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': - this.state.introPosition,
      });
  }

  
  

  render(props){

    console.log('position', this.state.introPosition, this.props.yPosition);
    const { contents, bgIntro ,apiUrl } = this.props;
    const introduction = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'introduction' )
          {
            return(
                  <Page key={item.nid} className='parallax-bg' style={{backgroundImage:`url(${bgIntro})`}}>
                          <Text>                   
                              {ReactHtmlParser(item.field_yellow_website_content)}  
                          </Text> 
                  </Page>
            )
          }
    })


    //if id "intro" top position + 500px  > pageYOffset than hide id "intro"
    const showHide = this.props.yPosition < this.state.introPosition
    ? 'show' : 'hide';
    
        
    return(
      <Div className="col-md-12">
      {this.props.yPosition + ' - ' + this.state.introPosition}
              {introduction}
              
            <Intro id="intro">  
                <div className={showHide}>
                   <h3>What Can I do</h3>
                  <BtnAngleDown />
                </div>                 
            </Intro>         
      </Div>      
        )
  }
}


export default Introduction;