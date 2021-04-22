import React, { useEffect, useState } from "react";
import "../shared/Product.css";
import styled from "styled-components";

import { useSelector } from "react-redux";
import axios from "axios";

import star from "../shared/icon_star_bg_new@3x.png";
import starFill from "../shared/icon_star_fill_new@3x.png";

const CommentContent = (props) => {
    const id = props.id;
    const title = props.title;

    const comments = props.comment;
    const stars = props.comment.star_rating;
    const date = props.comment.createdAt.substr(0, 10);

    const commentId = props.comment._id;

    const [open, setOpen] = useState(false);

    const clickHandler = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    const token = localStorage.getItem("log_token");
    const user_id = localStorage.getItem("id");

    if (!token) return null;
    if (!user_id) return null;

    const deleteComment = () => {
        const Id = {
            _id: commentId,
        };
        axios({
            method: "DELETE",
            url: `http://13.125.248.86/goods/${id}/comment`,
            headers: {
                authorization: `Bearer ${token}`,
                "Content-type": "application/json",
            },
            data: Id,
        })
            .then(function (response) {
                console.log(response);
                window.alert("후기가 삭제되었습니다");
                window.replace("/");
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    return (
        <Tbody>
            <Tr>
                <Td>
                    <Star>
                        <StarFill stars={stars}>별</StarFill>
                    </Star>
                </Td>
                <TdTitle onClick={clickHandler}>{comments.title}</TdTitle>
                <Td>{comments.user.id}</Td>
                <Td>{date}</Td>
            </Tr>
            <tr className={open === true ? "open" : "close"} open>
                <td colSpan="4">
                    <div>
                        {comments.content} <br /> <br />
                        {comments.user.id === user_id ? (
                            <Button
                                onClick={() =>
                                    window.open(
                                        `${id}/comment/${commentId}`,
                                        `window_name`,
                                        "width=420,height=600,location=(50,50),status=no,scrollbars=yes"
                                    )
                                }
                            >
                                수정
                            </Button>
                        ) : null}
                        &nbsp;&nbsp;&nbsp;
                        {comments.user.id === user_id ? (
                            <Button onClick={deleteComment}>삭제</Button>
                        ) : null}
                    </div>
                </td>
            </tr>
        </Tbody>
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
    width: ${(props) =>
        props.stars === 5
            ? "100%;"
            : props.stars === 4
            ? "80%;"
            : props.stars === 3
            ? "60%;"
            : props.stars === 2
            ? "40%;"
            : props.stars === 1
            ? "20%;"
            : null};
    -webkit-background-size: 88px 15px;
    background-size: 88px 15px;
`;

const Button = styled.button`
    width: 36px;
    height: 24px;
    border: 1px solid #999;
    cursor: pointer;
    & {
        font-size: 12px;
    }
`;

export default CommentContent;
