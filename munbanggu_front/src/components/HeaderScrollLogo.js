import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import HeaderLogin from "./HeaderLogin";
import headerlogo from "../shared/Image/header_logo.png";
import HeaderCategory from "./HeaderCategory";
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";

const HeaderScrollLogo = (props) => {
    //HeaderLogin과 같은 헤더이지만 스크롤 시 고정되는 Header
    const dispatch = useDispatch();

    const is_login = useSelector((state) => state.user.is_login);
    const log_token = localStorage.getItem("log_token");

    function pleaseLogin() {
        window.alert("장바구니는 로그인이 필요한 기능입니다.");
        history.push("/user/login");
        return;
    }

    if (log_token) {
        return (
            <React.Fragment>
                <Container>
                    <LoginBox>
                        <Box>
                            <Ul></Ul>
                            <GridBox>
                                <il>
                                    <LoginText
                                        onClick={() => {
                                            dispatch(userActions.logoutDB());
                                            history.replace("/");
                                        }}
                                    >
                                        로그아웃
                                    </LoginText>
                                    <TextBar />
                                </il>
                                <il>
                                    <LoginText onClick={()=>{history.push('/user/mypage')}}>마이페이지</LoginText>
                                    <TextBar />
                                </il>
                                <il>
                                    <LoginText
                                        onClick={() => {
                                            history.push("/cart");
                                        }}
                                    >
                                        장바구니<CartCount>{!localStorage.getItem(log_token) ? localStorage.length-2 : "0"}</CartCount>
                                    </LoginText>
                                </il>
                            </GridBox>
                        </Box>
                    </LoginBox>
                </Container>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Container>
                <LoginBox>
                    <Box>
                        <Ul></Ul>
                        <GridBox>
                            <il>
                                <LoginText
                                    onClick={() => {
                                        history.push("/user/login");
                                    }}
                                >
                                    {" "}
                                    로그인
                                </LoginText>
                                <TextBar />
                            </il>
                            <il>
                                <LoginText
                                    onClick={() => {
                                        history.push("/user/register");
                                    }}
                                >
                                    회원가입
                                </LoginText>
                                <TextBar />
                            </il>
                            <il>
                                <LoginText onClick={()=>{history.push('/user/mypage')}}>마이페이지</LoginText>
                                <TextBar />
                            </il>
                            <il>
                                <LoginText onClick={pleaseLogin}>
                                    장바구니<CartCount>0</CartCount>
                                </LoginText>
                            </il>
                        </GridBox>
                    </Box>
                </LoginBox>
            </Container>
        </React.Fragment>
    );
};

const Container = styled.div`
    position: relative;
    background: #fff;
    z-index: 99;
    padding-bottom: 95px;
`;
const LoginBox = styled.div`
    height: 40px;
    border-bottom: 1px solid #eaeaea;
    background: #fff;
    position: fixed;
    width: 100%;
    top: 0px;
`;
const Box = styled.div`
    position: relative;
    width: 1200px;
    margin: 0px auto;
`;
const ImgBox = styled.div`
    text-align: center;
    float: left;
    margin: 0px auto;
    left: 36.3%;
`;
// const ScrollLogo = styled.div`
//     position : relative;
//     width : 1200px;
//     margin : 0 auto;
//     display : flex;

// `
// const LogoBox = styled.div`
//     position : fixed;
//     top : 0;
//     left : 36.3%;
//     width : 27.3%;
//     z-index : 99;
//     height : 39px;
//     line-height : 39px;
// `
const Atag = styled.a`
    width: auto;
    display: block;
    margin: 0 300px;
    &: hover {
        cursor: pointer;
    }
`;
const Img = styled.img`
    height: 39px;
    width: auto;
`;
const Ul = styled.ul`
    float: left;
    position: relative;
    line-height: 1;
    z-index: 99;
    list-style: none;
`;
const GridBox = styled.div`
    float: right;
    position: relative;
    line-height: 1;
    z-index: 99;
    list-style: none;
`;
const LoginText = styled.a`
    display: inline-block;
    height: 40px;
    padding: 0 10px 0 0;
    color: #717171;
    font-weight: 500;
    font-size: 12px;
    line-height: 40px;
    &: hover {
        cursor: pointer;
    }
`;
const TextBar = styled.span`
    display: inline-block;
    width: 1px;
    height: 7px;
    margin: 0 10px 0 0;
    background: #ddd;
    vertical-align: 0px;
`;
const CartCount = styled.strong`
    display: inline-block;
    padding: 0px 5px 3px 4px;
    color: #29c1bc;
    line-height: 11px;
    font-size: 10px;
    vertical-align: middle;
`;

export default HeaderScrollLogo;
