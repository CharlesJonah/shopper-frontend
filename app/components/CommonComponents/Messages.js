import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Messages from 'material-ui/svg-icons/action/announcement';

export default class Message extends React.Component{
    render(){
            return(
                <div>
                            <IconButton tooltip="Messages" style={{ "padding": "0","marginTop":"-5px"}}>
                                <Badge
                                badgeStyle={{ top: 12, right: 18, width: 18 ,height: 18, fontSize: 10}}
                                badgeContent={"17"}
                                secondary={true}
                                >
                                <Messages style={{"color":"#72726f"}}/>
                                </Badge>
                            </IconButton>
                 </div>
            );
    }
}