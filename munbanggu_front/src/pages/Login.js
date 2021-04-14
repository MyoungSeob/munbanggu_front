import React from "react";
import styled from "styled-components";

const Login = (props) =>{
  return(
    <React.Fragment>
      <Content_box>
	<WrapLogp>
		{/* <!-- //member_tit --> */}
		<Content_mem>

    
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
					<SnsA href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fclient_id%3Dec10db670bd119e740558ca82e00b250%26redirect_uri%3Dhttps%3A%2F%2Fupbit.com%2Foauth%26response_type%3Dcode%26state%3De30%253D%26encode_state%3Dtrue" ><I>TALK</I>카카오계정으로 로그인</SnsA>
					
				</div>
				
				
				<Btn_login_box>
					<UL>
						<LI><Border><Authbut id="btnJoinMember" class="btn_member_join">회원가입</Authbut></Border></LI>
						<LI><Border><Authbut id="btnFindId" class="btn_member_white">아이디 찾기</Authbut></Border></LI>
						<LI><Authbut id="btnFindPwd" class="btn_member_white">비밀번호 찾기</Authbut></LI>
					</UL>
				</Btn_login_box>
        
				{/* <!-- //btn_login_box --> */}
        </Hiddeninput>
        </Hiddeninput>
        </Form>
        </Content_mem>
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
    line-height: 1px;
`;

const SnsA = styled.a`
    background-image: "../shared/kakao_login_medium_narrow.png;";
    font-weight: 500;
    margin:8px 0px 0px;
    background-size: cover 42px;
    text-align: center; 
    display: block;
    margin-top: 20px;
    height: 55px;
    padding-left: 18px;
    background-color: #ffdc00;
    color: #3c1e1e;
    font-size: 17px;
    font-family: Noto Sans KR,sans-serif;
    padding-top: 14px;
    width:100%;
    box-sizing: border-box;
    border: none;
    border-radius:.1em;

`;


const I =styled.i `
display: inline-block;
    width: 24px;
    height: 23px;
    margin-right: 10px;
    background: url(https://cdn.upbit.com/images/bg.e801517.png) -280px -50px no-repeat;
    overflow: hidden;
    text-indent: -999em;
    vertical-align: -5px;
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

const HLogin = styled.h3`
    font-weight: normal;
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 24px;

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




const Btn_login_box = styled.div`
    overflow: hidden;
    margin: 10px 0 0 0;
    padding: 10px 0 50px 0;
    border-bottom: 1px solid #dcdcdc;
    display:block;
    
    
    
`;



const UL = styled.ul `
    font-size: 12px;
    margin: 0;
    padding: 0;
    
    text-align: center;
    
    list-style: none;
`;

const Border= styled.div`
 border-right:1px solid #dcdcdc;
 padding-right:5px;
`;
const LI = styled.li `
  
  position: relative;
    display: inline-block;
   
    margin-right:5px;
    
    
`
const Authbut = styled.button `
    color: #333;
    font-size: 14px;
    background: none;
    border: none;
    font-weight: normal;
    width: auto;
    cursor: pointer;
    height: auto;
    
    `
;


export default Login