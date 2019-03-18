import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Page, Text} from './Page-style';
import styled from 'styled-components';
import ScrollAnimation  from 'react-animate-on-scroll';


const MessageButtom = styled.div`
      width: 100%;
      margin: 0px auto;
      text-align: center;
      margin-top: 75px;

    a{
      -webkit-text-decoration: none;
      text-decoration: none;
      color: #eee;
      padding: 10px 20px;
      background-color: #046732;
      font-weight: 100;
      letter-spacing: 0.25rem;
    }
    
`;

const Status = (props) => {


  const { contents, paiUrl } = props;
  const status = contents.map((item)=> {
          if(item.field_yellow_website_unique_bloc === 'status' )
          {
            return(
              <Page>
                 <Text>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                        <h3>{item.title}</h3>
                        {ReactHtmlParser(item.field_yellow_website_content)}
                        <MessageButtom>
                          <a href="https://www.yellow-website.com/d8-api-provider/contact/yw_contact_form" target="_blank" >Message me</a>
                        </MessageButtom>
                    </ScrollAnimation>                  
                 </Text>      
              </Page>              
            )
          }
    })
    

  return(
    <div className="col-md-12">
       {status}
    </div>
  )
}
export default Status;