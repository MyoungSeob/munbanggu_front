import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const SET_PRODUCT_LATELY = "GET_PRODUCT_LATELY";
const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_LOW_HIGH = "GET_PRODUCT_LOW_HEIGH";
const GET_PRODUCT_HIGH_LOW = "GET_PRODUCT_HIGH_LOW";
const GET_LIVING_PRODUCT = "GET_LIVING_PRODUCT";
const GET_STAT_PRODUCT = "GET_STAT_PRODUCT";
const LOADING = "LOADING";

const getProduct = createAction(GET_PRODUCT, (product_list) => product_list);
const getLivingProduct = createAction(GET_LIVING_PRODUCT, (product_list) => product_list);
const getStatProduct = createAction(GET_STAT_PRODUCT, (product_list) => product_list);
const getProductLowHigh = createAction(GET_PRODUCT_LOW_HIGH, (product_list) => product_list);
const getProductHighLow = createAction(GET_PRODUCT_HIGH_LOW, (product_list) => product_list);
const getProductlately = createAction(SET_PRODUCT_LATELY, (lately_orderlist) => lately_orderlist);
const loading = createAction(LOADING, (is_loading) => is_loading);

const initialState = {
    list: [],
    lowHigh: [],
    highLow: [],
    living: [],
    stat: [],
    lately_orderlist: [],
    is_loading: false,
};

const getProductDB = () => {
    return function (dispatch, getState, { history }) {
        dispatch(loading(true));
        axios
            .get(`http://13.125.248.86/goods`)
            .then((response) => {
                let product_list = [...response.data.result];
                //초기 데이터
                dispatch(getProduct(product_list));
                //낮은 가격순
                dispatch(
                    getProductLowHigh([...product_list].sort((a, b) => a.sale_price - b.sale_price))
                );
                //높은 가격순
                dispatch(
                    getProductHighLow([...product_list].sort((a, b) => b.sale_price - a.sale_price))
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//리빙데이터 저장
const getLivingProductDB = () => {
    return function (dispatch, getState, { history }) {
        dispatch(loading(true));
        axios
            .get(`http://13.125.248.86/goods/category?name=리빙`)
            .then((response) => {
                let product_list = [...response.data.result];
                dispatch(getLivingProduct(product_list));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//문구 데이터 저장
const getStatProductDB = () => {
    return function (dispatch, getState, { history }) {
        dispatch(loading(true));
        axios
            .get(`http://13.125.248.86/goods/category?name=문구`)
            .then((response) => {
                let product_list = [...response.data.result];
                dispatch(getStatProduct(product_list));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

//유저 정보를 토큰에 태워 주문 정보를 가져옵니다
const lately_orderlistDB = () => {
    return function (dispatch, getState, { history }) {
        axios
            .get(`http://13.125.248.86/order`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("log_token")}`,
                    Accept: "application/json",
                },
            })
            .then((res) => {
                let lately_orderlist = [...res.data.result];
                dispatch(getProductlately(lately_orderlist));
            })
            .catch((e) => console.log(e));
    };
};
// 구매하기 버튼을 누르면, 헤더에 토큰을 태워서 주문한 상품들의 정보를 서버로 보내줍니다.
const orderProductDB = (
    isZoneCode,
    isAddress,
    detailAddress,
    deliveryComment,
    payMethod,
    phoneNumber
) => {
    return function (dispatch, getState, { history }) {
        const orderInfoList = [];
        const order_list = [];
        for (let i = 1; i < localStorage.length - 1; i++) {
            orderInfoList.push(JSON.parse(localStorage.getItem(i)));
            const loginToken = localStorage.getItem("log_token");
            axios({
                method: "post",
                url: "http://13.125.248.86/order",
                headers: {
                    authorization: `Bearer ${loginToken}`,
                    "Content-type": "application/json",
                },
                data: JSON.stringify({
                    goods: orderInfoList[i - 1].goods,
                    quantity: orderInfoList[i - 1].amount,
                    zipcode: isZoneCode,
                    address_one: isAddress,
                    address_two: detailAddress,
                    delivery_comment: deliveryComment,
                    payment_method: payMethod,
                    phone_number: phoneNumber,
                }),
            })
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (err) {
                    console.log("에러입니다", err);
                });
        }
        window.alert("결제 완료되셨습니다!");
        for (let i = 1; i < localStorage.length - 1; i++) {
            localStorage.removeItem(i);
        }
        history.push("/");
    };
};

export default handleActions(
    {
        [GET_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload;
                draft.is_loading = false;
            }),
        [GET_PRODUCT_LOW_HIGH]: (state, action) =>
            produce(state, (draft) => {
                draft.lowHigh = action.payload;
            }),
        [GET_PRODUCT_HIGH_LOW]: (state, action) =>
            produce(state, (draft) => {
                draft.highLow = action.payload;
            }),
        [GET_LIVING_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.living = action.payload;
            }),
        [GET_STAT_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.stat = action.payload;
            }),
        [SET_PRODUCT_LATELY]: (state, action) =>
            produce(state, (draft) => {
                draft.lately_orderlist = action.payload;
            }),
        [LOADING]: (state, action) =>
            produce(state, (draft) => {
                draft.is_loading = action.payload.is_loading;
            }),
    },
    initialState
);

const actionsCreators = {
    getProductDB,
    getProduct,
    getProductLowHigh,
    getProductHighLow,
    getLivingProductDB,
    getStatProductDB,
    orderProductDB,
    lately_orderlistDB,
    getProductlately,
};

export { actionsCreators };
