import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../elements/Input";
import headerlogo from "../shared/header_logo.png";
import search_icon from "../shared/searchicon.png";
import { history } from "../redux/configStore";

const HeaderLogo = (props) => {
    const [text, setText] = useState("");

    const search = () => {
        if (text === "") {
            window.alert("검색어을 입력해주세요");
            return;
        }
        history.replace(`/goods/search/${text}`);
    };

    return (
        <React.Fragment>
            <Container>
                <LogoBox>
                    <ImgBox
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        <Img src={headerlogo} />
                    </ImgBox>
                </LogoBox>
                <InputBox>
                    <Search>
                        <TopSearch>
                            <ul></ul>
                        </TopSearch>
                        <TopCont>
                            <Input
                                is_submit
                                type="text"
                                placeholder="검색어를 입력해주세요."
                                value={text}
                                _onChange={(e) => {
                                    setText(e.target.value);
                                }}
                                onSubmit={search}
                            ></Input>
                            <SearchButton>
                                <BtnImg src={search_icon} />
                            </SearchButton>
                        </TopCont>
                    </Search>
                </InputBox>
            </Container>
        </React.Fragment>
    );
};
const Container = styled.div`
    min-height: 103px;
    position: relative;
    width: 1200px;
    margin: 0 auto;
`;
const LogoBox = styled.div`
    text-align: center;
    width: 33.3%;
    margin: 0 auto;
    line-height: 103px;
`;
const ImgBox = styled.a`
    width: 156px;
    display: block;
    margin: 0 auto;
    color: #333;
    text-decoration: none;
`;
const Img = styled.img`
    vertical-align: middle;
    width: 100%;
    border: 0 none;
`;
const InputBox = styled.div`
    position: absolute;
    right: 0;
    top: 15px;
    display: inline-block;
    width: 33.3%;
    z-index: 97;
    text-align: right;
`;
const Search = styled.div`
    position: relative;
    width: 250px;
    display: inline-block;
`;
const TopSearch = styled.div`
    display: inline-block;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;
`;
const TopCont = styled.div`
    width: 100%;
    background: #ffffff;
    position: relative;
    border: none 0;
`;

const SearchButton = styled.button`
    position: absolute;
    top: 0px;
    right: -25px;
    height: 34px;
    width: 34px;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
`;
const BtnImg = styled.img`
    height: 34px;
    width: 34px;
    background-color: transparent;
`;
export default HeaderLogo;
