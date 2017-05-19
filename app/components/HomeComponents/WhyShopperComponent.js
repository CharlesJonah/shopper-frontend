import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class WhyShopperComponent extends React.Component {
  
  render() {
    
    return (
      <div>
            <FlatButton label="Why Shopper" onTouchTap={this.handleOpen} primary={true}  
             backgroundColor="#fff"
             labelStyle={{"textTransform":"none",fontSize: "14px","color":"#ef0765"}} 
             disableTouchRipple={true}
             style={{"marginTop":"5px"}}
             hoverColor="#fff"/>
      </div>
    );
  }
}
