import React from 'react';
import styles from '../styles';
import NavBarComponent from '../components/HomeComponents/NavBarComponent';
import MainComponent from '../components/HomeComponents/MainComponent';
import SignUpModalButtonComponent from '../components/HomeComponents/SignUpModalButtonComponent';
import SearchBarComponent from '../components/HomeComponents/SearchBarComponent';

export default class HomeContainer extends React.Component {
    render(){
        return (
            <div>
                <NavBarComponent />
                <div style={styles.Body}>
                    <MainComponent />
                    <div className="row">
                        <div className="col-lg-4">
                        </div>

                        <div className="col-lg-4">
                            <center><SignUpModalButtonComponent /></center>
                        </div>

                        <div className="col-lg-4">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3">
                        </div>

                        <div className="col-lg-6">
                            <SearchBarComponent />
                        </div>

                        <div className="col-lg-3">
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    } 
}