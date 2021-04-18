import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";

import styled from "styled-components";
import Card from "../components/Card";

const Sort = (props) => {
    const category = props.match.params.id;
    const dispatch = useDispatch();
    const product_list = useSelector((store) => store.product.list);
    console.log(product_list);

    useEffect(() => {
        dispatch(productActions.getProductDB());
    }, [dispatch]);

    return (
        <ListBody>
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
    padding: 0;
`;

const ItemList = styled.ul`
    float: left;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export default Sort;
