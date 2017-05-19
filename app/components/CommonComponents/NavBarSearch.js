import React from 'react';
import Avatar from 'material-ui/Avatar';
import styles from '../../styles';

export default class AvatarIcon extends React.Component{
    render(){
        return(
            <div>
                <input type="text" placeholder="Search ..." style={styles.NavBarSearch}/>
            </div>
        );
    }
}