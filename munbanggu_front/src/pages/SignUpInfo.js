import React from "react";
import styled from "styled-components";
import nexticon from "../shared/Image/next_icon.png";
import icondot from "../shared/Image/icon_dot.png";
import DaumPostcode from "react-daum-postcode";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { isEmail, isId, isPwd } from "../shared/Check";
import axios from "axios";
import { history } from "../redux/configStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";

const SignUpInfo = (props) => {
    const dispatch = useDispatch();
    // 우편번호 API 이용을 위한 주소와 우편번호
    const [isAddress, setIsAddress] = React.useState("");
    const [isZoneCode, setIsZoneCode] = React.useState("");
    // modal을 열기 위해서 만듦
    const [open, setOpen] = React.useState(false);
    // 회원가입 시 서버에 보내야 할 것들
    const [id, setId] = React.useState("");
    const [pwd, setPwd] = React.useState("");
    const [checkPwd, setCheckPwd] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [detailAddress, setDetailAddress] = React.useState("");
    // 모달 관련 함수들
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: "2px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    //다음 우편번호 API 
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? `(${extraAddress})` : "";
        }
        setIsZoneCode(data.zonecode);
        setIsAddress(fullAddress);
        handleClose();
    };
    const body = (
        <div>
            <DaumPostcode onComplete={handleComplete} />
        </div>
    );
    //회원가입 유효성 검사
    function SignUP() {
        console.log(isAddress);
        console.log(isZoneCode);
        if (
            id === "" ||
            pwd === "" ||
            checkPwd === "" ||
            name === "" ||
            email === "" ||
            phoneNumber === "" ||
            detailAddress === ""
        ) {
            window.alert("위의 사항을 모두 입력해주세요!");
            return;
        }
        if (!isId(id)) {
            window.alert("사용할 수 없는 아이디입니다.");
            return;
        }
        if (!isPwd(pwd)) {
            window.alert("사용할 수 없는 비밀번호 입니다.");
            return;
        }
        if (pwd !== checkPwd) {
            window.alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (!isEmail(email)) {
            window.alert("이메일 형식을 확인해주세요.");
            return;
        }
        dispatch(
            userActions.signUpDB(
                id,
                name,
                pwd,
                email,
                isZoneCode,
                isAddress,
                detailAddress,
                phoneNumber
            )
        );
    }

    return (
        <React.Fragment>
            <Container>
                <Contents>
                    <SubContents>
                        <ContentBox>
                            <MemberTit>
                                <Sign>회원가입</Sign>
                                <SignChap>
                                    <Now>
                                        <Num>01</Num>정보입력
                                        <span>
                                            <IconImg src={nexticon} />
                                        </span>
                                    </Now>
                                    <Next>
                                        <Num>02</Num>가입완료
                                    </Next>
                                </SignChap>
                            </MemberTit>
                            <MemberCont>
                                <BaseInfoBox>
                                    <BasicInfo>기본정보</BasicInfo>
                                    <Important>
                                        <ImgDot src={icondot} />
                                        표시는 반드시 입력하셔야 하는 항목입니다.
                                    </Important>
                                </BaseInfoBox>
                                <BaseInfoSec>
                                    <Table border="0" cellPadding="0" cellSpacing="0">
                                        <colgroup>
                                            <col width="25%"></col>
                                            <col width="75%"></col>
                                        </colgroup>
                                        <Tbody>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>아이디</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputLong
                                                            type="text"
                                                            pattern="[A-Za-z0-9]+"
                                                            onChange={(e) => {
                                                                setId(e.target.value);
                                                            }}
                                                        />
                                                        {isId(id) ? (
                                                            <GoodInput>
                                                                사용가능한 아이디입니다.
                                                            </GoodInput>
                                                        ) : (
                                                            <BadInput>
                                                                최소 4자 이상 입력하세요
                                                            </BadInput>
                                                        )}
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>비밀번호</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputPwd
                                                            type="password"
                                                            onChange={(e) => {
                                                                setPwd(e.target.value);
                                                            }}
                                                        />
                                                        {isPwd(pwd) ? (
                                                            <GoodInput>
                                                                사용가능한 비밀번호입니다
                                                            </GoodInput>
                                                        ) : (
                                                            <BadInput>
                                                                영문,숫자,특수문자를 조합하여 10자
                                                                이상 적어주세요.
                                                            </BadInput>
                                                        )}
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>비밀번호 확인</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputPwd
                                                            type="password"
                                                            onChange={(e) => {
                                                                setCheckPwd(e.target.value);
                                                            }}
                                                        />
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>이름</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputLong
                                                            onChange={(e) => {
                                                                setName(e.target.value);
                                                            }}
                                                        />
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>이메일</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputEmail
                                                            type="text"
                                                            valueTapIndex="-1"
                                                            onChange={(e) => {
                                                                setEmail(e.target.value);
                                                            }}
                                                        />
                                                        {isEmail(email) ? (
                                                            <GoodInput>
                                                                사용가능한 이메일입니다.
                                                            </GoodInput>
                                                        ) : (
                                                            <BadInput>
                                                                이메일을 정확하게 입력해주세요.
                                                            </BadInput>
                                                        )}

                                                        <FormElement>
                                                            <CheckInput type="checkbox" />
                                                            <Label>
                                                                (선택)마케팅 및 이벤트 정보 메일
                                                                수신에 동의합니다.
                                                            </Label>
                                                        </FormElement>
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>휴대폰 번호</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputMid
                                                            onChange={(e) => {
                                                                setPhoneNumber(e.target.value);
                                                            }}
                                                        />

                                                        <FormElement>
                                                            <CheckInput type="checkbox" />

                                                            <Label>
                                                                (선택)마케팅 및 이벤트 정보 SMS
                                                                수신에 동의합니다.
                                                            </Label>
                                                        </FormElement>
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                            <Tr>
                                                <Th>
                                                    <ImgDot src={icondot} />
                                                    <span>주소</span>
                                                </Th>
                                                <Td>
                                                    <MemberWarning>
                                                        <InputLetterNum value={isZoneCode} />
                                                        <PostCodeBtn onClick={handleOpen}>
                                                            우편번호검색
                                                        </PostCodeBtn>
                                                        <Modal
                                                            open={open}
                                                            onClose={handleClose}
                                                            className={classes.modal}
                                                            aria-labelledby="simple-modal-title"
                                                            aria-describedby="simple-modal-description"
                                                        >
                                                            {body}
                                                        </Modal>
                                                        <AddressInput>
                                                            <InputAddress value={isAddress} />
                                                            <InputSubAddress
                                                                onChange={(e) => {
                                                                    setDetailAddress(
                                                                        e.target.value
                                                                    );
                                                                }}
                                                            />
                                                        </AddressInput>
                                                    </MemberWarning>
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </BaseInfoSec>
                                <BtnCenterBox>
                                    <CancelButton
                                        onClick={() => {
                                            history.push("/");
                                        }}
                                    >
                                        취소
                                    </CancelButton>
                                    <SignUpButton onClick={SignUP}>회원가입</SignUpButton>
                                </BtnCenterBox>
                            </MemberCont>
                        </ContentBox>
                    </SubContents>
                </Contents>
            </Container>
        </React.Fragment>
    );
};
const Container = styled.div`
    border-top: 1px solid #eaeaea;
    margin-top: 0;
`;
const Contents = styled.div`
    min-height: 400px;
    padding: 0 0 60px 0;
`;
const SubContents = styled.div`
    padding: 40xp 0 0 0;
    position: relative;
    width: 1200px;
    margin: 0 auto;
`;
const ContentBox = styled.div`
    float: left;
    width: 100%;
    padding: 0 0 60px 0;
`;
const MemberTit = styled.div`
    overflow: hidden;
    border-bottom: 1px solid #dbdbdb;
`;
const Sign = styled.h2`
    float: left;
    font-size: 28px;
    color: #222222;
    margin: 0 0 20px 0;
    display: none;
`;
const SignChap = styled.ol`
    float: right;
    line-height: 62px;
    list-style: none;
`;
const Num = styled.span`
    font-size: 16px;
    font-weight: bold;
    display: inline;
`;
const IconImg = styled.img`
    padding: 0 14px;
    vertical-align: -1px;
`;
const Now = styled.li`
    color: #333;
    font-weight: bold;
    float: left;
    font-size: 14px;
    display: list-item;
`;
const Next = styled.li`
    float: left;
    font-size: 14px;
    color: #d1d1d1;
`;
const MemberCont = styled.div`
    width: 743px;
    margin: 0 auto;
    border: none;
    padding: 30px 145px;
`;
const BaseInfoBox = styled.div`
    margin: 0;
    padding: 0;
    line-height: 1.5;
`;
const BasicInfo = styled.h3`
    padding: 0 0 17px 0;
    font-size: 18px;
    color: #222222;
    display: inline-block;
    font-weight: normal;
    margin-bottom: 25px;
    text-align: center;
`;
const Important = styled.span`
    float: right;
    padding: 7px 0 0 10px;
    line-height: 40px;
    color: #333;
    font-size: 12px;
`;
const ImgDot = styled.img`
    padding: 0 7px 3px 0;
`;
const BaseInfoSec = styled.div`
    border-top: 1px solid #999999;
`;
const Table = styled.table`
    width: 100%;
    background-color: #ffffff;
`;
const Tbody = styled.tbody`
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    background-color: #ffffff;
`;
const Tr = styled.tr`
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
`;
const Th = styled.th`
    text-align: left;
    border-bottom: 1px solid #dcdcdc;
    background: #fbfbfb;
    padding: 10px 15px;
    font-size: 12px;
`;
const GoodInput = styled.div`
    color: #329cff;
    text-align: left;
`;
const MissingEmail = styled.div`
    color: #329cff;
    text-align: left;
`;
const Td = styled.td`
    padding: 15px 0 15px 15px;
    border-bottom: 1px solid #dcdcdc;
    font-size: 12px;
    line-height: 1.5;
`;
const MemberWarning = styled.div`
    display: inline;
    position: relative;
`;
const InputLong = styled.input`
    width: 380px;
    padding: 0 10px;
    outline: none;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
`;
const InputPwd = styled.input`
    padding: 0 10px;
    outline: none;
    font-size: 12px;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
    line-height: 31px;
    box-sizing: border-box;
`;
const BadInput = styled.div`
    color: #000;
    text-align: left;
    font-size: 12px;
`;
const InputEmail = styled.input`
    padding: 0 10px;
    outline: none;
    font-size: 12px;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
    line-height: 31px;
    box-sizing: border-box;
    width: 251px;
`;

