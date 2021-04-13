import React from "react";
import styled from "styled-components";

const GoodsTab = (props) => {
    const { is_info, is_shipping, is_refund, is_reviews } = props;
    return (
        <div>
            {is_info ? (
                <TabBodyInfo>
                    <Ul id="info">
                        <Li className="on">
                            <A href="#info">상품상세정보</A>
                        </Li>
                        <Li>
                            <A href="#shipping">배송안내</A>
                        </Li>
                        <Li>
                            <A href="#refund">교환 및 반품안내</A>
                        </Li>
                        <Li>
                            <A href="#reviews">
                                상품후기 <strong>0</strong>
                            </A>
                        </Li>
                        <Li>
                            <A href="#qna">
                                상품문의 <strong>0</strong>
                            </A>
                        </Li>
                    </Ul>
                </TabBodyInfo>
            ) : is_shipping ? (
                <TabBody>
                    <Ul id="shipping">
                        <Li>
                            <A href="#info">상품상세정보</A>
                        </Li>
                        <Li className="on">
                            <A href="#shipping">배송안내</A>
                        </Li>
                        <Li>
                            <A href="#refund">교환 및 반품안내</A>
                        </Li>
                        <Li>
                            <A href="#reviews">
                                상품후기 <strong>0</strong>
                            </A>
                        </Li>
                        <Li>
                            <A href="#qna">
                                상품문의 <strong>0</strong>
                            </A>
                        </Li>
                    </Ul>
                </TabBody>
            ) : is_refund ? (
                <TabBody>
                    <Ul id="refund">
                        <Li>
                            <A href="#info">상품상세정보</A>
                        </Li>
                        <Li>
                            <A href="#shipping">배송안내</A>
                        </Li>
                        <Li className="on">
                            <A href="#refund">교환 및 반품안내</A>
                        </Li>
                        <Li>
                            <A href="#reviews">
                                상품후기 <strong>0</strong>
                            </A>
                        </Li>
                        <Li>
                            <A href="#qna">
                                상품문의 <strong>0</strong>
                            </A>
                        </Li>
                    </Ul>
                </TabBody>
            ) : is_reviews ? (
                <TabBody>
                    <Ul id="reviews">
                        <Li>
                            <A href="#info">상품상세정보</A>
                        </Li>
                        <Li>
                            <A href="#shipping">배송안내</A>
                        </Li>
                        <Li>
                            <A href="#refund">교환 및 반품안내</A>
                        </Li>
                        <Li className="on">
                            <A href="#reviews">
                                상품후기 <strong>0</strong>
                            </A>
                        </Li>
                        <Li>
                            <A href="#qna">
                                상품문의 <strong>0</strong>
                            </A>
                        </Li>
                    </Ul>
                </TabBody>
            ) : (
                <TabBody>
                    <Ul id="qna">
                        <Li>
                            <A href="#info">상품상세정보</A>
                        </Li>
                        <Li>
                            <A href="#shipping">배송안내</A>
                        </Li>
                        <Li>
                            <A href="#refund">교환 및 반품안내</A>
                        </Li>
                        <Li>
                            <A href="#reviews">
                                상품후기 <strong>0</strong>
                            </A>
                        </Li>
                        <Li className="on">
                            <A href="#qna">
                                상품문의 <strong>0</strong>
                            </A>
                        </Li>
                    </Ul>
                </TabBody>
            )}
        </div>
    );
};

const TabBodyInfo = styled.div`
    padding: 80px 0 0 0;
    border-bottom: 1px solid #bbbbbb;
`;

const TabBody = styled.div`
    padding: 120px 0 0 0;
    border-bottom: 1px solid #bbbbbb;
`;

const Ul = styled.ul`
    float: none;
    width: 870px;
    height: 41px;
    margin: 0 auto;
    padding: 16px 0 0 0;
    font-size: 0;
    list-style: none;
`;

const Li = styled.li`
    float: left;
    position: relative;
    width: 174px;
    font-size: 12px;
    text-align: center;
`;

const A = styled.a`
    display: block;
    margin: 0 0 0 -1px;
    padding: 10px 0 12px 0;
    color: #999999;
    font-size: 12px;
    border: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    background: #ffffff;
`;

export default GoodsTab;
