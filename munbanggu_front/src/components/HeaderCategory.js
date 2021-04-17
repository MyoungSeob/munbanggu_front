import React from "react";
import "../shared/App.css";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const HeaderCategory = (props) => {
    return (
        <React.Fragment>
            <Headergnb>
                <Gnb>
                    <Menubox>
                        <ULNavLinkst>
                            <NavLink exact to="/" activeClassName="is_active">
                                <Category>전체</Category>
                            </NavLink>
                            <NavLink exact to="/goods/category/문구/" activeClassName="is_active">
                                <Category>문구</Category>
                            </NavLink>
                            <NavLink exact to="/goods/category/리빙/" activeClassName="is_active">
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
`;

const Gnb = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
    left: 140px;
`;

const Menubox = styled.div`
    width: 1130px;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: auto;
    padding: 0 12px;
    align-items: center;
    text-align: center;
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
