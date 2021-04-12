import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";

import detail from "../shared/detail.jpeg";
import saleBadge from "../shared/SaleBadge.png";

const Card = (props) => {
    const { is_sale } = props;

    return (
        <>
            {is_sale ? (
                <Item>
                    <ItemInner>
                        <ImageA href="/goods/:id">
                            <img src={detail} alt="detail" width="280px"></img>
                        </ImageA>
                        <ItemInfo>
                            <SaleBadge>
                                <img src={saleBadge} alt="sale" />
                            </SaleBadge>
                            <Sale>10%</Sale>
                            <ItemA>스웨거 배민 룸 스프레이 집중</ItemA>
                            <PrePrice>15,000원</PrePrice>
                            <ItemPriceInfo>17,000원</ItemPriceInfo>
                        </ItemInfo>
                    </ItemInner>
                </Item>
            ) : (
                <Item>
                    <ItemInner>
                        <ImageA href="/goods/:id">
                            <img src={detail} alt="detail" width="280px"></img>
                        </ImageA>
                        <ItemInfo>
                            <ItemA>스웨거 배민 룸 스프레이 집중</ItemA>
                            <ItemPriceInfo>17,000원</ItemPriceInfo>
                        </ItemInfo>
                    </ItemInner>
                </Item>
            )}
        </>
    );
};

const Item = styled.li`
    width: 25%;
    display: inline-block;
    position: relative;
    margin: 20px 0 20px 0;
    vertical-align: top;
    font-size: 12px;
`;

const ItemInner = styled.div`
    padding: 0 10px;
    color: #1c1c1c;
`;

const ItemInfo = styled.div`
    display: inline-block;
    width: 100%;
    padding: 8px 0 20px 0px;
    box-sizing: border-box;
`;

const ImageA = styled.a`
    display: block;
    height: 100%;
    cursor: pointer;
`;

const ItemA = styled.a`
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 15px;
    font-weight: normal;
    cursor: pointer;
    display: block;
`;

const ItemPriceInfo = styled.span`
    font-size: 16px;
    font-weight: 800;
    padding: 1px;
    display: block;
    font-family: "Montserrat";
    margin-left: 1px;
`;

const Sale = styled.span`
    display: block;
    font-size: 20px;
    font-family: "Montserrat";
    color: #ff6350;
    font-weight: 800;
`;

const PrePrice = styled.span`
    color: #888;
    text-decoration: line-through;
    font-size: 12px;
`;

const SaleBadge = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    left: 20px;
    top: 0px;
    margin: 5px 0 0 -3px;
`;

export default Card;
