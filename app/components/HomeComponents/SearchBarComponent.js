import React from 'react';
import styles from '../../styles';

export default class SearchBarComponent extends React.Component{
    render(){
        return(
            <div>
            <input type="text" placeholder="Search ..." style={styles.SearchBarComponent}/>
            </div>
        );
    }
}