import { createAction, handleActions } from "redux-actions";
import { useDispatch } from "react-redux";
import { produce } from "immer";
import axios from "axios";

const GET_PRODUCT = "GET_PRODUCT";
const getProduct = createAction(GET_PRODUCT, (product_list) => product_list);

const initialState = {
    list: [],
    is_loading: false,
};

const getProductDB = () => {
    return function (dispatch, getState, { history }) {
        return axios
            .get(`http://15.164.211.216/goods`)
            .then((response) => {
                let product_list = [];
                // let data = response.data.result;
                // console.log(data);
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
                draft.is_loading = action.payload.is_loading;
            }),
    },
    initialState
);

const actionsCreators = {
    getProductDB,
    getProduct,
};

export { actionsCreators };
