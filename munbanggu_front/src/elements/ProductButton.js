import React from "react";
import styled from "styled-components";

const ProductButton = (props) => {
    const { text, _onClick, children, margin, width, padding, is_white, is_like } = props;
    const styles = { width: width, margin: margin, padding: padding };

    return (
        <>
            {is_white ? (
                <WhiteButton onClick={_onClick} {...styles}>
                    {text ? text : children}
                </WhiteButton>
            ) : is_like ? (
                <button className="likebtn"></button>
            ) : (
                <Button onClick={_onClick} {...styles}>
                    {text ? text : children}
                </Button>
            )}
        </>
    );
};

ProductButton.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    margin: false,
    width: "100%",
    padding: "12px 0px",
    is_white: false,
};

const Button = styled.button`
    display: inline-block;
    width: 230px;
    height: 52px;
    margin: 0 0 0 6px;
    padding: 0 10px 0 10px;
    color: #ffffff;
    font-size: 16px;
    border: 1px solid #000;
    background: #000;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        bacground: #222;
        border: 1px solid #222;
    }
`;

const WhiteButton = styled.button`
    display: inline-block;
    width: 152px;
    height: 52px;
    margin: 0 0 0 6px;
    padding: 0 10px 0 10px;
    color: #3e3d3c;
    font-size: 16px;
    border: 1px solid #cccccc;
    background: #ffffff;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
`;

export default ProductButton;
