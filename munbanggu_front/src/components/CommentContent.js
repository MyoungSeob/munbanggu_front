import React, { useEffect, useState } from "react";
import "../shared/Product.css";
import styled from "styled-components";

import star from "../shared/icon_star_bg_new@3x.png";
import starFill from "../shared/icon_star_fill_new@3x.png";

import axios from "axios";

const CommentContent = (props) => {
    const { rating, title, user, date } = props;
    const id = props.id;

    const [comment, setComment] = useState();
    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    return (
        <>
            <Tbody>
                <Tr>
                    <Td>
                        <Star>
                            <StarFill>별</StarFill>
                        </Star>
                    </Td>
                    <TdTitle onClick={clickHandler}>제목</TdTitle>
                    <Td>작성자</Td>
                    <Td>작성일</Td>
                </Tr>
                <tr className={open === true ? "open" : "close"} open>
                    <td colSpan="4">
                        <div>
                            하루만에 뒷꿈치 장식이 떨어져서 후기에만 그냥 남겼는데 하나더
                            배송해주시는 배민만의 서비스에 감동받았습니다
                        </div>
                    </td>
                </tr>
            </Tbody>
        </>
    );
};

const Tbody = styled.tbody`
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
`;

const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;
    font-weight: 500;
`;

const Td = styled.td`
    padding: 13px 10px 15px 18px;
    vertical-align: middle;
    font-size: 12px;
    width: 120px;
`;

const TdTitle = styled.td`
    padding: 13px 300px 15px 38px;
    text-align: left;
    vertical-align: middle;
    font-size: 12px;
    cursor: pointer;
    ${(open) => (open === true ? `font-weight : 600;` : "")}
`;

const Star = styled.span`
    display: inline-block;
    width: 88px;
    height: 15px;
    background: url(${star}) no-repeat left top;
    background-size: 88px 15px;
    vertical-align: middle;
    text-indent: -9999px;
`;

const StarFill = styled.span`
    display: block;
    background: url(${starFill}) no-repeat left top;
    width: 60%;
    -webkit-background-size: 88px 15px;
    background-size: 88px 15px;
`;

export default CommentContent;
