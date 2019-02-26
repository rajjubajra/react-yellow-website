import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled, {keyframes} from 'styled-components';


const animatezoom = keyframes`
  from {transform: scale(0)}
  to {transform: scale(10)}
`;

const openFormHover = keyframes`
 from { height: 40px; background-color:#eca92d; border: 1px solid #eee }
 to{ height:100px; background-color:#eca92d00; border: 0px}  
`;

const openForm = keyframes`
from { height: 100px; background-color:#eca92d00; border: 0px solid #eee }
to{ height:40px; background-color:#eca92d; border: 1px solid #eee }  
`;


const Form = styled.div`
  > button.openform{
    width: 250px;
    padding: 10px 20px;
    background-color: #eca92d;
    margin: 20px;
    animation: ${openForm} 0.6s ease-out;

    &:hover{
      background-color: #eca92d00;
      margin: 20px;
      background-image: url(/images/envelope.png);
      background-repeat: no-repeat;
      background-size: 40%;
      height: 100px;
      border: 0px;
      background-position: center;
      -webkit-animation: ${openFormHover} 0.6s ease;
      animation: ${openFormHover} 0.6s ease;
    }
  }

  > div.popupform {
    display: none; /* Hidden by default */
    z-index: 1; /* Sit on top */
    position: relative;  /* Stay in place */
    top: -400px; 
    left: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: #f9f9f9; /* Black w/ opacity */
    padding-top: 60px;

  }

  > div > form {
      background-color: #fefefe;
      margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
      border: 1px solid #888;
      max-width: 400px;
      width: 80%; /* Could be more or less, depending on screen size */
      -webkit-animation: ${animatezoom} 0.6s;
      animation: ${animatezoom} 0.6s;
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
    border: 1px solid #ccc;
  }
  > div > form > div > input::placeholder, textarea::placeholder{
    font-size: 0.9rem;
    color: #555;
  }

  > div > form > div > input.submit{
    width: 103%;
    margin-top: 15px;
    padding: 5px 0px;
    background-color: #eca92d;
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

class FormContact extends React.Component{
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


  handleOnSubmit(event){
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


  popupContactForm(){
    document.getElementById('popupform').style.display='block';
  }
  closeContactForm(){
    document.getElementById('popupform').style.display='none';
  }



  render(){
    const { value, callback, load, expired } = this.state || {};
    return(
      <Form>

{/** BUTTON TO OPEN THE FORM **************************************/}
      <button className='openform' onClick={this.popupContactForm}>
        Message Me
      </button>



{/** POPUP FORM ****************************************************/}
      <div id="popupform" className="popupform">
        <form onSubmit={this.handleOnSubmit}>
          <div><span onClick={this.closeContactForm} className="close" title="Close Login Form">&times;</span></div>
          <Msg>{this.state.msgError}</Msg>
          <div>
            <label>Name</label>
             <Msg>{this.state.nameError}</Msg>
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleOnChange}
                placeholder='Name' />
          </div>
          <div>
            <label>Email</label>
             <Msg>{this.state.emailError}</Msg>
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleOnChange}
                placeholder='Email' />
          </div>
          <div>
            <label>Message</label>
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
            theme="dark"
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
    )
  }
}
export default FormContact;
