import React from 'react';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';

const Header=(props)=>{

    return (
        <React.Fragment>
            <HeaderLogin />
            <HeaderLogo />
        </React.Fragment>
    )
}

export default Header;