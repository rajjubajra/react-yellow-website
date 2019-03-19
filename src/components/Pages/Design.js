import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Page, Image, Text } from './Page-style';
import ScrollAnimation from 'react-animate-on-scroll';
import BtnAngleDown from './BtnAngleDown';


class Design extends React.Component{
  state = {
    btnPosition: 0,
  }


  componentDidMount(){
      //intro scroll position 
      //at id "btn" position from top + 500  < pageYOffset "hide" intro div
      // show and hide variable is defined at the render
    const btnId = document.getElementById('btn');
    const btnPosition = btnId.getBoundingClientRect();
    this.setState({btnPosition: btnPosition.top + 500 });
  }


  render(props){
    //show hide btn 
    //if id "btn" top position + 500px  > pageYOffset than hide id "btn"
    const showHide = this.state.btnPosition < this.props.yPosition 
                     ? 'hide' : 'show';  

    const { contents, paiUrl } = this.props;
    const design = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'design' )
          {
            return(
                    <Text key={item.nid}>
                       
                        <h3>{ReactHtmlParser(item.title)}</h3>     
                        {ReactHtmlParser(item.field_yellow_website_content)}
                                    
                    </Text>        
            )
          }
    })
 
    return(
        <div className="col-md-12">
          <Page>
            {design} 
            <div id="btn" className={showHide}>
                <BtnAngleDown />
            </div>
          </Page>
        </div>
      )
  }

}
export default Design;