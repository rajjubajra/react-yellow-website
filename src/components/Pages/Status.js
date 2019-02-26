import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Page, Text} from './Page-style';
import styled from 'styled-components';
import ScrollAnimation  from 'react-animate-on-scroll';


const MessageForm = styled.div`
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
  const title = props.data && props.data.title;
  const text  = props.data && props.data.body;
  return(
   <Page>
     <section>
            <Text>
              <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
                <h3>{ReactHtmlParser(title)}</h3>
                {ReactHtmlParser(text)}
                <MessageForm>
                  <a href="https://www.yellow-website.com/d8-api-provider/contact/yw_contact_form" target="_blank" >Message me</a>
                </MessageForm>
              </ScrollAnimation>                
            </Text>
      </section>
    </Page>  
  )
}
export default Status;