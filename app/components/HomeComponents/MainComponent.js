import React from 'react';
import styles from '../../styles';
export default class MainComponent extends React.Component{
        render(){
            return(
                <div className="container">
                    <div className="row" style={styles.HeaderNote}>
                        <center>Ultimate Shopper's Experience</center>
                    </div>

                    <div className="row" style={styles.Lead}>
                        <center>Windowshopping and buying made easy and convinient</center>
                </div>
        </div>
            );
        }
        }
    