const InputMid = styled.input`
    padding: 0 10px;
    outline: none;
    font-size: 12px;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
    line-height: 31px;
    box-sizing: border-box;
    width: 190px;
`;
const InputLetterNum = styled.input`
    padding: 0 10px;
    outline: none;
    font-size: 12px;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
    line-height: 31px;
    box-sizing: border-box;
    width: 190px;
    float: left;
`;
const Select = styled.select`
    width: 120px;
    height: 31px;
    color: #717171;
    vertical-align: top;
    outline: none;
    display: none;
`;
const FormElement = styled.div`
    display: block;
    margin-top: 5px;
`;
const CheckInput = styled.input`
    width: 13px;
    height: 13px;
    vertical-align: top;
    outline-offset: 2px;
    padding: 0 0 0 22px;
    mid-width: 13px;
`;
const Label = styled.label`
    position: relative;
    top: 0;
    left: 0;
    display: inline-block;
    min-height: 20px;
`;
const AddressInput = styled.div`
    float: left;
    width: 72%;
`;
const InputAddress = styled.input`
    margin: 10px 0 0 0;
    padding: 0 10px;
    width: 380px;
    outline: none;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
`;
const InputSubAddress = styled.input`
    margin: 10px 0 0 0;
    padding: 0 10px;
    width: 380px;
    outline: none;
    height: 31px;
    color: #333333;
    border: 1px solid #d6d6d6;
`;
const PostCodeBtn = styled.button`
    float: left;
    margin: 0 0 0 5px;
    padding: 5px 10px 5px 10px;
    border: 1px solid #989898;
    font-size: 12px;
    line-height: 1.5;
    color: #333;
    background-color: transparent;
    cursor: pointer;
`;
const BtnCenterBox = styled.div`
    margin: 35px 0 0 0;
    text-align: center;
`;
const CancelButton = styled.button`
    width: 150px;
    height: 45px;
    color: #3e3d3c;
    font-weight: bold;
    font-size: 13px;
    border: 1px solid #cccccc;
    background: #fff;
    cursor: pointer;
`;
const SignUpButton = styled.button`
    margin-left: 6px;
    width: 150px;
    height: 45px;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    border: 1px solid #000;
    background: #000;
    cursor: pointer;
`;
export default SignUpInfo;
