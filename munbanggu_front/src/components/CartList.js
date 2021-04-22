import React from "react";
import styled from "styled-components";
import beer from "../shared/beer.jpeg";
import CartContent from "./CartContent";
const CartList = (props) => {
  const cart_list = [];
  for (let i = 1; i < localStorage.length-1; i++) {
    cart_list.push(JSON.parse(localStorage.getItem(i)));
  }


  return (
    <React.Fragment>
      <CartContList>
        <OrderCartList />
        <OrderTableType>
          <Table>
            <Thead>
              <Tr>
                <Th>
                  <FormElement>
                    <CheckBox checked={true} type="checkbox" />
                    <Label></Label>
                  </FormElement>
                </Th>
                <ThProduct>상품/옵션 정보</ThProduct>
                <ThAmount>수량</ThAmount>
                <ThPrice>상품금액</ThPrice>
                <ThDelivery>배송비</ThDelivery>
              </Tr>
            </Thead>
            {cart_list.map((p) => {
              return <CartContent key={p.id} {...p} />;
            })}
          </Table>
        </OrderTableType>
      </CartContList>
    </React.Fragment>
  );
};
const CartContList = styled.div`
  margin: 50px 0 10px 0;
`;
const OrderCartList = styled.div`
  padding: 0 0 10px 0;
  font-size: 16px;
`;
const OrderTableType = styled.div`
  position: relative;
`;
const Table = styled.table`
  width: 100%;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
  text-align: center;
  display: table;
`;
const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;
const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;
const ThProduct = styled.th`
  padding: 9px 10px 10px 10px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #dbdbdb;
  background: #f7f7f7;
  font-size: 12px;
  width: 802px;
`;
const ThAmount = styled.th`
  padding: 9px 10px 10px 10px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #dbdbdb;
  background: #f7f7f7;
  font-size: 12px;
  max-width: 10px;
`;
const ThPrice = styled.th`
  padding: 9px 10px 10px 10px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #dbdbdb;
  background: #f7f7f7;
  font-size: 12px;
  max-width: 10px;
`;
const ThDelivery = styled.th`
  padding: 9px 10px 10px 10px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #dbdbdb;
  background: #f7f7f7;
  font-size: 12px;
  max-width: 10px;
`;
const Th = styled.th`
  padding: 9px 10px 10px 10px;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #dbdbdb;
  background: #f7f7f7;
  font-size: 12px;
  width: 38px;
`;
const FormElement = styled.div`
  height: 18px;
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
  position: relative;
  width: 38px;
`;
const CheckBox = styled.input`
  padding: 0 0 0 5px;
`;
const Label = styled.label``;
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
  padding: 0px 12px 0 0;
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
export default CartList;
