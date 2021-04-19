import styled from "styled-components";
import "../shared/App.css";

import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Comment = (props) => {
    const id = props.match.params.id;
    const token = localStorage.getItem("log_token");

    const [goods, setGoods] = useState("");
    const [rating, setRating] = useState(5);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const createdAt = moment().format("YYYY.MM.DDTHH:mm:ss");

    const comment = () => {
        if (title === "" || content === "") {
            window.alert("내용을 다 입력해 주세요");
            return;
        }

        axios
            .post(`http://52.79.240.76/goods/${id}/comment`, {
                headers: {
                    user: `authorization: Bearer ${token}`,
                },

                goods: goods.title,
                title: title,
                content: content,
                star_rating: rating,
                createdAt: createdAt,
                updatedAt: createdAt,
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        const getComment = async (param) => {
            setGoods(null);
            const goods = await axios.get(`http://15.164.211.216/goods/${id}`);
            setGoods(goods.data.result[0]);
        };
        getComment();
    }, []);
    if (!goods) return null;

    return (
        <>
            <Header>
                <H3>{goods.title}</H3>
                <span>에 대한 후기를 작성해 주세요!</span>
            </Header>
            <Star>
                <Star>
                    <Rating
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                        size="large"
                    />
                </Star>
            </Star>
            <InputDiv>
                <Titleinput
                    type="text"
                    placeholder="제목을 입력해주세요"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <Contentinput
                    placeholder="가슴은 따뜻하게, 리뷰는 솔직하게 적어주세요"
                    rows="20"
                    type="text"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
                <Button onClick={comment}>후기 작성하기</Button>
            </InputDiv>
        </>
    );
};

const Header = styled.div`
    width: 100%;
    background: #f6f6f6;
    text-align: center;
    padding: 32px 0;
`;

const H3 = styled.h3`
    margin: 0 0 8px 0;
`;

const Star = styled.div`
    display: block;
    margin: 8px auto;
    width: 150px;
    padding: 8px 0;
`;

const InputDiv = styled.div`
    width: 100%;
    text-align: center;
`;

const Titleinput = styled.input`
    display: inline-block;
    width: 80%;
    height: 48px;
    text-indent: 5px;
    border: 1px solid #c0c0c0;
    box-sizing: border-box;
    margin-bottom: 24px;
    font-size: 16px;
`;

const Contentinput = styled.textarea`
    display: inline-block;
    width: 80%;
    height: 120px;
    text-indent: 5px;
    border: 1px solid #c0c0c0;
    box-sizing: border-box;
    margin-bottom: 90px;
    font-size: 16px;
    padding: 10px 0 0 6px;
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    height: 60px;
    width: 80%;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: #30c1c3;
    border: 1px solid #30c1c3;
    &:hover {
        background: #fff;
        color: #30c1c3;
    }
`;

export default Comment;
