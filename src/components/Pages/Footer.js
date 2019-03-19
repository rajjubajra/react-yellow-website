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
      text-align: center;
    }

    > p > a, p{
      text-decoration: none;
      color: #555;
    }

`;


class Footer extends React.Component{
  
    render(props){
      
      const { footer, apiUrl } = this.props;
      let dt = new Date();

      const contents = footer.map((item)=> {
            return(
                  <StickToButtom key={item.nid}>
                      <p>
                        &copy; {dt.getFullYear()} All rights reserved  
                        &nbsp; <a href={item.field_yw_footer_website_url}>    
                                 {item.field_yw_footer_website_url.substring(7)}
                               </a> &nbsp;    
                         | &nbsp; {item.field_yw_footer_telephone}  &nbsp;
                         | &nbsp; {item.field_yw_footer_address}
                      </p>
                   </StickToButtom>
                )
          })

     
      return(
        <div className="col-md-12">
          {contents}
        </div>
      )
    }


}
export default Footer;