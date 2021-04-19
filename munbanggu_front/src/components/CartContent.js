import React from 'react';
import styled from 'styled-components';

const CartContent =(props)=>{

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
                  <AmountModal>
                    <SpanAmount>옵션/수량변경</SpanAmount>
                  </AmountModal>
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
}
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
  margin : auto;
`;
const BtnGrayList = styled.div`
  margin: 5px 0 0 0;
  display: inline-block;
`;
const AmountModal = styled.a`
  font-size: 11px;
  display: block;
  border : 1px solid #dbdbdb;
  padding : 3px 10px;
  color : #333;
`;
const SpanAmount = styled.span`
    line-height : 22px;
    display : inline-block;
    font-size : 11px;
`;
const StrongPrice = styled.strong`
    font-size : 13px;
    color : #333333;
    font-weight : 600px;
`
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
  font-size : 12px;
`;

export default CartContent;