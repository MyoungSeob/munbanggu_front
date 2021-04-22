import styled from "styled-components";
import "../shared/App.css";

import Rating from "@material-ui/lab/Rating";
import moment from "moment";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";
import axios from "axios";

const Comment = (props) => {
    const id = props.match.params.id; //상품Id
    const token = localStorage.getItem("log_token"); //후기 작성에 필요한 토큰

    //후기에 저장되는 내용들 입니다.
    const [rating, setRating] = useState(5);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const createdAt = moment().format("YYYY.MM.DDTHH:mm:ss");

    //코멘트 작성
    const comment = () => {
        if (title === "" || content === "") {
            window.alert("내용을 다 입력해 주세요");
            return;
        }
        const comment = {
            title: title,
            content: content,
            star_rating: rating,
            createdAt: createdAt,
        };
        axios({
            method: "post",
            url: `http://13.125.248.86/goods/${id}/comment`,
            headers: {
                authorization: `Bearer ${token}`,
                "Content-type": "application/json",
                Accept: "application/json",
            },
            data: comment,
        })
            .then(function (response) {
                window.alert("후기가 작성되었습니다");
                window.close();
            })
            .catch((error) => {
                console.log(error.response);
            });
    };

    //상품 정보를 불러옵니다
    const dispatch = useDispatch();
    const product_list = useSelector((store) => store.product.list);
    const idx = product_list.findIndex((p) => p._id === id);
    const data = product_list[idx];

    useEffect(() => {
        dispatch(productActions.getProductDB());
    }, []);

    if (!data) return null;

    return (
        <>
            <Header>
                <H3>{data.title}</H3>
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
