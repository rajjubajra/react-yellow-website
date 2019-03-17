import React from 'react';
import styled from 'styled-components';

const StickToButtom = styled.div`
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    > p{
      font-size: 0.9rem;
      letter-spacing: 0px;
    }

    > p > a{
      text-decoration: none;
    }

`;

const api = 'd8mailchimp/apifooter?_format=json';

class Footer extends React.Component{
   
 


    render(props){
      
      const { footer, apiUrl } = this.props;
      let dt = new Date();

      const contents = footer.map((item)=> {
            return(
                  <StickToButtom>
                      <p>
                        &copy; {dt.getFullYear()} All rights reserved  
                        |   <a href={item.field_yw_footer_website_url}>    
                              {item.field_yw_footer_website_url.substring(7)}
                            </a>   
                        |  {item.field_yw_footer_telephone} 
                        |  {item.field_yw_footer_address}
                      </p>
                   </StickToButtom>
                )
          })

     
      return(
        <div>
         {contents}
        </div>
       
      )
    }


}
export default Footer;