import React from 'react';

import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import ScrollAnimation  from 'react-animate-on-scroll';


const Form = styled.div`
   width: 95%;
   height: 100vh;
  
  > div > form {
      font-family: sans-serif;
      background-color: #fefefe;
      margin: 0% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
      max-width: 400px;
      width: 80%; /* Could be more or less, depending on screen size */
      padding: 50px 30px;
  }

  > div > form > div {
    display: block;
  }
  > div > form > div > p{
    font-size: 0.9rem;
  }
  >div > form > div > span.close{
    font-size: 1.7rem;
    font-weight: 900;
    float: right;
    position: relative;
    top: -25px;
    color: #ff0000;
    cursor: pointer;
  }
  >div > form > div > label{
    display: block;
    margin: 5px 0px;
    font-weight: 100;
  }
  > div > form > div > input, textarea{
    display: block;
    padding: 3px 5px;
    font-size: 1.2rem;
    margin-bottom: 10px;
    width: 100%;
    border: 0px;
    border-bottom: 1px solid #ccc;
  }
  > div > form > div > input::placeholder, textarea::placeholder{
    font-size: 0.9rem;
    color: #999;
  }

  > div > form > div > input.submit{
    width: 103%;
    margin-top: 15px;
    padding: 5px 0px;
    background-color: #9E9E9E;
    color: #fff;
    font-family: sans-serif;
    font-weight: 100;
    letter-spacing: 2px;
  }
  

  > div > form > div > p >button.cancel{
    padding: 10px 15px;
    font-size: 1.0rem;
    letter-spacing: 1px;
    background-color: #e21414;
    color: #ccc;
    cursor: pointer;
  }

`;

const Msg = styled.div`
  color: #ff0000;
  font-size: 0.8rem;
`;

const SITE_KEY = "6LcWp4gUAAAAAC43piE31voViYWu5LIRcnSoixbV";
const DELAY = 1500;

const initialStates = {
  name: '',
  email: '',
  message: '',
  nameError: '',
  emailError: '',
  messageError:'',
  msgError: '',
  /* for captach  */
  callback: "not fired",
  value: "[empty]",
  load: false,
  expired: "false"
}

class Contact extends React.Component{
  constructor(props, ...args){
    super(props, ...args);


    this._reCaptchaRef = React.createRef();

    this.state = initialStates;

    /*form submit hand change* */
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    /* captcha call delay time */
    setTimeout(() => {
      this.setState({ load: true });
    }, DELAY);
   // console.log("didMount - reCaptcha Ref-", this._reCaptchaRef);
  }

  /** FOR CAPTCH  */
  handleChange = value => {
    console.log("Captcha value:", value);
    this.setState({ value });
    // if value is null recaptcha expired
    if (value === null) this.setState({ expired: "true" });
  };

  asyncScriptOnLoad = () => {
    this.setState({ callback: "called!" });
    console.log("scriptLoad - reCaptcha Ref-", this._reCaptchaRef);
  };
  /** FOR CAPTCH CLOSED  */


  /* form handle change* */
  handleOnChange(event){
    const isCheckBox = event.target.type === 'checkbox';
      this.setState({[event.target.name]:
                        isCheckBox
                        ? event.target.checked
                        : event.target.value});
  }

  /* form validation */
  validate = (event) =>{
    let nameError = '';
    let emailError = '';
    let messageError = '';

    if(!this.state.name){
      nameError = 'Username ?' ;
    }
    if(!this.state.email.includes('@' && '.')){
      emailError = 'Invalide Email?';
    }

    if(!this.state.email){
      emailError = 'Email?';
    }

    if(!this.state.message){
      messageError = 'Message ?'
    }

    if(nameError || messageError  || emailError){
      this.setState({nameError, messageError, emailError});
      return false;
    }

    return true;
  }


  handleOnSubmit(event, props){
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      this.setState(initialStates);
      console.log('name', this.state.name, 'email', this.state.email);

      alert('Okay');

      



    }else{
      this.setState({msgError: 'Please enter required field'});
    }

  }

  render(){
    const { value, callback, load, expired } = this.state || {};
    return(
    <div>  
    <ScrollAnimation animateIn="fadeIn" animateOnce={false}>
    <Form>
{/** POPUP FORM ****************************************************/}
      <div>
        <h3>Contact</h3>
        <form onSubmit={this.handleOnSubmit}>
          <Msg>{this.state.msgError}</Msg>
          <div>
           
             <Msg>{this.state.nameError}</Msg>
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleOnChange}
                placeholder='Name' />
          </div>
          <div>
           
             <Msg>{this.state.emailError}</Msg>
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder='Email' />
          </div>
          <div>
          
            <Msg>{this.state.messageError}</Msg>
            <textarea style={{height:'100px'}}
              type='textarea'
              name='message'
              value={this.state.message}
              onChange={this.handleOnChange}
              placeholder='Message' />
          </div>
          <div>
          {load && (
          <ReCAPTCHA
            style={{ display: "inline-block" }}
            theme="clean"
            ref={this._reCaptchaRef}
            sitekey={SITE_KEY}
            onChange={this.handleChange}
            asyncScriptOnLoad={this.asyncScriptOnLoad}
          />
        )}
          </div>

          <div>
            <input type='submit' className='submit' value='Submit' />
          </div>
        </form>
      </div>
      
      </Form>
      </ScrollAnimation>
      </div> 
    )
  }
}
export default Contact;
