import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const CartContent = (props) => {
  const Price = props.price
  const amount =props.amount
  const originPrice = Price/(amount)
  
  // const totalPrice = amount*Price
  const [num, setNum] = React.useState(0);
  console.log(typeof(Price))
  const amountUp =()=>{
    setNum(1 + num);
  }
  const amountDown=()=>{
    if(num+amount > 1){
      setNum(num - 1)
    }
  }
  const optionChange=()=>{
    const changeInfo = {
      id : props.id,
      goods : props.goods,
      url : props.url,
      amount : num+amount,
      option : props.option,
      name : props.name,
      price : Price+(originPrice*num),
      
    }
    localStorage.setItem(`${props.id}`, JSON.stringify(changeInfo))
    window.location.reload()
  }
  console.log(originPrice)
  


  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "fixed",
      width: "623px",
      backgroundColor: "#ffffff",
      border: "2px solid #555555",
      margin: "0px",
      top: "0;",
      left: "0;",
      padding: "20px",
      overflowY: "auto",
    },
  }));

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <ModalTitle>옵션선택</ModalTitle>
      <ModalLayerScroll>
        <OptionTitBox>
          <Modaldl>
            <Modaldt>
              <ModalImg src={props.url} />
            </Modaldt>
            <Modaldd>
              <ModalStrong>{props.name}</ModalStrong>
              <DeliveryDl>
                <Optiondt>배송비</Optiondt>
                <Optiondd>
                  <OptionStrong>2,500원</OptionStrong>
                  <Modalp>
                    배송비는 2,500원이며, 총 주문금액 30,000원 이상부터
                    무료입니다.
                  </Modalp>
                  <Delivery>택배</Delivery>
                </Optiondd>
              </DeliveryDl>
            </Modaldd>
          </Modaldl>
        </OptionTitBox>
        <OptionSelectBox>
          <ItemChooseList>
            <ItemTable>
              <colgroup>
                <col width="380px"></col>
                <col></col>
                <col width="80px"></col>
                <col width="40px"></col>
              </colgroup>
              <ItemTbody>
                <ItemTr>
                  <ItemTd>
                    <CartTitBox>
                      <ModalStrong>{props.name}</ModalStrong>
                    </CartTitBox>
                  </ItemTd>
                  <BoxTd>
                    <CountSpan>
                      <GoodsQty>
                        <GoodsInput value={num+amount} />
                        <BtnSpan>
                          <Upbutton onClick={amountUp}/>
                          <Dbutton onClick={amountDown}/>
                        </BtnSpan>
                      </GoodsQty>
                    </CountSpan>
                  </BoxTd>
                  <PriceBox>
                    <PriceStrong>{Price+originPrice*(num)}원</PriceStrong>
                  </PriceBox>
                </ItemTr>
              </ItemTbody>
            </ItemTable>
          </ItemChooseList>
        </OptionSelectBox>
      </ModalLayerScroll>
      <BtnBox>
        <CancelBtn onClick={handleClose}>취소</CancelBtn>
        <CheckBtn onClick={optionChange}>확인</CheckBtn>
      </BtnBox>
    </div>
  );

  return (
    <React.Fragment>
      <Tbody>
        <Tr>
          <Td>
            <CheckBox type="checkbox" />
          </Td>
          <Tdleft>
            <PickAddCont>
              <SpanImg>
                <AproductImg>
                  <Img width="40" src={props.url} />
                </AproductImg>
              </SpanImg>
              <PickAddInfo>
                <AproductName>
                  <EmName>{props.name}</EmName>
                </AproductName>
              </PickAddInfo>
            </PickAddCont>
          </Tdleft>
          <Td>
            <OrderGoodsNum>
              <Strong>{props.amount}개</Strong>
              <BtnGrayList>
                <AmountModal onClick={handleOpen}>
                  <SpanAmount>옵션/수량변경</SpanAmount>
                </AmountModal>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
              </BtnGrayList>
            </OrderGoodsNum>
          </Td>
          <Td>
            <StrongPrice>{props.price}원</StrongPrice>
          </Td>
          <TdDelivery>
            기본 배송비
            <br />
            0원
            <br />
            (택배-선결제)
          </TdDelivery>
        </Tr>
      </Tbody>
    </React.Fragment>
  );
};
const ModalTitle = styled.h4`
  padding: 0 0 15px 0;
  border-bottom: 1px solid #999999;
  font-size: 17px;
  font-weight: 600px;
  margin: 0;
`;
const ModalLayerScroll = styled.div`
  height: 386px;
  overflow-x: hidden;
  overflow-y: auto;
`;
const OptionTitBox = styled.div``;
const Modaldl = styled.dl`
  overflow: visible;
  list-style: none;
`;
const Modaldt = styled.dt`
  float: left;
  margin: 18px 0 0 20px;
`;
const ModalImg = styled.img`
  width: 70px;
  height: 70px;
  border: 1px solid #dbdbdb;
  vertical-align: top;
`;
const ModalStrong = styled.strong`
  display: block;
  font-size: 12px;
  font-weight: 600;
`;
const Modaldd = styled.dd`
  margin: 18px 0 0 133px;
  padding: 0 5px 13px 5px;
  border-bottom: 1px solid #dadada;
`;
const DeliveryDl = styled.dl`
  overflow: visible;
  list-style: none;
`;
const Optiondt = styled.dt`
  float: left;
  margin: 18px 0 0 20px;
  font-size: 12px;
`;
const Optiondd = styled.dd`
  margin: 18px 0 0 133px;
  padding: 0 5px 0 5px;
  border-bottom: 1px solid #dadada;
`;
const OptionStrong = styled.strong`
  display: block;
  font-size: 14px;
  padding: 0 5px 5px 0;
  font-weight: normal;
`;
const Modalp = styled.p`
  font-size: 10px;
  color: #dbdbdb;
`;
const Delivery = styled.div`
  display: inline-block;
  height: 30px;
  line-height: 30px;
  vertical-align: bottom;
  font-size: 12px;
`;
const OptionSelectBox = styled.div`
  margin: 0;
  padding: 0;
`;
const ItemChooseList = styled.div`
  margin: 30px 0 0 0;
  word-break: break-all;
  padding: 0;
`;
const ItemTable = styled.table`
  width: 99%;
  background: #f5f5f5;
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-color: grey;
`;
const ItemTbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;
const ItemTr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const ItemTd = styled.td`
  text-align: left;
  padding: 20px 0 20px 20px;
`;
const BoxTd = styled.td`
  border: none;
  padding: 12px;
  text-align: center;
`;
const CountSpan = styled.span`
  display: table-cell;
  vertical-align: middle;
  padding: 0 17px;
  text-align: center;
`;
const GoodsQty = styled.span`
  display: inline-block;
  vertical-align: middle;
`;
const GoodsInput = styled.input`
  float: left;
  padding: 0 5px;
  width: 43px;
  outline: none;
  height: 31px;
  border: 1px solid #ccc;
  color: #3f3f3f;
  font-size: 12px;
  line-height: 31px;
  text-align: center;
`;
const BtnSpan = styled.span`
  float: left;
  margin: 0 0 0 -1px;
`;
const Upbutton = styled.button`
  background: url("https://store.baemin.com/data/skin/front/udweb_C/img/common/btn/btn_count_up.png")
    no-repeat left top;
  display: block;
  width: 23px;
  height: 17px;
  text-indent: -9999px;
  vertical-align: middle;
  border: 0 none;
  cursor: pointer;
`;
const Dbutton = styled.button`
  margin: -1px 0 0;
  background: url("https://store.baemin.com/data/skin/front/udweb_C/img/common/btn/btn_count_down.png")
    no-repeat left top;
  display: block;
  width: 23px;
  height: 18px;
  text-indent: -9999px;
  border: 0 none;
  cursor: pointer;
  vertical-align: middle;
  padding: 0;
`;
const PriceBox = styled.td`
  font-size: 14px;
  text-align: right;
  border: none;
  padding: 12px 12px 12px 0;
`;
const PriceStrong = styled.strong`
  font-weight: 600;
  font-size: 14px;
  text-align: right;
`;
const BtnBox = styled.div`
  padding: 29px 0 0 0;
  border-top: 2px solid #dbdbdb;
  text-align: center;
`;
const CancelBtn = styled.button`
  padding: 1.5% 4.5%;
  border: 1px solid #cccccc;
  color: #3e3d3c;
  background: #ffffff;
  font-weight: bold;
  cursor : pointer;
`;
const CheckBtn = styled.button`
  padding: 1.5% 4.5%;
  margin: 0 0 0 5px;
  border: 1px solid #000;
  color: #ffffff;
  background: #000;
  font-weight: bold;
  cursor: pointer;
`;
    ;
