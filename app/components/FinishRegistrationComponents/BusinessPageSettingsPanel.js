import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import styles from '../../styles';

export default class BusinessPageSettingsPanel extends React.Component{
    render(){
        return(
            <div className="row" style ={{"margin": "0 auto", width:1000}}>
                <div className="col-lg-4" style ={{height: 300}}>
                    <SelectField
                        hintText="Business Category"
                        fullWidth ={true}
                        style
                        >
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </SelectField>

                    <TextField
                    hintText="Physical Address"
                    fullWidth ={true}
                    style={styles.SignUpTextBox}
                    underlineFocusStyle={{"borderColor":"#ef0765"}}
                    />

                    <TextField
                    hintText="Postal Address"
                    fullWidth ={true}
                    style={styles.SignUpTextBox}
                    underlineFocusStyle={{"borderColor":"#ef0765"}}
                    />

                    <TextField
                    hintText="Phone"
                    fullWidth ={true}
                    style={styles.SignUpTextBox}
                    underlineFocusStyle={{"borderColor":"#ef0765"}}
                    />
                </div>
                
                
                <div className="col-lg-4" style ={{height: 300}}>
        
                </div>
                
            </div>
            
        );
    }
}