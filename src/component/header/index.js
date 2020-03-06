import React from 'react';
import './style.scss';
import Logo from '../../assets/logo.svg';


const Header = (props) => {
    return(
        <header data-test='headerAttr'>
            <div className="wrap" data-test="wrapperAttr">
                <div className="logo" data-test="logoAttr">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    );
}

export default Header;