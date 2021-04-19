import React, { useEffect, useState } from "react";
import "../shared/Product.css";

import CommentContent from "./CommentContent";

import axios from "axios";

const CommentList = (props) => {
    const id = props.id;

    const [comment, setComment] = useState();

    useEffect(() => {
        const comment = async (param) => {
            setComment(null);
            const res = await axios.get(`http://52.79.240.76/goods/${id}/comment`);
            setComment(res);
        };
        comment();
    }, []);
    if (!comment) return null;

    return (
        <>
            <CommentContent />
            <CommentContent />
        </>
    );
};

export default CommentList;
