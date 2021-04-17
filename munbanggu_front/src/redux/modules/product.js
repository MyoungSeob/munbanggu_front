import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_LOW_HIGH = "GET_PRODUCT_LOW_HEIGH";
const GET_PRODUCT_HIGH_LOW = "GET_PRODUCT_HIGH_LOW";
const getProduct = createAction(GET_PRODUCT, (product_list) => product_list);
const getProductLowHigh = createAction(GET_PRODUCT_LOW_HIGH, (product_list) => product_list);
const getProductHighLow = createAction(GET_PRODUCT_HIGH_LOW, (product_list) => product_list);

const initialState = {
    list: [],
    lowHight: [],
    hightLow: [],
    is_loading: false,
};

const getProductDB = () => {
    return function (dispatch, getState, { history }) {
        return axios
            .get(`http://15.164.211.216/goods`)
            .then((response) => {
                let product_list = [];
                response.data.result.forEach((response) => {
                    let product = {
                        detail_image_url: response.detail_image_url,
                        option: response.option,
                        comment_count: response.comment_count,
                        _id: response._id,
                        title: response.title,
                        price: response.price,
                        sale_price: response.sale_price,
                        discount_rate: response.discount_rate,
                        category: response.category,
                        thumbnail_url: response.thumbnail_url,
                        discount: response.discount,
                        sold_out: response.sold_out,
                        detail_info: response.detail_info,
                    };
                    product_list.push(product);
                });

                dispatch(getProduct(product_list));
                dispatch(
                    getProductLowHigh(
                        [...product_list].sort(
                            (a, b) => parseInt(a.sale_price) - parseInt(b.sale_price)
                        )
                    )
                );
                dispatch(
                    getProductHighLow(
                        [...product_list].sort(
                            (a, b) => parseInt(b.sale_price) - parseInt(a.sale_price)
                        )
                    )
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export default handleActions(
    {
        [GET_PRODUCT]: (state, action) =>
            produce(state, (draft) => {
                draft.list = action.payload;
                // draft.is_loading = action.payload.is_loading;
            }),
        [GET_PRODUCT_LOW_HIGH]: (state, action) =>
            produce(state, (draft) => {
                draft.lowHigh = action.payload;
            }),
        [GET_PRODUCT_HIGH_LOW]: (state, action) =>
            produce(state, (draft) => {
                draft.highLow = action.payload;
            }),
    },
    initialState
);

const actionsCreators = {
    getProductDB,
    getProduct,
    getProductLowHigh,
    getProductHighLow,
};

export { actionsCreators };
