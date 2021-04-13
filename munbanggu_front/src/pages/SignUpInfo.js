import React from 'react';
import styled from 'styled-components';
import nexticon from '../shared/next_icon.png'
import icondot from '../shared/icon_dot.png'

const SignUpInfo =(props)=> {

    return (
      <React.Fragment>
        <Container>
          <Contents>
            <SubContents>
              <ContentBox>
                <MemberTit>
                  <Sign>회원가입</Sign>
                  <SignChap>
                    <Now>
                      <Num>01</Num>정보입력
                      <span>
                        <IconImg src={nexticon} />
                      </span>
                    </Now>
                    <Next>
                      <Num>02</Num>가입완료
                    </Next>
                  </SignChap>
                </MemberTit>
                <MemberCont>
                  <BaseInfoBox>
                    <BasicInfo>기본정보</BasicInfo>
                    <Important>
                      <ImgDot src={icondot} />
                      표시는 반드시 입력하셔야 하는 항목입니다.
                    </Important>
                  </BaseInfoBox>
                  <BaseInfoSec>
                    <Table border="0" cellPadding="0" cellSpacing="0">
                      <colgroup>
                        <col width="25%"></col>
                        <col width="75%"></col>
                      </colgroup>
                      <Tbody>
                        <Tr>
                          <Th>
                            <ImgDot src={icondot} />
                            <span>아이디</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputLong />
                              <MissingId>사용가능한 아이디입니다.</MissingId>
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <ImgDot src={icondot} />
                            <span>비밀번호</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputPwd />
                              <PwdError>최소 10 이상 입력해 주세요.</PwdError>
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <ImgDot src={icondot} />
                            <span>비밀번호 확인</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputPwd />
                              <PwdError>비밀번호가 서로 다릅니다.</PwdError>
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <ImgDot src={icondot} />
                            <span>이름</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputLong />
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <ImgDot src={icondot} />
                            <span>이메일</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputEmail type="text" valueTapIndex="-1" />
                              <Select>
                                <option value="self">직접입력</option>
                                <option value="naver.com">naver.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="daum.net">daum.net</option>
                                <option value="nate.com">nate.com</option>
                                <option value="hotmail.com">hotmail.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="icloud.com">icloud.com</option>
                              </Select>
                              <MissingEmail>
                                사용가능한 이메일입니다.
                              </MissingEmail>
                              <FormElement>
                                <CheckInput type="checkbox" />
                                <Label>
                                  (선택)마케팅 및 이벤트 정보 메일 수신에
                                  동의합니다.
                                </Label>
                              </FormElement>
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <ImgDot src={icondot} />
                            <span>휴대폰 번호</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputMid />
                              <FormElement>
                                <CheckInput type="checkbox" />
                                <Label>
                                  (선택)마케팅 및 이벤트 정보 메일 수신에
                                  동의합니다.
                                </Label>
                              </FormElement>
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <span>전화번호</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputLong />
                            </MemberWarning>
                          </Td>
                        </Tr>
                        <Tr>
                          <Th>
                            <span>주소</span>
                          </Th>
                          <Td>
                            <MemberWarning>
                              <InputLetterNum />
                              <PostCodeBtn>우편번호검색</PostCodeBtn>
                              <AddressInput>
                                <InputAddress />
                                <InputSubAddress />
                              </AddressInput>
                            </MemberWarning>
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </BaseInfoSec>
                </MemberCont>
                <BtnCenterBox>
                  <CancelButton>취소</CancelButton>
                  <SignUpButton>회원가입</SignUpButton>
                </BtnCenterBox>
              </ContentBox>
            </SubContents>
          </Contents>
        </Container>
      </React.Fragment>
    );
}
const Container = styled.div`
    border-top : 1px solid #eaeaea;
    margin-top : 0;
`
const Contents = styled.div`
    min-height : 400px;
    padding : 0 0 60px 0;
`
const SubContents = styled.div`
    padding : 40xp 0 0 0;
    position : relative;
    width : 1200px;
    margin : 0 auto;
`
const ContentBox = styled.div`
    float : left;
    width : 100%;
`
const MemberTit = styled.div`
    overflow : hidden;
    border-bottom : 1px solid #dbdbdb;
`
const Sign = styled.h2`
    float : left;
    font-size : 28px;
    color : #222222;
    margin :  0 0 20px 0;
    display : none;
`
const SignChap = styled.ol`
    float : right;
    line-height : 62px;
    list-style : none;

`
const Num = styled.span`
    font-size : 16px;
    font-weight : bold;
`
const IconImg = styled.img`
    padding : 0 14px;
    vertical-align : -1px;
`
const Now = styled.li`
    color : #333;
    font-weight : bold;
    float : left;
    font-size : 14px;
`
const Next = styled.li`
    float : left;
    font-size : 14px;
    color : #d1d1d1;
`
const MemberCont = styled.div`
    width : 743px;
    margin : 0 auto;
    border : none;
    padding : 30px 145px;
`
const BaseInfoBox = styled.div`
    margin : 0;
    padding : 0;
    line-height : 1.5;
`
const BasicInfo = styled.h3`
    padding : 0 0 17px 0;
    font-size : 18px;
    color : #222222;
    display : inline-block;
    font-weight : normal;
    margin-bottom : 25px;
    text-align : center;
`
const Important = styled.span`
    float : right;
    padding : 7px 0 0 10px;
    line-height : 40px;
    color : #333;
    font-size : 12px;
`
const ImgDot = styled.img`
    padding : 0 7px 3px 0;
`
const BaseInfoSec = styled.div`
    border-top : 1px solid #999999;
`
const Table = styled.table`
    width : 100%;
`
const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
`
const Tr = styled.tr`
display: table-row;
vertical-align: inherit;
border-color: inherit;
`
const Th = styled.th`
    text-align : left;
    border-bottom : 1px solid #dcdcdc;
    background : #fbfbfb;
    padding : 10px 15px;
    font-size : 12px;
