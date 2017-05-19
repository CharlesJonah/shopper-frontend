import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styles from '../styles';
import NavBarMenu from '../components/CommonComponents/NavBarMenu';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import MainComponent from '../components/HomeComponents/MainComponent';
import MainAvatarIcon from '../components/CommonComponents/MainAvatar';
import BusinessPageSettingsPanel from '../components/FinishRegistrationComponents/BusinessPageSettingsPanel';
import PersonalPageSettingsPanel from '../components/FinishRegistrationComponents/PersonalPageSettingsPanel';
import SuggestedFriends from '../components/FinishRegistrationComponents/SuggestedFriends';
import GetStartedButton from '../components/FinishRegistrationComponents/GetStartedButton';


export default class FinishRegistration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "Personal Page"
        };
        this.handleChangePersonalPage = this.handleChangePersonalPage.bind(this);
        this.handleChangeBusinessPage = this.handleChangeBusinessPage.bind(this)
    }

    handleChangePersonalPage(event) {
        this.setState({ page: "Personal Page" });

    };

    handleChangeBusinessPage(event) {
        this.setState({ page: "Business Page" });

    };
    render() {
        return (
            <div>
                <NavBarMenu />
                <div style={styles.Body}>
                    <div className="container">

                        <div className="row" style={{ "margin": "0 auto", width: 1000 }}>
                            <div className="col-lg-4" style={{ height: 240 }}>
                                <MainAvatarIcon />
                            </div>

                            <div className="col-lg-8" style={{ height: 240, marginTop: 70 }}>
                                <div className="row" style={{ "height": "20%", padding: 10, fontSize: 24 }}>
                                    <p>Choose Account Type</p>
                                </div>
                                <div className="row" style={{ "backgroundColor": "", "height": "80%", paddingLeft: 20 }}>
                                    <RadioButtonGroup name="accountType" defaultSelected="Personal Page">
                                        <RadioButton
                                            value="Personal Page"
                                            label="Personal Page"
                                            iconStyle={{ fill: '#ef0765' }}
                                            onClick={this.handleChangePersonalPage}
                                        />
                                        <RadioButton
                                            value="Business Page"
                                            label="Business Page"
                                            iconStyle={{ fill: '#ef0765' }}
                                            onClick={this.handleChangeBusinessPage}
                                        />

                                    </RadioButtonGroup>
                                </div>
                            </div>
                        </div>

                        <div>
                            {this.state.page === 'Personal Page' ?
                                <PersonalPageSettingsPanel
                                    handleChangePersonalPage={this.handleChangePersonalPage}
                                    handleChangeBusinessPage={this.handleChangeBusinessPage}
                                    page={this.state.page} /> :
                                <BusinessPageSettingsPanel
                                    handleChangePersonalPage={this.handleChangePersonalPage}
                                    handleChangeBusinessPage={this.handleChangeBusinessPage}
                                    page={this.state.page} />
                            }
                        </div>
                        <div>
                            <SuggestedFriends />
                        </div>
                        <div className='row' style={{ "margin": "0 auto", width: 1000 }}>
                            <div className='col-lg-4'>
                            </div>
                            <div className='col-lg-4'>
                                <GetStartedButton />
                            </div>
                            <div className='col-lg-4'>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}