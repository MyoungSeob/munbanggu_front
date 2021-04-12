import React from 'react';
import styled from 'styled-components';

const HeaderLogin =(props)=> {

    return (
      <React.Fragment>
        <Container>
          <LoginBox>
            <Box>
              <il><LoginText>로그인</LoginText><TextBar /></il>
              <il><LoginText>회원가입</LoginText><TextBar /></il>
              <il><LoginText>마이페이지</LoginText><TextBar /></il>
              <il><LoginText>장바구니<CartCount>0</CartCount></LoginText></il>
              </Box>
          </LoginBox>
        </Container>
      </React.Fragment>
    );
}

const Container = styled.div`
height : 40px;
border-bottom : 1px solid #eaeaea;
background : #fff;
width : 100%
`
const LoginBox = styled.div`

width : 1200px;
margin : 0 auto;
`
const Box = styled.div`
    float : right;
`
const LoginText = styled.a`
    display : inline-block;
    height : 40px;
    padding : 0 10px 0 0;
    color : #717171;
    font-weight : 500;
    font-size : 12px;
    line-height : 40px;
    &: hover {
        cursor : pointer;
    }
`
const TextBar = styled.span`
    display : inline-block;
    width : 1px;
    height : 7px;
    margin : 0 10px 0 0;
    background : #ddd;
    vertical-align : 0px;
`
const CartCount = styled.strong`
    display : inline-block;
    padding : 0px 5px 3px 4px;
    color : #29C1BC;
    line-height : 11px;
    font-size : 10px;  
    vertical-align : middle; 
`

export default HeaderLogin;