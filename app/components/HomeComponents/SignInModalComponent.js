import React from 'react';
import axios from 'axios'
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import styles from '../../styles';


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class SignInModalComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            email:'',
            password:'',
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

    }
  

  handleOpen(){
    this.setState({open: true});
  };

  handleClose(){
    this.setState({open: false});
  };
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  };
  handleChangePassword(event) {
    this.setState({password: event.target.value});
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
        let apiBaseUrl = "http://127.0.0.1:8100/v1/auth/login";
        if (this.state.email == '' || this.state.password == '') {
          this.setState({formMessage:'Please Fill all the Fields',emailErrorText:'',passwordErrorText:''});
        }
        else if(this.state.emailIsValid == false){
          this.setState({formMessage:'Enter a Valid Email Address',emailErrorText:'Enter a Valid Email Address',passwordErrorText:''});
        }
        else{ 
            this.setState({formMessage:'',emailErrorText:'',passwordErrorText:'',submitButtonDisabled:true}); 
            let payload={
            "email":this.state.email,
            "password":this.state.password
            }
            axios.post(apiBaseUrl, payload)
            .then((response) => {
            console.log(response);
            if(response.status == 200){
              this.setState({open: false});
              browserHistory.push('/reg');  
            }
          
            })
            .catch((error) => {
              this.setState({formMessage:'Wrong Email or Password', submitButtonDisabled:false});
            console.log(error);
            });
  }};
  render() {
    
    return (
      <div>
            <FlatButton label="Sign In" onTouchTap={this.handleOpen} primary={true}  
             backgroundColor="#fff"
             labelStyle={{"textTransform":"none",fontSize: "14px","color":"#ef0765"}} 
             disableTouchRipple={true}
             style={{"marginTop":"5px",}}
             hoverColor="#fff"/>
        
            <Dialog
            onRequestClose={this.handleClose}
            contentStyle={{"width":"25%"}}
            titleStyle={{"color":"#ef0765"}}
            title={<div>Sign In
                <img alt="shopper"src="app/assets/images/close.png"  width="150px" height ="20px" onTouchTap={this.handleClose} style={styles.CloseImg} />
                </div>
                }
            open={this.state.open}
            >
            <div className="result" style={{'color':'#ff0000'}}><p>{ this.state.formMessage }</p></div>
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
                    label="Sign In" 
                    secondary={true}
                    disabled={this.state.submitButtonDisabled}
                    labelStyle={{"textTransform":"none",fontSize: "14px"}} 
                    fullWidth={true}
                    style={{"color":"#fff", "height":"50px"}}
                    />
      
            </div>
            </Dialog>
      </div>
    );
  }
}
