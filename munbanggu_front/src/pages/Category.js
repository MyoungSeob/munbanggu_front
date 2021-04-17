import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionsCreators as productActions } from "../redux/modules/product";

import styled from "styled-components";
import Card from "../components/Card";

const Category = (props) => {
    const category = props.match.params.id;
    const dispatch = useDispatch();
    const product_list = useSelector((store) => store.product.list);
    const productLowHigh = useSelector((store) => store.product.lowHigh);
    const productHighLow = useSelector((store) => store.product.highLow);

    const init = () => {
        dispatch(productActions.getProductDB());
    };

    const low = () => {
        dispatch(productActions.getProduct(productLowHigh));
    };

    const high = () => {
        dispatch(productActions.getProduct(productHighLow));
    };

    useEffect(() => {
        dispatch(productActions.getProductDB());
    }, [dispatch]);

    return (
        <ListBody>
            <Sort>
                <div>총 0개</div>
                <div>
                    <SortId onClick={init}>추천순</SortId>
                    <SortId>인기순</SortId>
                    <SortId>최신순</SortId>
                    <SortId onClick={low}>높은 가격순</SortId>
                    <SortId onClick={high}>낮은 가격순</SortId>
                </div>
            </Sort>
            <ItemList>
                {product_list.map((p) =>
                    category === p.category ? <Card {...p} key={p.id} /> : null
                )}
            </ItemList>
        </ListBody>
    );
};

const ListBody = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
`;

const ItemList = styled.ul`
    float: left;
    padding: 0;
    margin: 12px 0;
    width: 100%;
`;

const Sort = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 10px;
    $ > * {
        font-size: 14px;
    }
`;

const SortId = styled.button`
    margin-left: 19px;
    border: none;
    background-color: #fff;
    font-size: 14px;
    cursor: pointer;
`;

export default Category;
