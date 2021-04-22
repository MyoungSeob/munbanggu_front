import React from "react";
import styled from "styled-components";

import nexticon_off from "../shared/nexticon_off.png";
import plusIcon from "../shared/PlusIcon.png";
import equalicon from "../shared/equalicon.png";

import CartList from "../components/CartList";

import DaumPostcode from "react-daum-postcode";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import {actionsCreators as productActions} from "../redux/modules/product"


const Order = (props) => {
  const dispatch = useDispatch();

  const [isAddress, setIsAddress] = React.useState("");
  const [isZoneCode, setIsZoneCode] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [detailAddress, setDetailAddress] = React.useState("");
  const [deliveryComment, setDeliveryComment] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [isCheckedCard, setIsCheckedCard] = React.useState(false);
  const [isCheckedPhone, setIsCheckedPhone] = React.useState(false);
  const [payMethod, setPayMethod] = React.useState("");

  const price = [];

  const countProduct = localStorage.length - 2
  if( localStorage.length > 2){
    for(let i = 1; i < localStorage.length - 1; i ++){
      price.push(JSON.parse(localStorage.getItem(i)).price)
    }
    console.log(price)
  }
  const sum = price.reduce((a, b) => a+b, 0);

  const checkedCard = () => {
    if(!isCheckedCard && !isCheckedPhone){
      setIsCheckedCard(true)
      setPayMethod("신용카드")
    }else{
      if(!isCheckedCard && isCheckedPhone){
        setIsCheckedPhone(false)
        setIsCheckedCard(true)
        setPayMethod("신용카드")
      }
    }
    if(isCheckedCard){
      setIsCheckedCard(false)
      setPayMethod("")
    }
    
  };
  const checkedPhone = () => {
    if(!isCheckedCard && !isCheckedPhone){
      setIsCheckedPhone(true)
      setPayMethod("휴대폰결제")
    }else{
      if(isCheckedCard && !isCheckedPhone){
        setIsCheckedCard(false)
        setIsCheckedPhone(true)
        setPayMethod("휴대폰결제")
      }
    }
    if(isCheckedPhone){
      setIsCheckedPhone(false)
      setPayMethod("")
    }    
  };
  console.log(payMethod);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
    }
    setIsZoneCode(data.zonecode);
    setIsAddress(fullAddress);
    handleClose();
  };
  const body = (
    <div>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
 
  function orderProduct() {
    if (isZoneCode === "" || isAddress ==="" || detailAddress === "" || deliveryComment === "" || payMethod === "" ||phoneNumber ===""){
      window.alert("위의 항목들을 모두 입력해주세요.")
      return;
    }else{
      dispatch(
        productActions.orderProductDB(
          isZoneCode,
          isAddress,
          detailAddress,
          deliveryComment,
          payMethod,
          phoneNumber
        )
      );
    }
  }

  console.log((localStorage.getItem(1).goods))

  return (
    <React.Fragment>
      <SubContent>
        <ContentBox>
          <OrderWrap>
            <OrderTit>
              <Htwo>장바구니</Htwo>
              <Ol>
                <LiTwo>
                  <TitleSpanTwo>01</TitleSpanTwo> 장바구니
                  <TitleSpanTwo>
                    <NextIcon src={nexticon_off} />
                  </TitleSpanTwo>
                </LiTwo>
                <Li>
                  <TitleSpan>02</TitleSpan> 주문서작성/결제
                </Li>
              </Ol>
            </OrderTit>
            <CartList />
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
                      총 <Strong>{countProduct}</Strong> 개의 상품금액
                    </Dt>
                    <Dd>
                      <StrongDd>{(sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StrongDd>원
                    </Dd>
                  </Dl>
                  <PriceSpan>
                    <PlusIcon src={plusIcon} />
                  </PriceSpan>
                  <Dl>
                    <Dt>배송비</Dt>
                    <Dd>
                      <StrongDd>{(sum >= 30000 ? 0 : 2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StrongDd>원
                    </Dd>
                  </Dl>
                  <PriceSpan>
                    <PlusIcon src={equalicon} />
                  </PriceSpan>
                  <Dl>
                    <Dt>합계</Dt>
                    <Dd>
                      <StrongTotal>{(sum >= 30000 ? sum : sum+2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StrongTotal>원
                    </Dd>
                  </Dl>
                </PriceSumList>
              </PriceSumCont>
            </PriceSum>
            <OrderViewInfo>
              <OrderInfo>
                <OrderZoneTit>
                  <H4>주문자/배송 정보</H4>
                </OrderZoneTit>

                <BaseInfoSec>
                  <Table border="0" cellPadding="0" cellSpacing="0">
                    <colgroup>
                      <col width="25%"></col>
                      <col width="75%"></col>
                    </colgroup>
                    <Tbody>
                      <Tr>
                        <Th>
                          <span>받으실 분</span>
                        </Th>
                        <Td>
                          <MemberWarning>
                            <InputBasic />
                          </MemberWarning>
                        </Td>
                      </Tr>
                      <Tr>
                        <Th>
                          <span>휴대폰 번호</span>
                        </Th>
                        <Td>
                          <MemberWarning>
                            <InputBasic
                              onChange={(e) => {
                                setPhoneNumber(e.target.value);
                              }}
                            />
                          </MemberWarning>
                        </Td>
                      </Tr>
                      <Tr>
                        <Th>
                          <span>받으실 곳</span>
                        </Th>
                        <Td>
                          <MemberWarning>
                            <InputBasic value={isZoneCode} />
                            <PostCodeBtn onClick={handleOpen}>
                              우편번호검색
                            </PostCodeBtn>
                            <Modal
                              open={open}
                              onClose={handleClose}
                              className={classes.modal}
                              aria-labelledby="simple-modal-title"
                              aria-describedby="simple-modal-description"
                            >
                              {body}
                            </Modal>
                            <AddressInput>
                              <InputAddress value={isAddress} />
                              <InputSubAddress
                                onChange={(e) => {
                                  setDetailAddress(e.target.value);
                                }}
                              />
                            </AddressInput>
                          </MemberWarning>
                        </Td>
                      </Tr>
                      <Tr>
                        <Th>
                          <span>남기실 말씀</span>
                        </Th>
                        <Td>
                          <MemberWarning>
                            <InputLong
                              onChange={(e) => {
                                setDeliveryComment(e.target.value);
                              }}
                            />
                          </MemberWarning>
                        </Td>
                      </Tr>
                      <Tr>
                        <Th>
                          <span>지불방식</span>
                        </Th>
                        <Td>
                          <MemberWarning>
                            <FormElement>
                              <CheckInput
                                onClick={checkedCard}
                                checked={isCheckedCard}
                                id="card"
                                type="checkbox"
                                value={payMethod}
                              />
                              <Label for="card">신용카드</Label>
                              <CheckInput_
                                onClick={checkedPhone}
                                checked={isCheckedPhone}
                                id="phone"
                                type="checkbox"
                                value={payMethod}
                              />
                              <Label for="phone">휴대폰결제</Label>
                            </FormElement>
                          </MemberWarning>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </BaseInfoSec>
              </OrderInfo>
            </OrderViewInfo>
          </OrderWrap>
          <OrderViewInfo>
            <OrderInfo>
              <OrderZoneTit>
                <H4>결제수단 선택 / 결제</H4>
              </OrderZoneTit>

              <BaseInfoSec>
                <Table border="0" cellPadding="0" cellSpacing="0">
                  <colgroup>
                    <col width="25%"></col>
                    <col width="75%"></col>
                  </colgroup>
                  <Tbody>
                    <Tr>
                      <Th>
                        <span>상품 합계 금액</span>
                      </Th>
                      <Td>
                        <TotalPrice>{(sum).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</TotalPrice>
                      </Td>
                    </Tr>
                    <Tr>
                      <Th>
                        <span>배송비</span>
                      </Th>
                      <Td>
                        <MemberWarning>
                          <span>{(sum >= 30000 ? 0 : 2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원
                        </MemberWarning>
                      </Td>
                    </Tr>
                    <Tr>
                      <Th>
                        <span>최종 결제 금액</span>
                      </Th>
                      <Td>
                        <MemberWarning>
                          <TotalPrice>{(sum >= 30000 ? sum : sum+2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TotalPrice>원
                        </MemberWarning>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </BaseInfoSec>
            </OrderInfo>
          </OrderViewInfo>
          <PaymentFinal>
            <PaymentFinalTotal>
              <FinalDl>
                <FinalDt>최종 결제 금액</FinalDt>
                <FinalDd>
                  <SpanFinal>
                    <StrongFinal>{(sum >= 30000 ? sum : sum+2500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StrongFinal>원
                  </SpanFinal>
                </FinalDd>
              </FinalDl>
            </PaymentFinalTotal>
            <PaymentalCheck>
              <P>
                전자상거래 등에서의 소비자보호에 관한 법률에 의거하여 미성년자가
                물품을 구매하는 경우,
                <br />
                법정대리인이 동의하지 않으면 미성년자 본인 또는 법정대리인이
                구매를 취소할 수 있습니다.
              </P>
              <FormElementFin>
                <CheckInputFin type="checkbox" />
                <Label>
                  <Fem>
                    <b>(필수)</b> 구매하실 상품의 결제정보를 확인하였으며,
                    구매진행에 동의합니다.
                  </Fem>
                </Label>
              </FormElementFin>
            </PaymentalCheck>
            <BtnCenterBox>
              <PayBtn onClick={orderProduct}>
                <BtnEm>결제하기</BtnEm>
              </PayBtn>
            </BtnCenterBox>
          </PaymentFinal>
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
  padding-bottom: 60px;
`;
const OrderWrap = styled.div``;
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
const OrderViewInfo = styled.div``;
const OrderInfo = styled.div``;
const OrderZoneTit = styled.div`
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  font-size: 16px;
`;
const H4 = styled.h4`
  font-weight: 600;
  font-size: 16px;
  margin: 50px 0 10px 0;
`;
const BaseInfoSec = styled.div`
  border-top: 1px solid #999999;
`;
const Table = styled.table`
  width: 100%;
  background-color: #ffffff;
`;
const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  background-color: #ffffff;
`;
const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const Th = styled.th`
  text-align: left;
  border-bottom: 1px solid #dcdcdc;
  background: #fbfbfb;
  padding: 10px 15px;
  font-size: 12px;
`;
const Td = styled.td`
  padding: 15px 0 15px 15px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 12px;
  line-height: 1.5;
`;
const MemberWarning = styled.div`
  display: inline;
  position: relative;
`;
const InputBasic = styled.input`
  width: 220px;
  padding: 0 10px;
  outline: none;
  height: 31px;
  color: #333333;
  border: 1px solid #d6d6d6;
`;
const InputLong = styled.input`
  width: 90%;
  padding: 0 10px;
  outline: none;
  height: 31px;
  color: #333333;
  border: 1px solid #d6d6d6;
`;
const FormElement = styled.div`
  display: block;
  margin-top: 5px;
`;
const CheckInput = styled.input`
  width: 13px;
  height: 13px;
  vertical-align: top;
  outline-offset: 2px;
  padding: 0 0 0 22px;
  mid-width: 13px;
`;
const CheckInput_ = styled.input`
  width: 13px;
  height: 13px;
  vertical-align: top;
  outline-offset: 2px;
  padding: 0 0 0 22px;
  mid-width: 13px;
  margin-left: 50px;
`;
const CheckInputFin = styled.input`
  width: 13px;
  height: 13px;
  vertical-align: middle;
  outline-offset: 2px;
  padding: 0 0 0 22px;
  mid-width: 13px;
  margin-left: 50px;
`;
const Label = styled.label`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  min-height: 20px;
`;
const AddressInput = styled.div`
  float: left;
  width: 98%;
`;
const InputAddress = styled.input`
  margin: 10px 0 0 0;
  padding: 0 10px;
  width: 400px;
  outline: none;
  height: 31px;
  color: #333333;
  border: 1px solid #d6d6d6;
`;
const InputSubAddress = styled.input`
  margin: 10px 0 0 5px;
  padding: 0 10px;
  width: 250px;
  outline: none;
  height: 31px;
  color: #333333;
  border: 1px solid #d6d6d6;
`;
const PostCodeBtn = styled.button`
  margin: 0 0 0 5px;
  padding: 6.5px 10px 6.5px 10px;
  border: 1px solid #989898;
  font-size: 12px;
  line-height: 1.5;
  color: #333;
  background-color: transparent;
  cursor: pointer;
`;
const TotalPrice = styled.strong`
  font-size: 18px;
  font-weight: 600;
  color: #333333;
`;
const PaymentFinal = styled.div`
  margin: 30px 0 0 0;
  padding: 0;
`;
const PaymentFinalTotal = styled.div`
  padding: 13px 46px 20px 0;
  border: 2px solid #d6d6d6;
  text-align: right;
`;
const FinalDl = styled.dl`
  display: inline-block;
  font-size: 0;
  list-style: none;
  margin: 0;
`;
const FinalDt = styled.dt`
  display: inline-block;
  padding: 0 15px 0 0;
  font-size: 14px;
  font-weight: bold;
`;
const FinalDd = styled.dd`
  display: inline-block;
  font-size: 30px;
  color: #000;
`;
const SpanFinal = styled.span`
  font-size: 30px;
  color: #000;
`;
const StrongFinal = styled.strong`
  font-weight: 600;
`;
const PaymentalCheck = styled.div`
  padding: 30px 0 20px 0;
  text-align: center;
`;
const P = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 12px;
`;
const FormElementFin = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  text-align: center;
`;
const Fem = styled.em`
  margin: 0 auto;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 12px;
`;
const BtnCenterBox = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
`;
const PayBtn = styled.button`
  display: inline-block;
  width: 300px;
  height: 61px;
  line-height: 59px;
  color: #fff;
  font-size: 20px;
  border: 1px solid #000;
  background: #000;
  text-align: center;
`;
const BtnEm = styled.em`
  font-weight: bold;
  font-style: normal;
  line-height: 59px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;

export default Order;
