import React from "react" ;
import styled from "styled-components"

const Button =(props)=> {
    const {text, _onClick, is_float, children, margin, width, padding, zIndex} = props;
    const styles = {width : width, margin:margin, padding : padding, zIndex:zIndex};
    if(is_float){
    return (
        <React.Fragment>
            <FloatButton onClick={_onClick}>{text? text : children}</FloatButton>
        </React.Fragment>
    )}
    return(
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>{text? text : children}</ElButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    text : false,
    children : null,
    _onClick : () => {},
    is_float : false,
    margin : false,
    width :'100%',
    padding : "12px 0px",
    zIndex : false,
}

const ElButton = styled.button`
    width : ${(props) => props.width};
    background-color : #212121;
    color : #FFFFFF;
    padding : ${(props) => props.padding};
    box-sizing : border-box;
    border : None;
    ${(props) => (props.margin ? `margin : ${props.margin};` : '')}
    ${(props) => (props.zIndex ? `z-index : ${props.zIndex};` : '')}
`;
const FloatButton = styled.button`
    display : flex;
    width : 50px;
    height : 50px;
    background-color : #212121;
    color : #FFFFFF;
    box-sizing : border-box;
    font-size : 26px;
    font-weight : 800;
    position : fixed;
    bottom : 50px;
    right : 16px;
    text-align : center;
    border : none;
    border-radius :50px;
    align-items : center;
    justify-content : center;
    vertical-align : middle;
`;
const editButton = styled.button`
`;
export default Button;