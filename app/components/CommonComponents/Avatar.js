import React from 'react';
import Avatar from 'material-ui/Avatar';
import Image from 'material-ui/svg-icons/action/account-circle';

export default class AvatarIcon extends React.Component{
    render(){
        return(
            <div style={{"marginTop":"7px"}} >
                    <Avatar icon={<Image/>}/>
            </div>
        );
    }
}