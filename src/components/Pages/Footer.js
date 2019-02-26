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
    state = {
      data: [],
      isLoaded: false
    }

    componentDidMount(props){

      fetch(`${this.props.anyWhereHeroku}/${this.props.apiUrl}/d8mailchimp/apifooter?_format=json`)
      .then(response => response.json())
      .then(data => this.setState({
              isLoaded: true,
              data: data
      }))
    }


    render(){
      console.log('FOOTER DATA', this.state.data);
      const url = this.state.data[0] && this.state.data[0].field_website_url;
      const website = this.state.data[0] && this.state.data[0].field_website_url.substring(8);
      const telephone = this.state.data[0] && this.state.data[0].field_telephone;
      const address = this.state.data[0] && this.state.data[0].field_address;


      let dt = new Date();
      return(
        <div>
        <StickToButtom>
        <p>
          &copy; {dt.getFullYear()} All rights reserved  |  <a href={url}>{website}</a> |  {telephone} | {address}
        </p>
        </StickToButtom>
        </div>
       
      )
    }


}
export default Footer;