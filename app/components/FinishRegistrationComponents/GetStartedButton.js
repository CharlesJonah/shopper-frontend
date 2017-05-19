import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';
import styles from '../../styles';

export default class GetStartedButton extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <FlatButton label="Get Started" secondary={true} style={styles.GetStartedButton}
                    backgroundColor="#ef0765"
                    labelStyle={{ "textTransform": "none", fontSize: "18px" }}
                    disableTouchRipple={true}
                    onClick={browserHistory.push('/registration')}
                    hoverColor="#c10753" />

            </div>
        );
    }
}