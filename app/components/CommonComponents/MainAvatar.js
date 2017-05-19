import React from 'react';
import Avatar from 'material-ui/Avatar';
import Image from 'material-ui/svg-icons/action/account-circle';

export default class MainAvatarIcon extends React.Component {
    render() {
        return (
            <div style={{ marginTop: 80, marginLeft: 70 }} >
                <Avatar icon={<Image />} size={160} />
            </div>
        );
    }
}