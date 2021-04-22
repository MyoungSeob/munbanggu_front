import React from "react";
import styled from "styled-components";


const LatelyodContent = (props) => {
  
 

  

  return (
    <React.Fragment>
      <Wrap>
      <Tbody>
        <Tr>
          
          <Tdleft>
            <PickAddCont>
            <OrderGoodsNum>
              <Strong>구매날짜:{props.date}</Strong>
              
            </OrderGoodsNum>
              <SpanImg>
                <AproductImg>
                  <Img width="80" src={props.url} />
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
              
            </OrderGoodsNum>
          </Td>
          
       
          <Td>
            <StrongPrice>{props.price}원</StrongPrice>
          </Td>
     
        </Tr>
      </Tbody>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  position:relative;
  left: 100px;
`;


const Tr = styled.tr`
  display: table-row;
  vertical-align: middle;
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
  width: 8px;
  padding: 0 10px 0 0;
  vertical-align: top;
`;
const AproductImg = styled.a``;
const Img = styled.img`
  border: 1px solid #dbdbdb;
  vertical-align: middle;
  margin: 0px 15px 0px 10px;
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
  width:100px;
`;
const OrderGoodsNum = styled.div`
  width: 100%;
`;
const Strong = styled.strong`
  display: block;
  width: 150px;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  margin-right: 20px;
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


export default LatelyodContent;
