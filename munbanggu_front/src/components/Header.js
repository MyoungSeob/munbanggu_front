import React from 'react';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import styled from 'styled-components'
import HeaderCategory from './HeaderCategory';

const Header=(props)=>{
    

    return (
        <React.Fragment>
            <Box>
            <HeaderLogin />
            <HeaderLogo />
            <HeaderCategory />
            </Box>
        </React.Fragment>
    )
}

const Box = styled.div`
    position : relative;
`
export default Header;