const CartTitBox = styled.div``;



const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const CheckBox = styled.input`
  padding: 0 0 0 5px;
`;
const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: center;
`;
const Td = styled.td`
  vertical-align: middle;
  height: 31px;
  padding: 15px 10px 14px 10px;
  color: #777777;
  border-bottom: 1px solid #dbdbdb;
  background: #ffffff;
`;
const Tdleft = styled.td`
  text-align: left;
  height: 31px;
  padding: 15px 10px 14px 10px;
  color: #777777;
  border-bottom: 1px solid #dbdbdb;
  background: #ffffff;
`;
const PickAddCont = styled.div`
  display: table;
  position: relative;
  width: 100%;
`;
const SpanImg = styled.span`
  display: table-cell;
  width: 38px;
  padding: 0 10px 0 0;
  vertical-align: top;
`;
const AproductImg = styled.a``;
const Img = styled.img`
  border: 1px solid #dbdbdb;
  vertical-align: middle;
`;
const PickAddInfo = styled.div`
  display: table-cell;
  padding: 0;
  text-align: left;
  vertical-align: middle;
  word-break: break-all;
`;
const AproductName = styled.a`
  color: #333;
  text-decoration: none;
`;
const EmName = styled.em`
  display: block;
  color: #333333;
  font-weight: bold;
  font-style: normal;
  font-size: 12px;
`;
const OrderGoodsNum = styled.div`
  width: 100%;
`;
const Strong = styled.strong`
  display: block;
  width: 100px;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  margin: auto;
`;
const BtnGrayList = styled.div`
  margin: 5px 0 0 0;
  display: inline-block;
`;
const AmountModal = styled.a`
  font-size: 11px;
  display: block;
  border: 1px solid #dbdbdb;
  padding: 3px 10px;
  color: #333;
`;
const SpanAmount = styled.span`
  line-height: 22px;
  display: inline-block;
  font-size: 11px;
`;
const StrongPrice = styled.strong`
  font-size: 13px;
  color: #333333;
  font-weight: 600px;
`;
const TdBenefit = styled.td`
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  height: 31px;
  padding: 15px 10px 14px 10px;
  color: #777777;
  border-bottom: 1px solid #dbdbdb;
  background: #ffffff;
`;
const TdDelivery = styled.td`
  border-left: 1px solid #ebebeb;
  height: 31px;
  padding: 15px 10px 14px 10px;
  color: #777777;
  border-bottom: 1px solid #dbdbdb;
  background: #ffffff;
  font-size: 12px;
`;

export default CartContent;
