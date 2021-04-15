import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { history } from "../redux/configstore";
import { Link } from "react-router-dom";

import saleBadge from "../shared/SaleBadge.png";

const Card = (props) => {
    //리덕스를 쓰지 않고 바로 가져올 수도 있습니다.

    // const { is_sale } = props;
    // const [api, setApi] = useState("");
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState("");

    //     const fetchProduct = async (param) => {
    //         try {
    //             setError(null);
    //             setApi(null);
    //             setLoading(true);
    //             const response = await axios.get(`http://15.164.211.216/goods`);
    //             setApi(response.data.result);
    //         } catch (e) {
    //             setError(e);
    //         }
    //         setLoading(false);
    //     };
    //     fetchProduct();
    // }, []);
    // if (!api) return null;
    // if (error) return <div>error</div>;
    // if (loading) return <div>spinner..</div>;

    return (
        <>
            {props.discount === true
                ? [
                      <Link
                          onClick={() => {
                              history.push(`/goods/${props._id}`);
                          }}
                          key={props._id}
                      >
                          <Item key={props._id}>
                              <ItemInner>
                                  <img src={props.thumbnail_url} alt="detail" width="280px"></img>
                                  <ItemInfo>
                                      <SaleBadge>
                                          <img src={saleBadge} alt="sale" />
                                      </SaleBadge>
                                      <Sale>10%</Sale>
                                      <ItemA>{props.title}</ItemA>
                                      <PrePrice>15,000원</PrePrice>
                                      <ItemPriceInfo>{props.sale_price}</ItemPriceInfo>
                                  </ItemInfo>
                              </ItemInner>
                          </Item>
                      </Link>,
                  ]
                : [
                      <Link
                          onClick={() => {
                              history.push(`/goods/${props._id}`);
                          }}
                          key={props._id}
                      >
                          <Item>
                              <ItemInner>
                                  <img src={props.thumbnail_url} alt="detail" width="280px"></img>
                                  <ItemInfo>
                                      <ItemA>{props.title}</ItemA>
                                      <ItemPriceInfo>{props.sale_price}</ItemPriceInfo>
                                  </ItemInfo>
                              </ItemInner>
                          </Item>
                      </Link>,
                  ]}
        </>
    );
};

const Item = styled.li`
    width: 25%;
    display: inline-block;
    position: relative;
    margin: 20px 0 20px 0;
    vertical-align: top;
    font-size: 12px;
`;

const ItemInner = styled.div`
    padding: 0 10px;
    color: #1c1c1c;
`;

const ItemInfo = styled.div`
    display: inline-block;
    width: 100%;
    padding: 8px 0 20px 0px;
    box-sizing: border-box;
`;

const ImageA = styled.a`
    display: block;
    height: 100%;
    cursor: pointer;
`;

const ItemA = styled.a`
    margin-bottom: 2px;
    font-weight: 600;
    font-size: 15px;
    font-weight: normal;
    cursor: pointer;
    display: block;
`;

const ItemPriceInfo = styled.span`
    font-size: 16px;
    font-weight: 800;
    padding: 1px;
    display: block;
    font-family: "Montserrat";
    margin-left: 1px;
`;

const Sale = styled.span`
    display: block;
    font-size: 20px;
    font-family: "Montserrat";
    color: #ff6350;
    font-weight: 800;
    margin-top: -8px;
`;

const PrePrice = styled.span`
    color: #888;
    text-decoration: line-through;
    font-size: 12px;
    margin-bottom: -5px;
`;

const SaleBadge = styled.div`
    margin: 0;
    padding: 0;
    position: absolute;
    left: 20px;
    top: 0px;
    margin: 5px 0 0 -3px;
`;

export default Card;
