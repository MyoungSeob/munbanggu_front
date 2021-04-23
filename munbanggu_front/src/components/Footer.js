import React from "react";
import styled from "styled-components";
import footerlogo from "../shared/Image/footer_logo.png";

const Footer = () => {
    return (
        <FooterWrap>
            <FooterBody>
                <ImgBody>
                    <img src={footerlogo} alt="footerlogo" wiDth="100px" />
                </ImgBody>
                <FooterContent>
                    <FooterUl>
                        <FooterLi>공지사항</FooterLi>
                        <FooterLi>1:1문의</FooterLi>
                        <FooterLi>이용약관</FooterLi>
                        <FooterLi>개인정보처리방침</FooterLi>
                        <FooterLi>판매처 안내</FooterLi>
                    </FooterUl>
                    <FooterInfo>
                        <Dl>
                            <Dt>상호 :</Dt>
                            <Dd>(주)우아한 형제들</Dd>
                        </Dl>
                        <Dl>
                            <Dt>대표 :</Dt>
                            <Dd>김범준</Dd>
                        </Dl>
                        <Dl>
                            <Dt>사업자등록번호 :</Dt>
                            <Dd>120-87-65763</Dd>
                        </Dl>
                        <Dl>
                            <Dt>통신판매업신고번호 :</Dt>
                            <Dd>2012-서울송파-0515</Dd>
                        </Dl>
                        <Dl>
                            <Dt>상호 :</Dt>
                            <Dd>[사업자정보확인]</Dd>
                        </Dl>
                    </FooterInfo>
                    <FooterInfo>
                        <Dl>
                            <Dt>대표번호 :</Dt>
                            <Dd>1670-9902</Dd>
                        </Dl>
                        <Dl>
                            <Dt>배민문방구 고객센터(1670-9902) 운영시간 :</Dt>
                            <Dd>13:00~18:00(주말•공휴일 휴무)</Dd>
                        </Dl>
                    </FooterInfo>
                    <FooterInfo>
                        <Dl>
                            <Dt>팩스번호 :</Dt>
                            <Dd>050-605-0041</Dd>
                        </Dl>
                        <Dl>
                            <Dt>메일 :</Dt>
                            <Dd>baemin_store@woowahan.com</Dd>
                        </Dl>
                        <Dl>
                            <Dt>배민문방구 인스타그램 :</Dt>
                            <Dd>@baemin_store</Dd>
                        </Dl>
                    </FooterInfo>
                    <FooterInfo>
                        <Dl>
                            <Dt>주소 :</Dt>
                            <Dd>서울특별시 송파구 위례성대로 2 장은빌딩</Dd>
                        </Dl>
                        <Dl>
                            <Dt>호스팅제공 :</Dt>
                            <Dd>엔에이치엔고도(주)</Dd>
                        </Dl>
                        <p>© Woowa Brothers Corp. All right Reserved</p>
                    </FooterInfo>
                </FooterContent>
            </FooterBody>
        </FooterWrap>
    );
};

const FooterWrap = styled.div`
    width: 100%;
    background-color: #f6f6f6;
    padding: 0 0 60px 0;
    overflow: hiDden;
`;

const FooterBody = styled.div`
    background: #f6f6f6;
    width: 1200px;
    margin: 0 auto;
    padding-top: 30px;
`;

const ImgBody = styled.div`
    width: 290px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
`;

const FooterContent = styled.div`
    display: inline-block;
    margin-left: 18px;
`;

const FooterUl = styled.ul`
    margin: 0 0 30px 0;
    padding: 0;
    list-style: none;
`;

const FooterLi = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-right: 50px;
    display: inline-block;
`;

const FooterInfo = styled.div`
    font-size: 12px;
    color: #717171;
    margin-bottom: 4px;
`;

const Dl = styled.dl`
    display: inline-block;
    margin: 0 10px 0 0;
    position: relative;
    &:after {
        content: "";
        display: block;
        position: absolute;
        right: -7px;
        top: 5px;
        width: 1px;
        height: 10px;
        background-color: #717171;
        margin: 0 4px;
    }
`;

const Dt = styled.dt`
    display: inline-block;
`;

const Dd = styled.dd`
    display: inline-block;
    margin-left: 4px;
`;

export default Footer;
