import {createAction, handleActions} from "redux-actions"
import {produce} from "immer";
import axios from "axios";


const LOG_IN = "LOG_IN";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

const logIn = createAction(LOG_IN, (user) => ({user}));
const getUser = createAction(GET_USER, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));


const initialState = {
  user : null,
  is_login : false,
  
}

const signUpDB = (id, name, pwd, email, isZoneCode, isAddress, detailAddress, phoneNumber) =>{
    return function (dispatch, getState, {history}) {
        axios.post('http://15.164.211.216/user/register', {
            id : id,
            name : name,
            password : pwd,            
            email : email,            
            zipcode : isZoneCode,
            address_one : isAddress,
            address_two : detailAddress,
            phone_number : phoneNumber
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
        history.push('/user/login')
    }
}



const loginDB = (id, pwd) => {
  return function(dispatch, getState, {history}) {
    axios.post('http://15.164.211.216/user/login', {
    id : id,
    password : pwd,
      
    })
    .then(function(res) {
      console.log(res);

      dispatch(

      )
      history.push("/")
    })
    .catch(function(error) {
      console.log(error);
    })
    
  }

}

const googleLoginDB = () => {
    return function (getState, dispatch, {history}) {
        axios.get('http://15.164.211.216/auth/google')
         .then(function(response){
             console.log(response)
         })
         .catch(function(err){
             console.log(err)
         })
    }
 }

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
  },
  initialState
);


const actionCreators = {
    signUpDB,
    loginDB,
    googleLoginDB,
}

export {actionCreators}