import React from 'react';
import AppBar from 'material-ui/AppBar';
import styles from '../../styles';
import SignUpModalLinkComponent from './SignUpModalLinkComponent'
import SignInModalComponent from './SignInModalComponent'
import AboutUsComponent from './AboutUsComponent'
import WhyShopperComponent from './WhyShopperComponent'
import ContactsComponent from './ContactsComponent'

export default class NavBarComponent extends React.Component{
    render(){
            return(
                <div>
                    <AppBar
                        style ={styles.NavBarComponentStyle}
                        iconElementLeft={<img alt="shopper"src="app/assets/images/shopper-logo.png"  width="150px" height ="40px" style={{"paddingLeft":"20px","marginTop":"5px"}}/>}
                    >
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right" style={{"marginTop":"5px"}}>
                                <li>
                                    <AboutUsComponent />
                                </li>
                                <li>
                                    <WhyShopperComponent />
                                </li>
                                <li>
                                    <ContactsComponent/>
                                </li>
                                <li>
                                    <SignUpModalLinkComponent />
                                </li>
                                <li>
                                    <SignInModalComponent /> 
                                </li>
                            </ul>
                        </div>


                    </AppBar>
                 </div>
            );
    }
}
