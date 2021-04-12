import React from "react";
import styled from "styled-components";
import footerlogo from "../shared/footer_logo.png";

const Footer = () => {
    return (
        <FooterWrap>
            <FooterBody>
                <ImgBody>
                    <img src={footerlogo} alt="footerlogo" width="100px" />
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
                        <dl>
                            <dt>상호 :</dt>
                            <dd>(주)우아한 형제들</dd>
                        </dl>
                        <dl>
                            <dt>대표 :</dt>
                            <dd>김범준</dd>
                        </dl>
                        <dl>
                            <dt>사업자등록번호 :</dt>
                            <dd>120-87-65763</dd>
                        </dl>
                        <dl>
                            <dt>통신판매업신고번호 :</dt>
                            <dd>2012-서울송파-0515</dd>
                        </dl>
                        <dl>
                            <dt>상호 :</dt>
                            <dd>[사업자정보확인]</dd>
                        </dl>
                    </FooterInfo>
                    <FooterInfo>
                        <dl>
                            <dt>대표번호 :</dt>
                            <dd>1670-9902</dd>
                        </dl>
                        <dl>
                            <dt>배민문방구 고객센터(1670-9902) 운영시간 :</dt>
                            <dd>13:00~18:00(주말•공휴일 휴무)</dd>
                        </dl>
                    </FooterInfo>
                    <FooterInfo>
                        <dl>
                            <dt>팩스번호 :</dt>
                            <dd>050-605-0041</dd>
                        </dl>
                        <dl>
                            <dt>메일 :</dt>
                            <dd>baemin_store@woowahan.com</dd>
                        </dl>
                        <dl>
                            <dt>배민문방구 인스타그램 :</dt>
                            <dd>@baemin_store</dd>
                        </dl>
                    </FooterInfo>
                    <FooterInfo>
                        <dl>
                            <dt>주소 :</dt>
                            <dd>서울특별시 송파구 위례성대로 2 장은빌딩</dd>
                        </dl>
                        <dl>
                            <dt>호스팅제공 :</dt>
                            <dd>엔에이치엔고도(주)</dd>
                        </dl>
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

export default Footer;
