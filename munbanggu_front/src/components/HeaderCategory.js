import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";

import "../shared/App.css";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const HeaderCategory = (props) => {
    const dispatch = useDispatch();

    const living_list = useSelector((store) => store.product.living);
    const stat_list = useSelector((store) => store.product.stat);

    const living = () => {
        dispatch(productActions.getLivingProductDB(living_list));
    };

    const stat = () => {
        dispatch(productActions.getStatProductDB(stat_list));
    };

    useEffect(() => {
        dispatch(productActions.getProductDB());
    }, [dispatch]);

    return (
        <React.Fragment>
            <Headergnb>
                <Gnb>
                    <Menubox>
                        <ULNavLinkst>
                            <NavLink exact to="/" activeClassName="is_active">
                                <Category>전체</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/문구/"
                                activeClassName="is_active"
                                onClick={stat}
                            >
                                <Category>문구</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/리빙/"
                                activeClassName="is_active"
                                onClick={living}
                            >
                                <Category>리빙</Category>
                            </NavLink>
                            <NavLink exact to="/goods/category/책/" activeClassName="is_active">
                                <Category>책</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/을지로에디션/"
                                activeClassName="is_active"
                            >
                                <Category>을지로에디션</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/ㅋㅋ에디션/"
                                activeClassName="is_active"
                            >
                                <Category>ㅋㅋ에디션</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/배달이친구들/"
                                activeClassName="is_active"
                            >
                                <Category>배달이친구들</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/선물세트/"
                                activeClassName="is_active"
                            >
                                <Category>선물세트</Category>
                            </NavLink>
                            <NavLink
                                exact
                                to="/goods/category/콜라보레이션/"
                                activeClassName="is_active"
                            >
                                <Category>콜라보레이션</Category>
                            </NavLink>
                        </ULNavLinkst>
                    </Menubox>
                </Gnb>
            </Headergnb>
        </React.Fragment>
    );
};

const Headergnb = styled.div`
    background: #fff;
    border-bottom: 1px solid #efefef;
    margin: 0 auto;
`;

const Gnb = styled.div`
    text-align: center;
    width: 100%;
`;

const Menubox = styled.div`
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    margin: auto;
    padding: 0 12px;
    align-items: center;
`;

const ULNavLinkst = styled.div`
    display: flex;
    overflow: visible;
    height: 45px;
    font-size: 0;
    vertical-align: top;
    margin-top: 16px;
`;

const Category = styled.span`
    text-decoration: none;
    display: inline-block;
    padding: 0 19px;
    font-size: 16px;
    height: 55px;
    color: #333;
`;

export default HeaderCategory;
