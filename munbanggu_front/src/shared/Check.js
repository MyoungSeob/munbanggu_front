export function isEmail(asValue) {
    var regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExpEm.test(asValue); 
}
export function isId(asValue) {
    var reExpId = /^[a-zA-Z0-9]{4,}$/;
    return reExpId.test(asValue)
}
export function isPwd(asValue){
    var regExpPwd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
    return regExpPwd.test(asValue)
}