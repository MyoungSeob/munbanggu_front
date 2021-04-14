import React, {useState} from 'react';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import styled from 'styled-components'
import HeaderCategory from './HeaderCategory';
import HeaderScrollLogo from './HeaderScrollLogo'

const Header=(props)=>{
    
    const [scrollPosition, setScrollPosition] = useState(0); //스크롤바의 시작은 0
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position)			//스크롤을 할 때마다 scrollPosition의 값은 변한다.
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive : true});//스크롤이벤트 구독
        return() => {
            window.removeEventListener('scroll', handleScroll);//스크롤이벤트 구독 해제
        }
    }, [])

    return (
        <React.Fragment>
            {window.pageYOffset < 40 ? (  
          <Box>
            <HeaderLogin />
            <HeaderLogo />
            <HeaderCategory />
          </Box>
        ) : (
          <Box>
            <HeaderScrollLogo />
          </Box>
          )}
        </React.Fragment>
    )
}

const Box = styled.div`
    position : relative;
`
export default Header;