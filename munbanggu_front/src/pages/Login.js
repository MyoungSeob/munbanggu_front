import React from "react";
import styled from "styled-components";

const Login = (props) =>{
  return(
    <React.Fragment>
      <Content_box>
	<WrapLogp>
		{/* <!-- //member_tit --> */}
		<Content_mem>

    </Content_mem>
     <Form id="formLogin" method="post" action="https://store.baemin.com/member/login_ps.php" novalidate="novalidate">
				<Hiddeninput type="hidden" id="mode" name="mode" value="login">
				<Hiddeninput type="hidden" id="returnUrl" name="returnUrl" value="https%3A%2F%2Fstore.baemin.com%2F">
				<Logbox class="member_login_box">
					<HLogin>회원 로그인</HLogin>
					<div class="login_input_sec">
						<div>
							<Authinput type="text" id="loginId" name="loginId" value="" placeholder="아이디" required="true" aria-required="true"/>
							<Authinput type="password" id="loginPwd" name="loginPwd" value="" placeholder="비밀번호" required="true" aria-required="true"/>
						</div>
						<Id_chk>
							<Form_element>
								<input type="checkbox" id="saveId" name="saveId" value="y" checked=""/>
								<Label for="saveId" class="">아이디 저장</Label>
                
							</Form_element>
							{/* <p class="dn js_caution_msg1">아이디, 비밀번호가 일치하지 않습니다. 다시 입력해 주세요.</p> */}
						</Id_chk>
						<Logbut type="submit">로그인</Logbut>
					</div>

				</Logbox>
				{/* <!-- //login_box --> */}
				<div class="member_sns_login">
					
				
				</div>
				<div class="btn_login_box">
					<UL>
						<LI><Authbut id="btnJoinMember" class="btn_member_join">회원가입</Authbut></LI>
						<LI><Authbut id="btnFindId" class="btn_member_white">아이디 찾기</Authbut></LI>
						<LI><Authbut id="btnFindPwd" class="btn_member_white">비밀번호 찾기</Authbut></LI>
					</UL>
				</div>
        
				{/* <!-- //btn_login_box --> */}
        </Hiddeninput>
        </Hiddeninput>
        </Form>
        </WrapLogp>
        </Content_box>
        </React.Fragment>
      
  );
}


const Content_box = styled.div`
    float: left;
    width: 100%;  
`;

const WrapLogp = styled.div`
    width: 593px;
    margin: 20px auto 40px auto;
`;
const Content_mem= styled.div`
  padding: 30px 145px;
`;


const Id_chk = styled.div`
  padding: 0 0 26px 0;
`
const Form_element = styled.span`
    display: inline-block;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    `;



const Label = styled.label `
    
    top: 0;
    left: 0;
    display: inline-block;
    min-width: 20px;
    min-height: 20px;
    padding: 0 0 0 0px;
    cursor: default;
    
    
`;

const Form = styled.div `
  display: block;
  margin: 0;
  padding: 0;
`;



const Hiddeninput = styled.div `
  font-family: NotoSans, nanumgothic,"나눔고딕",Malgun Gothic,"맑은 고딕",AppleGothic,Dotum,"돋움",sans-serif;
  font-size: 12px;
  line-height: 1.5;
  vertical-align: middle;
`;

const Logbox = styled.div `
  display: block;
  margin: 0;
    padding: 0;
`;

const HLogin = styled.h3`
  font-weight: normal;
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 15px;
`;

const Authinput = styled.input `
    display: block;
    width: 100%;
    
    height: 50px;
    text-indent: 5px;
    border: none;
    border-bottom: 1px solid #c0c0c0;
    box-sizing: border-box;
    margin-bottom: 12px;
    font-size: 16px;
`;



const Logbut = styled.button `
    width: 100%;
    border: 1px solid #333;
    background: #333;
    color: #ffffff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    height: 55px;

`;




const UL = styled.ul `
  text-align: center;
`;


const LI = styled.li `
  position: relative;
    display: inline-block;
    padding: 0 12px 0 18px;
    margin-bottom: 10px;
`
const Authbut = styled.button `
    color: #333;
    font-size: 14px;
    background: none;
    border: none;
    font-weight: normal;
    width: auto;
    height: auto;`
;


export default Login