`
const MissingId = styled.div`
    color : #329cff;
    text-align : left;
`
const MissingEmail = styled.div`
    color : #329cff;
    text-align : left;
`
const Td = styled.td`
    padding : 15px 0 15px 15px;
    border-bottom : 1px solid #dcdcdc;
    font-size : 12px;
    line-height : 1.5;
`
const MemberWarning = styled.div`
    display : inline;
    position : relative;
`
const InputLong = styled.input`
    width : 380px;
    padding : 0 10px;
    outline : none;
    height : 31px;
    color : #333333;
    border : 1px solid #d6d6d6;
`
const InputPwd = styled.input`
    padding : 0 10px;
    outline : none;
    font-size : 12px;
    height : 31px;
    color : #333333;
    border : 1px solid #d6d6d6;
    line-height : 31px;
    box-sizing : border-box;
`
const PwdError = styled.div`
    color : #000;
    text-align : left;
    font-size : 12px;
`
const InputEmail = styled.input`
    padding : 0 10px;
    outline : none;
    font-size : 12px;
    height : 31px;
    color : #333333;
    border : 1px solid #d6d6d6;
    line-height : 31px;
    box-sizing : border-box;
    width : 251px;
`


const InputMid = styled.input`
    padding : 0 10px;
    outline : none;
    font-size : 12px;
    height : 31px;
    color : #333333;
    border : 1px solid #d6d6d6;
    line-height : 31px;
    box-sizing : border-box;
    width : 190px;
`
const InputLetterNum = styled.input`
    padding : 0 10px;
    outline : none;
    font-size : 12px;
    height : 31px;
    color : #333333;
    border : 1px solid #d6d6d6;
    line-height : 31px;
    box-sizing : border-box;
    width : 190px;
    float : left;
`
const Select = styled.select`
    width : 120px;
    height : 31px;
    color : #717171;
    vertical-align : top;
    outline : none;
    display : none;
`
const FormElement = styled.div`
    display : block;
    margin-top : 5px;
`
const CheckInput = styled.input`
    width : 13px;
    height : 13px;
    vertical-align : top;
    outline-offset : 2px;
    padding :  0 0 0 22px;
    mid-width : 13px;
`
const Label = styled.label`
    position : relative;
    top : 0;
    left : 0;
    display : inline-block;
    min-height : 20px;
`
const AddressInput = styled.div`
    float : left;
    width : 72%;
`
const InputAddress = styled.input`
    margin : 10px 0 0 0;
    padding : 0 10px;
    width : 380px;
    outline : none;
    height : 31px;
    color : #333333;
    border : 1px solid #d6d6d6;
`
const InputSubAddress = styled.input`
margin : 10px 0 0 0;
padding : 0 10px;
width : 380px;
outline : none;
height : 31px;
color : #333333;
border : 1px solid #d6d6d6;
`
const PostCodeBtn = styled.button`
    float : left;
    margin : 0 0 0 5px;
    padding : 5px 10px 5px 10px;
    border : 1px solid #989898;
    font-size : 12px;
    line-height : 1.5;
    color : #333;
    background-color : transparent;
    cursor : pointer;
`
const BtnCenterBox = styled.div`
    margin : 35px 0 0 0;
    text-align : center;
`
const CancelButton = styled.button`
    width : 150px;
    height : 45px;
    color : #3e3d3c;
    font-weight : bold;
    font-size : 13px;
    border : 1px solid #cccccc;
    background : #fff;
    cursor : pointer;
`
const SignUpButton = styled.button`
    margin-left : 6px;
    width : 150px;
    height : 45px;
    color : #ffffff;
    font-weight : bold;
    font-size : 13px;
    border : 1px solid #000;
    background : #000;
    cursor : pointer;
`
export default SignUpInfo;