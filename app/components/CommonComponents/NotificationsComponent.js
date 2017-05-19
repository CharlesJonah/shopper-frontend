import React from 'react';
import Badge from 'material-ui/Badge';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NotificationIcon from 'material-ui/svg-icons/social/notifications';
import Messages from 'material-ui/svg-icons/action/announcement';
import styles from '../../styles';

export default class Notifications extends React.Component{
    render(){
            return(
                <div>
                            <IconButton tooltip="Notifications" style={{ "padding": "0","marginTop":"-5px"}}>
                                <Badge
                                badgeStyle={{ top: 14, right: 20, width: 18 ,height: 18, fontSize: 10}}
                                badgeContent={"17"}
                                secondary={true}
                                >
                                <NotificationIcon style={{"color":"#72726f"}}/>
                                </Badge>
                            </IconButton>
                 </div>
            );
    }
}
