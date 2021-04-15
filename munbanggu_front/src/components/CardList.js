import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";

import styled from "styled-components";
import Card from "./Card";

const CardList = (props) => {
    const dispatch = useDispatch();
    const product_list = useSelector((store) => store.product.list);

    useEffect(() => {
        dispatch(productActions.getProductDB());
    }, [dispatch]);

    return (
        <ListBody>
            <ItemList>
                {product_list.map((p) => {
                    return <Card {...p} key={p.id} />;
                })}
            </ItemList>
            ;
        </ListBody>
    );
};

const ListBody = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
`;

const ItemList = styled.ul`
    float: left;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export default CardList;
