import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements/Index";
const Input = (props) => {
    const { label, placeholder, _onChange, type, multiLine, value, is_submit, onSubmit } = props;
    if (multiLine) {
        return (
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                <ElTextarea
                    value={value}
                    rows={10}
                    placeholder={placeholder}
                    onChange={_onChange}
                ></ElTextarea>
            </Grid>
        );
    }
    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin="0px">{label}</Text>}
                {is_submit ? (
                    <ElInput
                        type={type}
                        placeholder={placeholder}
                        onChange={_onChange}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                onSubmit(e);
                            }
                        }}
                    />
                ) : (
                    <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
                )}
            </Grid>
        </React.Fragment>
    );
};

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: "텍스트를 입력해주세요.",
    type: "text",
    _onChange: () => {},
    value: "",
    is_submit: false,
    onSubmit: () => {},
};
const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
`;
const ElInput = styled.input`
    width: 100%;
    height: 34px;
    padding: 5px 40px 5px 0px;
    box-sizing: border-box;
    background: #fff;
    font-size: 14px;
    border: none 0;
    border-bottom: 1px solid #333;
    outline: none;
`;

export default Input;
