import React from 'react';
import FlatButton from 'material-ui/FlatButton';
export default class ContactsComponent extends React.Component {
  
  render() {
    
    return (
      <div>
            <FlatButton label="Contacts" onTouchTap={this.handleOpen} primary={true}  
             backgroundColor="#fff"
             labelStyle={{"textTransform":"none",fontSize: "14px","color":"#ef0765"}} 
             disableTouchRipple={true}
             style={{"marginTop":"5px"}}
             hoverColor="#fff"/>
      </div>
    );
  }
}
