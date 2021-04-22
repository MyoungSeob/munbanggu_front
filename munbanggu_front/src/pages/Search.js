import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";

const Search = (props) => {
    const id = props.match.params.id;

    const [api, setApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async (param) => {
            try {
                setError(null);
                setApi(null);
                setLoading(true);
                const response = await axios.get(
                    "http://13.125.248.86/goods/goods_search?keyword=" + id
                );
                setApi(response.data.result.goods);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, [id]);
    console.log(api);

    if (!api || api.length === 0)
        return (
            <div>
                <ListBody>
                    <Sort>
                        <Bold>"{id}" 검색결과 0개</Bold>
                        <div>
                            <SortId>추천순</SortId>
                            <SortId>인기순</SortId>
                            <SortId>최신순</SortId>
                            <SortId>낮은 가격순</SortId>
                            <SortId>높은 가격순</SortId>
                        </div>
                    </Sort>
                    <NoItemList>상품이 존재하지 않습니다</NoItemList>
                </ListBody>
            </div>
        );

    return (
        <div>
            <ListBody>
                <Sort>
                    <Bold>
                        "{id}" 검색결과 {api.length}개
                    </Bold>
                    <div>
                        <SortId>추천순</SortId>
                        <SortId>인기순</SortId>
                        <SortId>최신순</SortId>
                        <SortId>낮은 가격순</SortId>
                        <SortId>높은 가격순</SortId>
                    </div>
                </Sort>
                <ItemList>
                    {api.map((p) => {
                        return <Card {...p} key={p.id} />;
                    })}
                </ItemList>
            </ListBody>
        </div>
    );
};

const Bold = styled.span`
    font-size: 16px;
    font-weight: 700;
`;

const ListBody = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
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

const ItemList = styled.ul`
    float: left;
    padding: 0;
    margin: 0;
    width: 100%;
`;

const NoItemList = styled.ul`
    margin-bottom: 360px;
    text-align: center;
    width: 100%;
`;

export default Search;
