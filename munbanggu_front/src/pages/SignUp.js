import React from 'react';
import styled from 'styled-components';
import beaminbutton from '../shared/beamin_button.png'
import facebookicon from '../shared/facebookicon.png'
import  {history}  from "../redux/configStore"
const Signup=(props)=>{

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
                  <FaceBook>
                    <FaceBookButton >페이스북으로 회원가입</FaceBookButton>
                  </FaceBook>
                </MemberLoginBox>
              </MemberCont>
              <MemberGuide>
                  <p>이미 배민문방구 회원이신가요?<Login href="#" onClick={()=>{history.push("/user/login")}}>로그인</Login></p>
              </MemberGuide>
            </MemberWrap>
          </ContentBox>
        </SubContent>
      </React.Fragment>
    );
}
const SubContent = styled.div`
    padding : 40px 0 0 0;
    position : relative;
    width : 1200px;
    margin : 0 auto;
`
const ContentBox = styled.div`
    float : left;
    width : 100%;
`
const MemberWrap = styled.div`
    width : 750px;
    margin : 20px auto 40px auto;
`
const MemberCont = styled.div`
    padding : 30px 145px;
`
const MemberLoginShop = styled.div`
margin : 0 0 20px 0;
`
const JoinButton = styled.a`
display: block;
font-size: 15px;
text-align: center;
background: #ffffff;
color: #3e3d3c;
cursor : pointer;
`
const BeaminImg = styled.img`
    width : 100%;
`
const FaceBook = styled.div`
  text-align : center;
  display:block;
`

const FaceBookButton = styled.a`
    background: url("https://store.baemin.com/data/skin/front/udweb_C/img/custom/txt_pc_facebook_join@3x.png") 40px 5px no-repeat;
    background-size: 38px;
    background-color: #4267b2;
    height: 55px;
    width : 460px;
    padding: 14px 164px;
    color: #fff;
    font-size: 14px;
    font-weight : bold;
    padding-top: 14px;
    box-sizing: border-box;
    border: none;
    cursor : pointer;
`
const MemberLoginBox = styled.div`
    width : 460px;
    height : 163.92px;
`
const MemberGuide = styled.div`
    text-align:center;
    padding:18px 0px 20px 0;
    color : #666666;
    font-size : 12px;
`
const Login = styled.a`
    font-weight : bold;
    color : #333;
    text-decoration : none;
    padding-left : 2px;
    cursor : pointer;   
`
const IconBox = styled.span`
    padding : 0 0 10px 0;
`



export default Signup;