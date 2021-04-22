import React from "react";
import react from "react";
import styled from "styled-components";
import Header from "../components/Header";
import CartContent from "../components/CartContent";
import { useDispatch, useSelector } from "react-redux";
import { actionsCreators as productActions } from "../redux/modules/product";
import { CardContent } from "@material-ui/core";
import LatelyodContent from "../components/LatelyodContent";

const Mypage = (props) => {
    const dispatch = useDispatch();

    const lately_orderlist = useSelector((store) => store.product.lately_orderlist);
    const name = lately_orderlist[0].user.name;

    React.useEffect(() => {
        dispatch(productActions.lately_orderlistDB());
    }, []);

    if (!lately_orderlist) return null;

    return (
        <React.Fragment>
            <Container>
                <Contents>
                    {/* <!-- 본문 시작 --> */}

                    <Location_wrap>
                        <Location_cont>
                            <Em>
                                <Local_home_a href="#" class="local_home">
                                    HOME
                                </Local_home_a>{" "}
                                &gt; 마이페이지
                            </Em>
                        </Location_cont>
                    </Location_wrap>
                    {/* <!-- //location_wrap --> */}

                    <Sub_content>
                        <Side_cont>
                            <Sub_menu_box>
                                <H2>마이페이지</H2>
                                <Sub_menu_mypage_ul>
                                    <Menu_box_li>
                                        쇼핑정보
                                        <Sub_depth1_ul>
                                            <Sub_depth1_li>
                                                <A href="../mypage/order_list.php">
                                                    주문목록/배송조회
                                                </A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/cancel_list.php">
                                                    취소/반품/교환 내역
                                                </A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/refund_list.php">환불 내역</A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/wish_list.php">찜리스트</A>
                                            </Sub_depth1_li>
                                        </Sub_depth1_ul>
                                    </Menu_box_li>

                                    <Auth_li>
                                        회원정보
                                        <Sub_depth1_ul>
                                            <Sub_depth1_li>
                                                <A href="../mypage/mypage_qa.php">1:1 문의게시판</A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/my_page_password.php">
                                                    회원정보 변경
                                                </A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/shipping.php">배송지 관리</A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/mypage_goods_qa.php">
                                                    나의 상품문의
                                                </A>
                                            </Sub_depth1_li>
                                            <Sub_depth1_li>
                                                <A href="../mypage/mypage_goods_review.php">
                                                    나의 상품후기
                                                </A>
                                            </Sub_depth1_li>
                                        </Sub_depth1_ul>
                                    </Auth_li>
                                </Sub_menu_mypage_ul>
                            </Sub_menu_box>
                            {/* <!-- //sub_menu_box --> */}
                        </Side_cont>
                    </Sub_content>

                    <Content>
                        <Mypage_main>
                            {/* <!-- 마이페이지 회원 요약정보 --> */}
                            <Mypage_top_info>
                                <Mypage_top_wallet>
                                    <Text>반가워요,</Text>

                                    <Mypage_top_txt>
                                        <div class="grade_txt">
                                            <p>
                                                {name} 님의 회원등급은 <Span>일반회원그룹</Span>{" "}
                                                입니다.
                                            </p>

                                            {/* <!-- N : 회원등급혜택 레이어 끝 --> */}
                                        </div>
                                    </Mypage_top_txt>
                                </Mypage_top_wallet>
                                {/* <!-- //mypage_top_txt --> */}
                            </Mypage_top_info>
                            {/* <!-- //mypage_top_wallet --> */}

                            {/* <!-- //mypage_top_info --> */}

                            {/* <!-- //mypage_order_info --> */}

                            <Mypage_lately_info>
                                <Mypage_zone_tit>
                                    <H>
                                        최근 주문 정보
                                        <TextSpan>최근 30일 내에 주문하신 내역입니다.</TextSpan>
                                    </H>
                                </Mypage_zone_tit>

                                <Mypage_lately_info_cont>
                                    {/* <!-- 주문상품 리스트 --> */}
                                    <Tabletype>
                                        <Table>
                                            <Colgroup>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                                <Col></Col>
                                            </Colgroup>
                                            <Thead>
                                                <Tr>
                                                    <Th>구매날짜</Th>
                                                    <Th>상품명/옵션</Th>
                                                    <Th>수량</Th>
                                                    <Th>상품 금액</Th>
                                                </Tr>
                                            </Thead>
                                            {lately_orderlist === 0 ? (
                                                <Tbody>
                                                    <Tr>
                                                        <Td>
                                                            <p class="no_data">
                                                                조회내역이 없습니다.
                                                            </p>
                                                        </Td>
                                                    </Tr>
                                                </Tbody>
                                            ) : (
                                                <Tbody>
                                                    <Tr>
                                                        <Td>
                                                            {lately_orderlist.map((p) => {
                                                                return (
                                                                    <LatelyodContent
                                                                        key={p.id}
                                                                        {...p}
                                                                    />
                                                                );
                                                            })}
                                                        </Td>
                                                    </Tr>
                                                </Tbody>
                                            )}
                                        </Table>
                                    </Tabletype>
                                </Mypage_lately_info_cont>
                            </Mypage_lately_info>
                        </Mypage_main>
                    </Content>
                </Contents>
            </Container>
        </React.Fragment>
    );
};

