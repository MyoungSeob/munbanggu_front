import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {history} from "../redux/configStore"
import { actionCreators as userActions } from "../redux/modules/user";

const HeaderLogin =(props)=> {
  const dispatch = useDispatch();

  const is_login = useSelector((state)=>state.user.is_login);
  
  const log_token = localStorage.getItem("log_token")? true:false
  console.log(log_token);

  if(is_login && log_token){
    return (
      <React.Fragment>
        <Container>
          <LoginBox>
            <Box>
              <Ul></Ul>
              <GridBox>
              <il><LoginText href="#" onClick={()=>{dispatch(userActions.logoutDB())}}>로그아웃</LoginText><TextBar /></il>
              <il><LoginText>마이페이지</LoginText><TextBar /></il>
              <il><LoginText>장바구니<CartCount>0</CartCount></LoginText></il>
              </GridBox>
            </Box>
          </LoginBox>
        </Container>
      </React.Fragment>
    );
  }


return(
          <React.Fragment>
          <Container>
            <LoginBox>
              <Box>
                <Ul></Ul>
                <GridBox>
                <il><LoginText onClick={()=>{
                  history.push("/user/login");
                }}> 로그인</LoginText><TextBar /></il>
                <il><LoginText onClick={()=>{
                  history.push("/user/register");
                }}>회원가입</LoginText><TextBar /></il>
                <il><LoginText>마이페이지</LoginText><TextBar /></il>
                <il><LoginText>장바구니<CartCount>0</CartCount></LoginText></il>
                </GridBox>
              </Box>
            </LoginBox>
          </Container>
        </React.Fragment>
)

    
              }
const Container = styled.div`
position : relative;

`
const LoginBox = styled.div`
height : 40px;
border-bottom : 1px solid #eaeaea;
background : #fff;

`
const Box = styled.div`
    position : relative;
    width : 1200px; 
    margin : 0px auto;
`
const Ul = styled.ul`
  float : left;
  position : relative;
  line-height : 1;
  z-index : 99;
  list-style : none;
`
const GridBox = styled.div`
  float : right;
  position : relative;
  line-height : 1;
  z-index : 99;
  list-style : none;
`
const LoginText = styled.a`
    display : inline-block;
    height : 40px;
    padding : 0 10px 0 0;
    color : #717171;
    font-weight : 500;
    font-size : 12px;
    line-height : 40px;
    &:hover {
        cursor : pointer;
    }
`;
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