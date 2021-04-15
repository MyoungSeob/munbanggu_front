import {createAction, handleAtions} from "redux-actions"
import {produce} from "immer";
import axios from "axios";


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


const actionCreators = {
    signUpDB,
}

export {actionCreators}