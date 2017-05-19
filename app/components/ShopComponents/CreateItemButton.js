import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ImageUploader from './ImageUploader';
import VideoUploader from './VideoUploader';
import styles from '../../styles';


export default class CreateItemButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            itemName: '',
            description: '',
            price: '',
            itemNameErrorText: '',
            descriptionErrorText: '',
            priceErrorText: '',
            formMessage: '',
            submitButtonDisabled: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeItemName = this.handleChangeItemName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleOnBlurPrice = this.handleOnBlurPrice.bind(this);
        this.handleOnBlurItemName = this.handleOnBlurItemName.bind(this);
        this.handleOnBlurDescription = this.handleChangeDescription.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    };

    handleClose() {
        this.setState({ open: false });
    };
    handleChangeItemName(event) {
        this.setState({ itemName: event.target.value });
    };
    handleChangePrice(event) {
        this.setState({ price: event.target.value });
    };
    handleChangeDescription(event) {
        this.setState({ email: event.target.value });
    };

    handleOnBlurItemName(event) {
        if (this.state.password == '') {
            this.setState({ itemNameErrorText: 'This Field is Required' });
        }
        else {
            this.setState({ itemNameErrorText: '' });
        }
    };

    handleOnBlurDescription(event) {
        if (this.state.password == '') {
            this.setState({ descriptionErrorText: 'This Field is Required' });
        }
        else {
            this.setState({ descriptionErrorText: '' });
        }
    };

    handleOnBlurPrice(event) {
        if (this.state.password == '') {
            this.setState({ priceErrorText: 'This Field is Required' });
        }
        else {
            this.setState({ priceErrorText: '' });
        }
    };
    handleClick(event) {
        //  event.preventDefault();
    };

    render() {

        return (
            <div>
                <FlatButton label="Create Item" secondary={true} style={styles.CreateItemButton}
                    backgroundColor="#ef0765"
                    labelStyle={{ "textTransform": "none", fontSize: "14px" }}
                    disableTouchRipple={true}
                    onTouchTap={this.handleOpen}
                    hoverColor="#c10753" />

                <Dialog
                    onRequestClose={this.handleClose}
                    contentStyle={{ "width": "35%" }}
                    titleStyle={{ "color": "#ef0765" }}
                    title={<div>Create Item
                <img alt="shopper" src="app/assets/images/close.png" width="150px" height="20px" onTouchTap={this.handleClose} style={styles.CloseImg} />
                    </div>
                    }
                    open={this.state.open}
                >
                    <div className="result" style={{ 'color': '#ff0000' }}><p>{this.state.formMessage}</p></div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ImageUploader />
                        </div>

                        <div className="col-lg-6">
                            <VideoUploader />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div>
                                <TextField
                                    hintText="Item Name"
                                    fullWidth={true}
                                    style={styles.SignUpTextBox}
                                    underlineFocusStyle={{ "borderColor": "#ef0765" }}
                                    onChange={this.handleChangeitemName}
                                    onBlur={this.handleOnBlurItemName}
                                    errorText={this.state.itemNameErrorText}
                                />

                            </div>
                            <div>
                                <TextField
                                    hintText="Description"
                                    fullWidth={true}
                                    style={styles.SignUpTextBox}
                                    underlineFocusStyle={{ "borderColor": "#ef0765" }}
                                    onChange={this.handleChangeDescription}
                                    onBlur={this.handleOnBlurDescription}
                                    errorText={this.state.descriptionErrorText} />

                            </div>
                            <div>
                                <TextField
                                    hintText="Price"
                                    fullWidth={true}
                                    type='email'
                                    errorText={this.state.priceErrorText}
                                    style={styles.SignUpTextBox}
                                    underlineFocusStyle={{ "borderColor": "#ef0765" }}
                                    onChange={this.handleChangePrice}
                                    onBlur={this.handleOnBlurPrice}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <FlatButton
                                backgroundColor="#ef0765"
                                hoverColor="#c10753"
                                onClick={this.handleClick}
                                label="Create Item"
                                secondary={true}
                                disabled={this.state.submitButtonDisabled}
                                labelStyle={{ "textTransform": "none", fontSize: "14px" }}
                                fullWidth={true}
                                style={{ "color": "#fff", "height": "50px" }}
                                disableTouchRipple={true}
                            />
                        </div>
                    </div>
                </Dialog>
            </div >
        );
    }
}