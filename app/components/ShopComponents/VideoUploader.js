import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import AddVideoIcon from 'material-ui/svg-icons/av/videocam';
import styles from '../../styles';
export default class VideopUploader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoHeight: null,
            videoWidth: null,
            file: '',
            videoPreviewUrl: ''
        };
        this.handleUploadVideo = this.handleUploadVideo.bind(this);
    }
    handleUploadVideo(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                videoPreviewUrl: reader.result,
                videoWidth: 195,
                videoHeight: 200
            });
        }
        reader.readAsDataURL(file);
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12" style={{ "width": "90% ", "height": "200", "backgroundColor": "#878684", "marginTop": "-20" }}>
                        <img src={this.state.videoPreviewUrl} width={this.state.videoWidth} height={this.state.videoHeight} style={{ "marginLeft": "-15" }} />
                    </div>
                    <FlatButton
                        label="Add Video ..."
                        style={styles.uploadVideoButton}
                        containerElement="label"
                        hoverColor="#fff"
                        labelStyle={{ "textTransform": "none", "fontSize": "16px", "color": "#ef0765" }}
                        disableTouchRipple={true}
                        icon={<AddVideoIcon />}
                    >
                        <input type="file" onChange={this.handleUploadVideo} style={styles.uploadInput} />
                    </FlatButton>
                </div>
            </div >
        );
    }
}