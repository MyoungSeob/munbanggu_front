import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";
//새로고침할때마다 토큰을 이용해서 로그인 정보를 저장
const logIn = createAction(LOG_IN, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
    user: null,
    is_login: false,
};

const signUpDB = (id, name, pwd, email, isZoneCode, isAddress, detailAddress, phoneNumber) => {
    return function (dispatch, getState, { history }) {
        axios
            .post("http://13.125.248.86/auth/register", {
                id: id,
                name: name,
                password: pwd,
                email: email,
                zipcode: isZoneCode,
                address_one: isAddress,
                address_two: detailAddress,
                phone_number: phoneNumber,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        history.push("/user/login");
    };
};

const loginDB = (id, pwd) => {
    return function (dispatch, getState, { history }) {
        axios
            .post("http://13.125.248.86/auth/login", {
                id: id,
                password: pwd,
            })
            .then(function (res) {
                localStorage.setItem("log_token", res.data.result.user.token);
                localStorage.setItem("id", res.data.result.user.id);
                console.log(localStorage.getItem("log_token"));

                dispatch(
                    logIn({
                        id: id,
                    })
                );
                history.push("/");
            })

            .catch(function (error) {
                console.log(error);
            });
    };
};

const logoutDB = () => {
    return function (dispatch, getState, { history }) {
        localStorage.removeItem("log_token");
        localStorage.removeItem("id");
        dispatch(logOut());
        window.alert("로그아웃 되었습니다.");
        window.location.replace("/");
    };
};
const googleLoginDB = (token) => {
    return function (getState, dispatch, { history }) {
        axios
            .get("http://13.125.248.86/auth/google", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then(function (response) {
                console.log(response, 1111);
            })
            .catch(function (err) {
                console.log(err);
            });
    };
};
const kakaoLoginDB = (id) => {
    return function (getState, dispatch, { history }) {
        axios({
            method: "post",
            url: "http://13.125.248.86/auth/me",
            data: {
                id: id,
            },
        })
            .then((res) => {
                localStorage.setItem("kakao_token", res.user.token);
                localStorage.setItem("id", res.user.id);
            })
            .catch((err) => console.log(err, "에러에여"));
    };
};
export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                draft.user = null;
                draft.is_login = false;
            }),
    },
    initialState
);

const actionCreators = {
    getUser,
    logIn,
    logOut,
    signUpDB,
    loginDB,
    logoutDB,
    googleLoginDB,
    kakaoLoginDB,
};

export { actionCreators };
