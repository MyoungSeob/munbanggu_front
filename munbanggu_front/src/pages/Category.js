import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";

import styled from "styled-components";
import Card from "../components/Card";

const Category = (props) => {
    const category = props.match.params.id; //카테고리를 넘겨 받습니다

    //스토어에 있는 리스트를 가져옵니다
    const dispatch = useDispatch();
    const living_list = useSelector((store) => store.product.living);
    const stat_list = useSelector((store) => store.product.stat);

    useEffect(() => {
        dispatch(productActions.getProductDB());
    }, []);

    return (
        <ListBody>
            <Sort>
                <div>총 {category === "문구" ? stat_list.length : living_list.length}개</div>
                <div></div>
            </Sort>
            <ItemList>
                {category === "문구"
                    ? stat_list.map((p) => <Card {...p} key={p.id} />)
                    : living_list.map((p) => <Card {...p} key={p.id} />)}
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
    margin: 12px 0;
    width: 100%;
`;

const Sort = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 10px;
    > * {
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