const Td = styled.td`
    height: 31px;
    padding: 15px 10px 14px 10px;
    color: #777777;
    border-bottom: 1px solid #dbdbdb;
    background: #ffffff;
    text-align: left;
`;

const Container = styled.div`
    border-top: 1px solid #eaeaea;
    margin-top: 0;
`;

const Contents = styled.div`
    min-height: 400px;
    padding: 0 0 60px 0;
`;

const Location_wrap = styled.div`
    display: none;
    text-align: right;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #ededed;
`;

const Location_cont = styled.div`
    display: inline-block;
    width: auto;
    text-align: left;
`;

const Em = styled.em`
    display: block;
    float: left;
    padding: 12px 0 10px 0;
    color: #777777;
    font-size: 11px;
`;

const Local_home_a = styled.a`
    color: #777777;
    text-decoration: none;
    cursor: pointer;
`;

const Sub_content = styled.div`
    padding: 40px 0 0 0;
    position: relative;
    width: 1200px;
    margin: 0 auto;
`;

const Side_cont = styled.div`
    float: left;
    width: 200px;
`;

const Sub_menu_box = styled.div`
    min-height: 250px;
    padding: 0 0 50px 0;
    display: block;
    position: relative;
    right: 50px;
`;
const H2 = styled.h2`
    padding: 0 0 14px 10px;
    border-bottom: 1px solid #ececec;
`;
const Sub_menu_mypage_ul = styled.ul`
    margin: 7px 0 0 0;
    list-style: none;
`;
const Menu_box_li = styled.li`
    margin: 30px 0 0 0;
    padding: 8px 0 15px 0;
    font-size: 14px;
    font-weight: bold;
`;
const Sub_depth1_ul = styled.ul`
    display: block;
    margin: 5px 0 25px 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    list-style: none;
    position: relative;
`;

const Sub_depth1_li = styled.li`
    padding: 1px 0 0 0;
    font-weight: normal;
    list-style: none;
    display: list-item;
    margin: 0;
    position: relative;
    right: 40px;
`;

const Auth_li = styled.li`
    padding: 8px 0 15px 0;
    font-size: 14px;
    font-weight: bold;
    list-style: none;
`;

const Content = styled.div`
    float: left;
    width: 960px;
    padding: 0 0 0 40px;
    margin: 0 auto;
    min-height: 500px;
`;

const Mypage_main = styled.div`
    padding: 0 0 50px 0;
    display: block;
`;
const Mypage_top_info = styled.div`
    margin: 0 0 35px 0;
`;
const Mypage_top_wallet = styled.div`
    margin-bottom: 50px;
`;
const Text = styled.p`
    font-size: 40px;
    font-family: "BMHANNAPro";
    color: #333;
`;
const Mypage_top_txt = styled.div`
    width: 30%;
    padding: 20px 0 0px 0;
    font-size: 18px;
    text-align: left;
    vertical-align: middle;
    background: #fff;
`;
const Span = styled.span`
    color: #333;
`;

const Mypage_lately_info = styled.div`
    position: relative;
    display: block;
`;

const Mypage_zone_tit = styled.div`
    margin: 0 0 0 0;
    padding: 0 0 10px 0;
    font-size: 16px;
`;

const H = styled.h3`
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const TextSpan = styled.span`
    padding: 0 0 0 5px;
    color: #777777;
    font-size: 12px;
    font-weight: normal;
`;

const A = styled.a`
    font-size: 12px;
    text-indent: 10px;
    display: block;
    padding: 7px 0 6px 0;
    color: #333;
    text-decoration: none;
`;

const Mypage_lately_info_cont = styled.div`
    margin: 0;
    padding: 0;
    display: block;
`;

const Tabletype = styled.div`
    margin: 0;
    padding: 0;
    display: block;
`;
const Table = styled.table`
    display: table;

    border: 0;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;
    box-sizing: border-box;
    text-indent: initial;
`;

const Colgroup = styled.colgroup`
    display: table-column-group;
`;

const Col = styled.col`
    width: 15%;
    display: table-column;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;
`;

const Thead = styled.thead`
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
`;
const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
    border-spacing: 0;
`;
const Th = styled.th`
    padding: 10px 10px 10px 10px;
    border-top: 1px solid #999999;
    border-bottom: 1px solid #dbdbdb;
    background: #f7f7f7;
    width: auto;
`;
const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    border-spacing: 0;
    border-collapse: collapse;
    text-align: center;

    border: 0;
`;

const P = styled.p`
    padding: 50px 30px 50px 30px;
    text-align: center;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    width: 100%;
`;

export default Mypage;