import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddImageIcon from 'material-ui/svg-icons/image/photo';
import styles from '../../styles';
export default class ImageUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgHeight: null,
            imgWidth: null,
            file: '',
            imagePreviewUrl: ''
        };
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }
    handleUploadImage(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result,
                imgWidth: 195,
                imgHeight: 200
            });
        }
        reader.readAsDataURL(file);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12" style={{ "marginLeft": "15", "width": "90%", "height": "200", "backgroundColor": "#878684", "marginTop": "-20" }}>
                        <img src={this.state.imagePreviewUrl} width={this.state.imgWidth} height={this.state.imgHeight} style={{ "marginLeft": "-15" }} />

                        {/*<AddImageIcon style={{ "position": "relative", "top": "45%", "left": "45%" }} >
                            <input type="file" onChange={this.handleUploadImage} />
                        </AddImageIcon>*/}
                    </div>
                    <FlatButton
                        label="Add Image ..."
                        icon={<AddImageIcon style={{ "color": "#ef0765" }} />}
                        style={styles.uploadImageButton}
                        containerElement="label"
                        hoverColor="#fff"
                        labelStyle={{ "textTransform": "none", "fontSize": "16px", "color": "#ef0765" }}
                        disableTouchRipple={true}
                    >
                        <input type="file" onChange={this.handleUploadImage} style={styles.uploadInput} />
                    </FlatButton>
                </div>
            </div>
        );
    }
}