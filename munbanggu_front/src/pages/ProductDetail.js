import React, { useState, useEffect } from "react";

import styled from "styled-components";
import "../shared/Product.css";

import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";

import ProductDetailInfo from "./ProductDetailInfo";
import ProductButton from "../elements/ProductButton";

const ProductDetail = (props) => {
    const id = props.match.params.id; //상품 id

    const dispatch = useDispatch();

    //id로 해당 상품을 찾습니다
    const product_list = useSelector((store) => store.product.list);
    const idx = product_list.findIndex((p) => p._id === id);
    const data = product_list[idx];
    const [goodsCnt, setGoodsCnt] = useState(1);

    useEffect(() => {
        dispatch(productActions.getProductDB(id));
    }, []);

    if (!data) return null;

    //가격 증감
    const originPrice = data.sale_price;
    const price = (originPrice * goodsCnt).toLocaleString("en");
    const price_ = originPrice * goodsCnt;
    const CntUp = () => {
        setGoodsCnt(goodsCnt + 1);
    };
    const CntDwn = () => {
        if (goodsCnt > 1) {
            setGoodsCnt(goodsCnt - 1);
        }
    };

    //장바구니 담기 로컬에 저장합니다
    const addToCart = () => {
        let index = 0;
        let isSame = false;
        const goods = data._id;
        const name = data.title;
        const amount = goodsCnt;
        const url = data.thumbnail_url;
        const option = data.option;

        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                if (Number(index) < Number(localStorage.key(i))) {
                    index = localStorage.key(i);
                    var cartItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    if (
                        JSON.stringify(cartItem.goods) === JSON.stringify(goods) &&
                        JSON.stringify(cartItem.name) === JSON.stringify(name)
                    ) {
                        isSame = true;
                        cartItem.amount = cartItem.amount + amount;
                        cartItem.url = url;
                        cartItem.price = cartItem.price + price_;
                        cartItem.option = option;
                        break;
                    }
                }
            }
        }
        if (isSame === true) {
            var cartInfo = {
                id: index,
                goods: data._id,
                url: data.thumbnail_url,
                amount: goodsCnt,
                option: data.option,
                name: data.title,
                price: price_,
            };
        } else {
            index = Number(index) + 1;
            var cartInfo = {
                id: index,
                goods: data._id,
                url: data.thumbnail_url,
                amount: goodsCnt,
                option: data.option,
                name: data.title,
                price: price_,
            };
        }
        localStorage.setItem(index, JSON.stringify(cartInfo));
        window.alert("장바구니에 담겼습니다!");
        window.location.replace("/cart");
    };

    return (
        <>
            <Wrap>
                <Body>
                    <ImageBody>
                        <img src={data.thumbnail_url} alt="product" width="473px" height="100%" />
                    </ImageBody>
                    <InfoBody>
                        <div>
                            <ProductName>{data.title}</ProductName>
                            <ProductInfo>
                                <Dl>
                                    <Dt>판매가격</Dt>
                                    <DdPrice>{originPrice}원</DdPrice>
                                </Dl>
                                <Dl>
                                    <Dt>배송정보</Dt>
                                    <DdShipping>
                                        <span>2,500원 (3만원 이상 구매시 무료)</span>
                                        <span>오후 2시 당일배송마감</span>
                                    </DdShipping>
                                </Dl>
                            </ProductInfo>
                            <Tables>
                                <tbody>
                                    <tr>
                                        <Td>
                                            <Span>{data.option}</Span>
                                        </Td>
                                        <td>
                                            <input
                                                type="text"
                                                className="goodsCnt"
                                                value={goodsCnt}
                                            />
                                            <span>
                                                <button
                                                    type="button"
                                                    className="goodsCntUp"
                                                    onClick={CntUp}
                                                >
                                                    증가
                                                </button>
                                                <button
                                                    type="button"
                                                    className="goodsCntDwn"
                                                    onClick={CntDwn}
                                                >
                                                    감소
                                                </button>
                                            </span>
                                        </td>
                                        <TdPrice>{price}원</TdPrice>
                                    </tr>
                                </tbody>
                            </Tables>
                        </div>
                        <div>
                            <Total>
                                <DtTotal>총 합계 금액</DtTotal>
                                <DdTotal>{price}원</DdTotal>
                            </Total>
                            <ButtonDiv>
                                <ProductButton is_like></ProductButton>
                                <ProductButton is_white _onClick={addToCart}>
                                    장바구니
                                </ProductButton>
                                <ProductButton>바로 구매</ProductButton>
                            </ButtonDiv>
                        </div>
                    </InfoBody>
                </Body>
            </Wrap>
            <ProductDetailInfo data={data} />
        </>
    );
};

