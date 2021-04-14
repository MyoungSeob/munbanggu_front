import React, { useState } from "react";

import styled from "styled-components";
import "../shared/Product.css";

import product from "../shared/detail.jpeg";
import info from "../shared/detail3.jpeg";

import ProductButton from "../elements/ProductButton";
import GoodsTab from "../components/GoodsTab";
import ProductDetail from "./ProductDetail";

const ProductDetailInfo = (props) => {
    const detailInfo = props.data;
    const image = detailInfo.detail_image_url[0];
    console.log(detailInfo.comment_count);

    return (
        <Body>
            <GoodsTab is_info review_cnt={detailInfo.comment_count} />
            <InfoImg>
                <img src={image} alt="product detail" />
            </InfoImg>
            <InfoTable>
                <h3>상품필수 정보</h3>
                <tbody>
                    {detailInfo.detail_info.map((info) => (
                        <tr>
                            <ProductTh>{info[0]}</ProductTh>
                            <ProductTd colspan="3">{info[1]}</ProductTd>
                        </tr>
                    ))}
                </tbody>
            </InfoTable>
            <GoodsTab is_shipping review_cnt={detailInfo.comment_count} />
            <div>
                <h3>배송안내</h3>
                <Span>
                    · 배송사 : CJ대한통운 <br />· 배송비 : 2,500원 (3만원 이상 구매 시 무료배송)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;도서,
                    산간 일부지역은 배송비가 추가될 수 있습니다.&nbsp; <br />· 배송기간: 오후 2시
                    이전 결제완료시 당일 출고 (영업일 기준)
                    <br />
                    <br />
                    &nbsp; 단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수
                    있는 점 양해 부탁드립니다.
                </Span>
            </div>
            <GoodsTab is_refund review_cnt={detailInfo.comment_count} />
            <div>
                <h3>교환 및 반품안내</h3>
                <Span>
                    · 주문 취소 및 배송지 변경은 “결제완료” 단계에서만 가능합니다. <br />{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;- 마이페이지에서 취소 또는 변경하실 수 있습니다. <br />·
                    "상품준비중" 단계에서는 주문 취소 및 배송지 변경이 불가합니다.
                    <br />
                    <br /> · 교환 및 반품은 배송완료 후 7일 이내에 가능합니다.
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 단, 재화 등의 내용이 표시, 광고 내용과 다르거나
                    계약내용을 다르게 이행한 경우에는 재화 등을 공급받은 날로부터 3개월 이내, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그 사실을 안 날 또는 알 수 있었던 날로부터
                    30일 이내에 교환 및 반품이 가능합니다.
                    <br />
                    <br /> · 다음의 경우 교환 및 반품이 불가합니다.
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 구매자에게 책임 있는 사유로 재화 등이 멸실 또는
                    훼손된 경우 <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- 구매자의 사용 또는 일부 소비에 의해 재화 등의 가치가
                    현저히 감소한 경우 <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- 복제가 가능한 재화 등의 포장을 훼손한
                    경우(CD/DVD/GAME/도서의 경우 포장 개봉 시)
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;- 시간 경과에 의하여 재판매가 곤란할 정도로
                    상품의 가치가 현저히 감소한 경우 <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;- 고객의 주문에 따라 개별 생산되는 상품의 경우 <br />
                    <br />· 상품의 불량/하자 및 표시광고 및 계약 내용이 다른 경우 해당 상품의 회수
                    비용은 무료입니다. <br />· 고객님의 단순변심에 의한 교환/반품일 경우에는
                    교환/반품 배송비(왕복 배송비) 5,000원을 고객님께서 부담하셔야 합니다. <br />
                    <br />· 반송지 : 우)10846 경기 파주시 탄현면 축현리 241-4 배민문방구 물류센터
                </Span>
                <h3>환불안내</h3>
                <Span>
                    · 주문취소 및 반품 시 환불은 주문 시 이용하신 결제수단으로 2~7 영업일 이내
                    환불됩니다.
                </Span>
                <br />
                <br />
                <br />
                <h3>AS안내</h3>
                <Span>
                    · 제품에 문제가 있으신 경우, 배민문방구 고객센터로 접수해주시면 안내
                    도와드리겠습니다. <br />· 배민문방구에서 발생한 문제는 소비자분쟁해결
                    기준(공정거래위원회 고시)에 따라 피해를 보상받을 수 있습니다.
                </Span>
            </div>
            <GoodsTab is_reviews review_cnt={detailInfo.comment_count} />
            <Flex>
                <h3>상품후기</h3>
                <AReview>상품후기 글쓰기</AReview>
            </Flex>
            <Table>
                {/* <colgroup>
                    <col width="13%" />
                    <col />
                    <col width="13%" />
                    <col width="13%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>평점</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <Td colspan="4">등록된 상품후기가 없습니다.</Td>
                    </tr>
                </tbody>
            </Table>
            <GoodsTab review_cnt={detailInfo.comment_count} />
            <Flex>
                <h3>상품문의</h3>
                <AReview>상품문의 글쓰기</AReview>
            </Flex>
            <Table>
                {/* <colgroup>
                    <col width="13%" />
                    <col />
                    <col width="13%" />
                    <col width="13%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>평점</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead> */}
                <tbody>
                    <tr>
                        <Td colspan="4">등록된 상품문의가 없습니다.</Td>
                    </tr>
                </tbody>
            </Table>
        </Body>
    );
};

const Body = styled.div`
    width: 1100px;
    margin: 0 auto 100px auto;
`;

const InfoImg = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`;

const InfoTable = styled.table`
    width: 870px;
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 120px;
`;

const ProductTh = styled.th`
    padding: 10px 10px 10px 14px;
    border: 1px solid #dbdbdb;
    background: #f9f9f9;
    text-align: left;
    width: 20%;
    height: 31px;
    font-size: 12px;
    font-weight: 600;
    color: #555;
`;

const ProductTd = styled.td`
    padding: 10px 10px 10px 18px;
    border: 1px solid #dbdbdb;
    text-align: left;
    width: 80%;
    height: 31px;
    font-size: 12px;
    font-weight: 400;
    color: #777;
`;

const Span = styled.span`
    font-size: 9pt;
    color: #333;
    font-weight: 500;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const AReview = styled.a`
    display: inline-block;
    min-width: 120px;
    padding: 10px 10px 10px 10px;
    color: #ffffff;
    font-weight: bold;
    border: 1px solid #000;
    background: #000;
    text-align: center;
    position: absolute;
    top: 44px;
    right: 0;
`;

const Table = styled.table`
    width: 100%;
    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
    border-top: 1px solid #999999;
    text-align: center;
    background: #fff;
`;

const Td = styled.td`
    padding: 30px 30px 30px 30px;
    text-align: center;
    border-bottom: 1px solid #dbdbdb;
    font-size: 12px;
`;
export default ProductDetailInfo;
