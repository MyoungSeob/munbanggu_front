import React, { useState, useEffect } from "react";
import axios from "axios";

import CommentContent from "./CommentContent";

const CommentList = (props) => {
    const id = props.id;
    const [comment, setComment] = useState();

    useEffect(() => {
        const comment = async (param) => {
            setComment(null);
            const res = await axios.get(`http://13.125.248.86/goods/${id}/comment`);
            setComment(res.data.result);
        };
        comment();
    }, []);
    if (!comment) return null;

    return (
        <>
            {comment.map((p) => {
                return <CommentContent id={id} comment={p} />;
            })}
        </>
    );
};

export default CommentList;