const Wrap = styled.div`
    max-width: 1100px;
    margin: 40px auto;
    padding: 0 40px;
`;

const Body = styled.div`
    display: flex;
    width: 100%;
`;

const ImageBody = styled.div`
    float: left;
    width: 560px;
`;

const InfoBody = styled.div`
    width: 540px;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    justify-content: space-between;
`;

const ProductName = styled.h3`
    font-weight: 700;
    font-size: 30px;
    color: #333;
    margin: 0 0 25px 0;
`;

const ProductInfo = styled.div`
    margin: 10px 0 20px 0;
    height: 40%;
    padding-bottom: 10px;
`;

const Dl = styled.dl`
    float: left;
    width: 100%;
    min-height: 24px;
    padding: 8px 0 8px 0;
    margin: 0;
`;

const Dt = styled.dt`
    float: left;
    margin: 0 30px 0 5px;
    color: #888888;
    font-size: 16px;
    color: #717171;
    font-weight: 500;
    word-wrap: break-word;
`;

const DdPrice = styled.dd`
    margin: -2px 0 0 0;
    font-size: 21px;
    font-weight: 800;
    font-family: "Montserrat";
    vertical-align: middle;
`;

const DdShipping = styled.dd`
    margin: 0;
    float: left;
    width: 400px;
    font-size: 16px;
    color: #333;
    font-weight: 500;
`;

const Tables = styled.table`
    width: 100%;
    background-color: #efefef;
    border-collapse: separate;
    text-indent: initial;
    border-spacing: 2px;
    padding: 2px 30px 2px 20px;

    & > tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    & > tbodt > tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
`;

const Td = styled.td`
    text-align: left;
    width: 60%;
`;

// const TdOpt = styled.td`
//     // text-align: center;
//     // border: none;
//     // display: flex;
// `;

const TdPrice = styled.td`
    text-align: right;
    font-weight: 600;
    padding: 14px 0 14px 0;
`;

const Span = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const Total = styled.dl`
    margin: 15px 0 0 0;
    padding-top: 10px;
    border-top: 1px solid #dbdbdb;
    width: 100%;
    display: flex;
    justify-content: space-between;
    vertical-align: center;
`;

const DtTotal = styled.dt`
    float: left;
    width: 90px;
    margin: 12px 10px 0 0;
    color: #888888;
    font-size: 16px;
    color: #717171;
    font-weight: 500;
    word-wrap: break-word;
`;

const DdTotal = styled.dd`
    font-size: 36px;
    font-family: "montserrat";
    color: #29c1bc;
    font-weight: 700;
`;

const ButtonDiv = styled.div`
    display: flex;
    float: right;
    text-align: right;
    height: 52px;
    margin-top: 20px;
`;

// const OptContainer = styled.div`
//     width: 100%;
//     vertical-align: top;
//     text-align: left;
//     position: relative;
//     display: inline-block;
//     font-size: 13px;
// `;

// const OptSingle = styled.a`
//     position: relative;
//     width: 100%;
//     display: block;
//     overflow: hidden;
//     padding: 0 0 0 8px;
//     height: 31px;
//     border: 1px solid #ccc;
//     border-radius: 0px;
//     background-color: #fff;
//     color: #444;
//     font-weight: 400;
//     text-decoration: none;
//     white-space: nowrap;
//     vertical-align: top;
//     line-height: 30px;
//     cursor: pointer;
// `;

// const BDiv = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     display: block;
//     width: 18px;
//     height: 100%;
// `;

// const B = styled.b`
//     background-image: {chosen-sprite@2x.png} !important;
//     background-size: 52px 37px !important;
//     background-repeat: no-repeat !important;
//     display: block;
//     width: 100%;
//     height: 100%;
// `;

export default ProductDetail;
