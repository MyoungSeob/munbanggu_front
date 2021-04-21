import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import nexticon from "../shared/next_icon.png";
import plusIcon from "../shared/PlusIcon.png";
import equalicon from "../shared/equalicon.png";
import warningIcon from '../shared/icon_warning.png'
import CartList from "../components/CartList";

const Cart = (props) => {
  return (
    <React.Fragment>
      <SubContent>
        <ContentBox>
          <OrderWrap>
            <OrderTit>
              <Htwo>장바구니</Htwo>
              <Ol>
                <Li>
                  <TitleSpan>01</TitleSpan> 장바구니
                  <TitleSpan>
                    <NextIcon src={nexticon} />
                  </TitleSpan>
                </Li>
                <LiTwo>
                  <TitleSpanTwo>02</TitleSpanTwo> 주문서작성/결제
                </LiTwo>
              </Ol>
            </OrderTit>
            {localStorage.length > 2 ? (
              <CartList />
            ) : (
              <CartCont>
                <P>장바구니에 담겨있는 상품이 없습니다.</P>
              </CartCont>
            )}

            <BtnLeftBox>
              <ShopGo
                onClick={() => {
                  history.push("/");
                }}
              >
                <Em>{"<"} 쇼핑 계속하기</Em>
              </ShopGo>
            </BtnLeftBox>
            <PriceSum>
              <PriceSumCont>
                <PriceSumList>
                  <Dl>
                    <Dt>
                      총 <Strong>0</Strong> 개의 상품금액
                    </Dt>
                    <Dd>
                      <StrongDd>0</StrongDd>원
                    </Dd>
                  </Dl>
                  <PriceSpan>
                    <PlusIcon src={plusIcon} />
                  </PriceSpan>
                  <Dl>
                    <Dt>배송비</Dt>
                    <Dd>
                      <StrongDd>0</StrongDd>원
                    </Dd>
                  </Dl>
                  <PriceSpan>
                    <PlusIcon src={equalicon} />
                  </PriceSpan>
                  <Dl>
                    <Dt>합계</Dt>
                    <Dd>
                      <StrongTotal>2,500</StrongTotal>원
                    </Dd>
                  </Dl>
                </PriceSumList>
              </PriceSumCont>
            </PriceSum>
            {localStorage.length > 2 ? (
              <div>
                <BtnOrderBox>
                  <BtnLeftBoxtwo>
                    <ButtonOrderDel>선택 상품 삭제</ButtonOrderDel>
                    <ButtonOrderWish>선택 상품 찜</ButtonOrderWish>
                  </BtnLeftBoxtwo>
                  <BtnRightBox>
                    <BtnChoiceBuy
                      onClick={() => {
                        history.push("/order");
                      }}
                    >
                      선택 상품 주문
                    </BtnChoiceBuy>
                    <BtnOrderWholeBuy
                      onClick={() => {
                        history.push("/order");
                      }}
                    >
                      전체 상품 주문
                    </BtnOrderWholeBuy>
                  </BtnRightBox>
                </BtnOrderBox>
                <Bill>
                  <Emtwo>
                    <span>
                      <WarningIcon src={warningIcon} />
                    </span>
                    주문서 작성단계에서 할인/적립금 적용을 하실 수 있습니다.
                  </Emtwo>
                </Bill>
              </div>
            ) : (
              ""
            )}
          </OrderWrap>
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
  padding-bottom : 60px;
`;
const OrderWrap = styled.div`
  
`;
const OrderTit = styled.div`
  overflow: hidden;
  border-bottom: 1px solid #dbdbdb;
`;
const Htwo = styled.h2`
  float: left;
  font-size: 28px;
  color: #222222;
`;
const Ol = styled.ol`
  float: right;
  line-height: 62px;
  list-style: none;
`;
const Li = styled.li`
  float: left;
  color: #000;
  font-weight: bold;
  list-style: none;
`;
const LiTwo = styled.li`
  float: left;
  color: #d1d1d1;
  font-weight: bold;
  list-style: none;
`;
const TitleSpanTwo = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #d1d1d1;
`;
const TitleSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const NextIcon = styled.img`
  padding: 0 14px;
  vertical-align: -1px;
  border: 0 none;
`;
const CartCont = styled.div``;
const P = styled.p`
  padding: 60px 0;
  margin: 0 0 20px 0;
  text-align: center;
  border-bottom: 1px solid #dbdbdb;
  color: #444;
  font-size: 12px;
`;
const BtnLeftBox = styled.div`
  text-align: left;
`;
const ShopGo = styled.a`
  display: inline-block;
  border-bottom: 1px solid #333333;
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;
const Em = styled.em`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;
const PriceSum = styled.div`
  width: 1116px;
  height: 64px;
  margin: 30px 0 0 0;
  padding: 20px 40px 25px 40px;
  border: 2px solid #d6d6d6;
`;
const PriceSumCont = styled.div`
  display: table;
  float: right;
  text-align: right;
`;
const PriceSumList = styled.div`
  position: relative;
`;
const Dl = styled.dl`
  display: table-cell;
  padding: 5px 10px 5px 10px;
  font-size: 16px;
  text-align: right;
  list-style: none;
`;
const Dt = styled.dt``;
const Dd = styled.dd`
  margin: 0;
`;
const Strong = styled.strong`
  font-weight: 600;
`;
const StrongDd = styled.strong`
  font-weight: 700;
  font-size: 18px;
  color: #000;
`;
const StrongTotal = styled.strong`
  color: #29c1bc !important;
  font-weight: 700;
  font-size: 18px;
`;
const PriceSpan = styled.span`
  display: table-cell;
  padding: 0 15px 0 15px;
  text-align: center;
  vertical-align: middle;
`;
const PlusIcon = styled.img`
  border: 0 none;
  vertical-align: top;
`;
const BtnOrderBox = styled.div`
  overflow: hidden;
  padding: 30px 0 0 0;
  text-align: right;
`;
const BtnLeftBoxtwo = styled.span`
  text-align: left;
  float: left;
`;
const ButtonOrderDel = styled.button`
  display: inline-block;
  min-width: 120px;
  height: 30px;
  padding: 0 15px 0 15px;
  color: #626262;
  border: 1px solid #a3a3a3;
  text-align: center;
  line-height: 28px;
  background-color: transparent;
  cursor: pointer;
`;
const ButtonOrderWish = styled.button`
  margin-left: 6px;
  display: inline-block;
  min-width: 120px;
  height: 30px;
  padding: 0 15px 0 15px;
  color: #626262;
  border: 1px solid #a3a3a3;
  text-align: center;
  line-height: 28px;
  background-color: transparent;
  cursor: pointer;
`;
const BtnRightBox = styled.span`
  float: right;
  text-align: right;
`;
const BtnChoiceBuy = styled.button`
  min-width: 190px;
  height: 55px;
  padding: 0 20px 0 20px;
  color: #3e3d3c;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid #cccccc;
  background: #fff;
  cursor: pointer;
`;
const BtnOrderWholeBuy = styled.button`
  margin-left: 6px;
  min-width: 190px;
  height: 55px;
  padding: 0 20px 0 20px;
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid #000;
  background: #000;
  cursor: pointer;
`;
const Emtwo = styled.em`
    display : inline-block;
    float : right;
    min-height : 17px;
    margin : 10px 0 0 0;
    padding : 5px 0 5px 19px;
    color : #000;
    font-weight : normal;
    font-style : normal;
    font-size : 12px;
`
const Bill = styled.div`
    float : right;
    margin-bottom : 60px;
`
const WarningIcon = styled.img`
    float : left;
    padding : 5px 5px 0 0;
`
export default Cart;
