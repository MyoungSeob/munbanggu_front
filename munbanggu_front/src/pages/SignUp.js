import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import beaminbutton from "../shared/beamin_button.png";
import facebookicon from "../shared/facebookicon.png";
import { history } from "../redux/configStore";
import google_login_btn from "../shared/google_login_btn.png";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
    const dispatch = useDispatch();
    function googleLogin() {
        dispatch(userActions.googleLoginDB());
    }

    return (
        <React.Fragment>
            <SubContent>
                <ContentBox>
                    <MemberWrap>
                        <MemberCont>
                            <MemberLoginBox>
                                <MemberLoginShop>
                                    <JoinButton href="/user/register/info">
                                        <BeaminImg src={beaminbutton} />
                                    </JoinButton>
                                </MemberLoginShop>
                                <Google>
                                    <GoogleBtn onClick={googleLogin} src={google_login_btn} />
                                </Google>
                            </MemberLoginBox>
                        </MemberCont>
                        <MemberGuide>
                            <p>
                                이미 배민문방구 회원이신가요?
                                <Login
                                    href="#"
                                    onClick={() => {
                                        history.push("/user/login");
                                    }}
                                >
                                    로그인
                                </Login>
                            </p>
                        </MemberGuide>
                    </MemberWrap>
                </ContentBox>
            </SubContent>
        </React.Fragment>
    );
};
const SubContent = styled.div`
    padding: 40px 0 0 0;
    position: relative;
    width: 1200px;
    margin: 0 auto;
`;
const ContentBox = styled.div`
    float: left;
    width: 100%;
`;
const MemberWrap = styled.div`
    width: 750px;
    margin: 20px auto 40px auto;
`;
const MemberCont = styled.div`
    padding: 30px 145px;
`;
const MemberLoginShop = styled.div`
    margin: 0 0 20px 0;
`;
const JoinButton = styled.a`
    display: block;
    font-size: 15px;
    text-align: center;
    background: #ffffff;
    color: #3e3d3c;
    cursor: pointer;
`;
const BeaminImg = styled.img`
    width: 100%;
`;
const Google = styled.div`
    text-align: center;
    display: block;
`;

const GoogleBtn = styled.img`
    cursor: pointer;
    width: auto;
    height: 55px;
`;
const MemberLoginBox = styled.div`
    width: 460px;
    height: 163.92px;
`;
const MemberGuide = styled.div`
    text-align: center;
    padding: 18px 0px 20px 0;
    color: #666666;
    font-size: 12px;
`;
const Login = styled.a`
    font-weight: bold;
    color: #333;
    text-decoration: none;
    padding-left: 2px;
    cursor: pointer;
`;
const IconBox = styled.span`
    padding: 0 0 10px 0;
`;

export default Signup;
