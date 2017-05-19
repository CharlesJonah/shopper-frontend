import React from 'react';
import AppBar from 'material-ui/AppBar';
import styles from '../../styles';
import Message from './Messages';
import Notifications from './NotificationsComponent';
import AvatarIcon from './Avatar';
import NavBarSearch from './NavBarSearch'

export default class NavBarMenu extends React.Component{
    render(){
            return(
                <div>
                    <AppBar
                        style ={styles.NavBarComponentStyle}
                        iconElementLeft={<img alt="shopper" src="app/assets/images/shopper-logo.png"  
                        width="150px" height ="40px" style={{"paddingLeft":"20px","marginTop":"5px"}}/>}
                        >
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right" style={{"marginTop":"5px"}}>
                                <li>
                                    <NavBarSearch />
                                   
                                </li>
                                <li style={{"marginRight": "10px"}}>
                                    <Message />
                                </li>
                                <li style={{"marginRight": "30px"}} >
                                    <Notifications />
                                </li>
                                <li>
                                    <AvatarIcon />
                                </li>
                                
                            </ul>
                        </div>
                    </AppBar>
                 </div>
            );
    }
}
