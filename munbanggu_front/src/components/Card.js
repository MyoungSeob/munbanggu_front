import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { history } from "../redux/configStore";
import { Link } from "react-router-dom";

import saleBadge from "../shared/Image/SaleBadge.png";

const Card = (props) => {
    return (
        <>
            {props.discount === true ? (
                <a href={"/goods/" + props._id} key={props._id}>
                    <Item key={props._id}>
                        <ItemInner>
                            <img src={props.thumbnail_url} alt="detail" width="280px"></img>
                            <ItemInfo>
                                <SaleBadge>
                                    <img src={saleBadge} alt="sale" />
                                </SaleBadge>
                                <Sale>10%</Sale>
                                <ItemA>{props.title}</ItemA>
                                <PrePrice>15,000원</PrePrice>
                                <ItemPriceInfo>{props.sale_price}</ItemPriceInfo>
                            </ItemInfo>
                        </ItemInner>
                    </Item>
                </a>
            ) : (
                <a href={"/goods/" + props._id} key={props._id}>
                    <Item>
                        <ItemInner>
                            <img src={props.thumbnail_url} alt="detail" width="280px"></img>
                            <ItemInfo>
                                <ItemA>{props.title}</ItemA>
                                <ItemPriceInfo>{props.sale_price}</ItemPriceInfo>
                            </ItemInfo>
                        </ItemInner>
                    </Item>
                </a>
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
    margin-top: -8px;
`;

const PrePrice = styled.span`
    color: #888;
    text-decoration: line-through;
    font-size: 12px;
    margin-bottom: -5px;
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
