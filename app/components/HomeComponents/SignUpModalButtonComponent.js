import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from '../../styles';
import LoadingSpinner from './LoadingSpinner';

export default class SignUpModalButtonComponent extends React.Component {
   

  constructor(props){
        super(props);
        this.state = {
                        open: false,
                        firstName:'',
                        lastName:'',
                        email:'',
                        password:'',
                        firstNameErrorText:'',
                        lastNameErrorText:'',
                        passwordErrorText:'',
                        emailErrorText:'',
                        formMessage:'',
                        emailIsValid:false,
                        submitButtonDisabled:false
                    };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleOnBlurEmail = this.handleOnBlurEmail.bind(this);
        this.handleOnBlurPassword = this.handleOnBlurPassword.bind(this);
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
        this.handleChangeLastName = this.handleChangeLastName.bind(this);
        this.handleOnBlurFirstName = this.handleOnBlurFirstName.bind(this);
        this.handleOnBlurLastName = this.handleOnBlurLastName.bind(this);
    }

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleChangeFirstName(event) {
    this.setState({firstName: event.target.value});
  };
  handleChangeLastName(event) {
    this.setState({lastName: event.target.value});
  };
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  };
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  };
  handleOnBlurFirstName(event) {
    if (this.state.firstName == ''){
          this.setState({firstNameErrorText:'This Field is Required'});
    }
    else{
        this.setState({firstNameErrorText:''});
    }
  };
  handleOnBlurLastName(event) {
    if (this.state.lastName == ''){
          this.setState({lastNameErrorText:'This Field is Required'});
    }
    else{
        this.setState({lastNameErrorText:''});
    }
  };
  handleOnBlurEmail(event) {
    if (this.state.email == ''){
          this.setState({emailErrorText:'This Field is Required'});
    }
    else{
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(this.state.email )){
              this.setState({emailErrorText:'Enter a Valid Email Address'});
        }
        else{
             this.setState({emailErrorText:'',emailIsValid:true});
        }
    }
  };
  handleOnBlurPassword(event) {
    if (this.state.password == ''){
          this.setState({passwordErrorText:'This Field is Required'});
    }
    else{
        this.setState({passwordErrorText:''});
    }
  };
   handleClick(event){
        //  event.preventDefault();
        let apiBaseUrl = "http://127.0.0.1:8100/v1/auth/register";
        if (this.state.email == '' || this.state.password == '' || this.state.firstName == '' || this.state.lastName == '') {
          this.setState({formMessage:'Please Fill all the Fields',emailErrorText:'',passwordErrorText:'',firstNameErrorText:'',lastNameErrorText:''});
        }
        else if(this.state.emailIsValid == false){
            this.setState({formMessage:'Enter a Valid Email Address',emailErrorText:'Enter a Valid Email Address',
            passwordErrorText:'',firstNameErrorText:'',lastNameErrorText:''});
        }
        else{ 
            this.setState({formMessage:'',emailErrorText:'',passwordErrorText:'',
            firstNameErrorText:'',lastNameErrorText:'',submitButtonDisabled:true}); 
            let payload={
            "email":this.state.email,
            "password":this.state.password,
            "first_name":this.state.firstName,
            "last_name":this.state.lastName
            }
            axios.post(apiBaseUrl, payload)
            .then((response) => {
            if(response.status == 201){
              this.setState({open: false});
              browserHistory.push('/registration'); 
            }
            })
            .catch((error) => {
                this.setState({formMessage:'Failed! Please try Again',submitButtonDisabled:false});
            });
  }};

  render() {
    
    return (
      <div>
            <FlatButton label="Sign Up" onTouchTap={this.handleOpen} secondary={true} style={styles.SignUpButton} 
             backgroundColor="#ef0765"
             labelStyle={{"textTransform":"none",fontSize: "18px"}} 
             disableTouchRipple={true}
             hoverColor="#c10753"/>
      
            <Dialog
            onRequestClose={this.handleClose}
            contentStyle={{"width":"25%"}}
            titleStyle={{"color":"#ef0765"}}
            title={<div>Sign Up
                <img alt="shopper"src="app/assets/images/close.png"  width="150px" height ="20px" onTouchTap={this.handleClose} style={styles.CloseImg}/>
                </div>
                }
            open={this.state.open}
            >
            <div className="result" style={{'color':'#ff0000'}}><p>{ this.state.formMessage }</p></div>
            <div>
                <TextField
                hintText="Firstname"
                fullWidth ={true}
                style={styles.SignUpTextBox}
                underlineFocusStyle={{"borderColor":"#ef0765"}}
                onChange={this.handleChangeFirstName}
                onBlur={this.handleOnBlurFirstName}
                errorText= {this.state.firstNameErrorText}
                />
                
            </div>
            <div>
                <TextField
                hintText="Lastname"
                fullWidth ={true}
                style={styles.SignUpTextBox}
                underlineFocusStyle={{"borderColor":"#ef0765"}}
                onChange={this.handleChangeLastName}
                onBlur={this.handleOnBlurLastName}
                errorText= {this.state.lastNameErrorText}/>
                
            </div>
            <div>
                <TextField
                hintText="Email"
                fullWidth ={true}
                type='email'
                errorText= {this.state.emailErrorText}
                style={styles.SignUpTextBox}
                underlineFocusStyle={{"borderColor":"#ef0765"}}
                onChange={this.handleChangeEmail}
                onBlur={this.handleOnBlurEmail}
                />
            </div>
            <div>
                <TextField
                hintText="Password"
                fullWidth ={true}
                type='password'
                style={styles.SignUpTextBox}
                errorText= {this.state.passwordErrorText}
                underlineFocusStyle={{"borderColor":"#ef0765"}}
                onChange={this.handleChangePassword}
                onBlur={this.handleOnBlurPassword}
                />
            </div>
            <div>
                  <FlatButton
                    backgroundColor="#ef0765"
                    hoverColor="#c10753"
                    onClick={this.handleClick}
                    label="Sign Up" 
                    secondary={true}
                    disabled={this.state.submitButtonDisabled}
                    labelStyle={{"textTransform":"none",fontSize: "14px"}} 
                    fullWidth={true}
                    style={{"color":"#fff", "height":"50px"}}
                    disableTouchRipple={true}
                    />
    
            </div>
            </Dialog>
      </div>
    );
  }
}