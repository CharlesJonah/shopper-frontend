import React from 'react';
import styles from '../styles';
import NavBarMenu from '../components/CommonComponents/NavBarMenu';
import MainAvatarIcon from '../components/CommonComponents/MainAvatar';
import CreateItemButton from '../components/ShopComponents/CreateItemButton';

export default class ShopContainer extends React.Component {

    render() {
        return (
            <div>
                <NavBarMenu />
                <div style={styles.Body}>
                    <div className="row" style={{ "margin": "0 auto", width: 1000 }}>
                        <div className="col-lg-4" style={{ height: 240 }}>
                            <MainAvatarIcon />
                        </div>

                        <div className="col-lg-8" style={{ height: 240, marginTop: 90 }}>
                            <div className="row">
                                <div className="col-lg-6" >
                                    <p style={{ fontSize: 28, fontWeight: 200 }}>Charles Mutua Muthini </p>
                                </div>
                                <div className="col-lg-3" >
                                    <p style={{ fontSize: 20, fontWeight: 400, marginTop: 8 }}>123 followers </p>
                                </div>
                                <div className="col-lg-3">
                                    <p style={{ fontSize: 20, fontWeight: 400, marginTop: 8 }}>167 following </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12" >
                                    <p>Lorem ipsum dolor sit amet, pro everti nominavi repudiandae an. Sea audiam mnesarchum ei, ad eius iusto assueverit mea.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12" >
                                    <CreateItemButton />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}