import {createAction, handleActions} from "redux-actions"
import {produce} from "immer";
import axios from "axios";



const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";


const setUser = createAction(SET_USER, (user) => ({user}));
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
        .then(function(res){
            console.log(res)
            dispatch(setUser({
              id:id,
              pwd:pwd,
              name:name,
              email:email,
              
            }))
            history.push('/user/login')
        })
        .catch(function(error){
            console.log(error)
        })
       
        
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
      console.log(res.config.data.name)
      localStorage.setItem("log_token",res.data.result.user.token)
      console.log(localStorage.getItem("log_token"))

      dispatch(
          setUser({
            id:id,
            pwd:pwd,
           
            

          })
      )
      history.push("/")
    })

    .catch(function(error) {
      console.log(error);
    })
    
  }

}

const logoutDB =()=>{
  return function(dispatch, getState,  {history}){
    localStorage.removeItem("log_token");
      dispatch(logOut());
      window.alert("로그아웃 되었습니다.");
      history.replace("/")
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
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
    setUser,
    logOut,
    signUpDB,
    loginDB,
    logoutDB
}

export {actionCreators}