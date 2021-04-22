import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { connect } from "react-redux";
import Mypage from "../../pages/Mypage";
 

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
const setProductlately = createAction(SET_PRODUCT_LATELY, (lately_orderlist) => lately_orderlist);
const loading = createAction(LOADING, (is_loading) => is_loading);


const initialState = {
    list: [],
    lowHight: [],
    hightLow: [],
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
                dispatch(getProduct(product_list));
                dispatch(
                    getProductLowHigh([...product_list].sort((a, b) => a.sale_price - b.sale_price))
                );
                dispatch(
                    getProductHighLow([...product_list].sort((a, b) => b.sale_price - a.sale_price))
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const getLivingProductDB = () => {
    return function (dispatch, getState, { history }) {
        dispatch(loading(true));
        axios
            .get(`http://13.125.248.86/goods/category?name=리빙`)
            .then((response) => {
                let product_list = [...response.data.result];
                dispatch(getLivingProduct(product_list));
                dispatch(
                    getProductLowHigh([...product_list].sort((a, b) => a.sale_price - b.sale_price))
                );
                dispatch(
                    getProductHighLow([...product_list].sort((a, b) => b.sale_price - a.sale_price))
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const getStatProductDB = () => {
    return function (dispatch, getState, { history }) {
        dispatch(loading(true));
        axios
            .get(`http://13.125.248.86/goods/category?name=문구`)
            .then((response) => {
                let product_list = [...response.data.result];
                dispatch(getStatProduct(product_list));
                dispatch(
                    getProductLowHigh([...product_list].sort((a, b) => a.sale_price - b.sale_price))
                );
                dispatch(
                    getProductHighLow([...product_list].sort((a, b) => b.sale_price - a.sale_price))
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

const lately_orderlistDB = () => {
    return function (dispatch, getState, { history }) {
        

        axios
            .get(`http://13.125.248.86/order`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("log_token")}`,
                },
            })
            
            .then((res) => {
                const results = res.data.result;
                console.log(results)

                let lately_orderlist = [];
                
                results.forEach((doc) => {
                let _order={
                   ...doc
                 } 
                let order={
                  
                  price:_order.goods.sale_price,
                  url:_order.goods.thumbnail_url,
                  name:_order.goods.title,
                  amount:_order.quantity,
                  option:_order.goods.option,
                  date:_order.createdAt.substr(0,10),
                  user_name:_order.user.name,
                  
                };
                
                console.log(order);
                lately_orderlist.push(order);
               
              });
              
               
                 dispatch(setProductlately(lately_orderlist));
            });
    };
};


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
        for (let i = 1; i < localStorage.length-1; i++) {
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
        window.alert("결제 완료되셨습니다!")
        for(let i = 1; i < localStorage.length-1; i++){
            localStorage.removeItem(i)
        }
        history.push('/')
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
    setProductlately,
};

export { actionsCreators };
