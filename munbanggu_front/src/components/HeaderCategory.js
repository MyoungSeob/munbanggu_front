import React from "react";
import styled from "styled-components";

const HeaderCategory = (props) => {
  return (
    <React.Fragment>
      <Headergnb>
        <Gnb>
          {/* <!-- 전체 카테고리 출력 레이어 시작 --> */}
          <All_gnb>
            <strong>ALL CATEGORY</strong>
            <Atag href="#;">
              <Image src="/data/skin/front/udweb_C/img/common/btn/btn_allmenu_open_white.png"
                alt="전체메뉴보기"></Image>
              </Atag>
            </All_gnb>
            <div class="gnb_allmenu_wrap"></div>
            {/* <!-- 전체 카테고리 출력 레이어 끝 -->
    <!-- 상단 카테고리 출력 시작 --> */}
            <Menubox>
              <Left>
                <a href="#PREV" class="active">
                  PREV
                </a>
              </Left>
              <ULlist>
              
                <li>
                  <Category href="../goods/goods_list.php?cateCd=001" >
                    전체
                  </Category>
                </li>
                <li>
                
                  <Category href="../goods/goods_list.php?cateCd=008" >
                    문구
                  </Category>
                </li>
                <li>
                  <Category href="../goods/goods_list.php?cateCd=009" >
                    리빙
                  </Category>
                </li>
                <li>
                  <Category href="https://store.baemin.com/goods/goods_list.php?cateCd=014" >
                    책
                  </Category>
                </li>
                <li>
                  <Category href="../goods/goods_list.php?cateCd=018" >
                    을지로에디션
                  </Category>
                </li>
                <li>
                  <Category href="../goods/goods_list.php?cateCd=011" >
                    ㅋㅋ에디션
                  </Category>
                </li>
                <li>
                  <Category href="../goods/goods_list.php?cateCd=017" >
                    배달이친구들
                  </Category>
                </li>
                <li>
                  <Category href="../goods/goods_list.php?cateCd=016" >
                    선물세트
                  </Category>
                </li>
                <li>
                  <Category href="../goods/goods_list.php?cateCd=012" >
                    콜라보레이션
                  </Category>
                </li>
              </ULlist>
              
            </Menubox>
            {/* <!-- 상단 카테고리 출력 끝 --> */}
          </Gnb>
          {/* <!-- //gnb --> */}

          {/* <!-- //gnb_allmenu --> */}
        </Headergnb>
      </React.Fragment>
    
  );
};

const All_gnb = styled.div `
    display: none;
    vertical-align: top;
    text-align: left;
`;
const Headergnb = styled.div`
  background: #fff;
`;

const Gnb = styled.div`
  position: relative;
`;

const Menubox = styled.div`
  width: 1130px;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 0 5px 0 55px;
  padding: 0 12px;
`;
const Left = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  font-size: 0;
  vertical-align: top;
  display: none;
`;
const ULlist = styled.div`
  display:flex;
  overflow: visible;
  height: 100%;
  font-size: 0;
  vertical-align: top;
  border: none;
  text-align: center;

    
`;
const Category = styled.a`
  
  text-decoration:none ; 
  
  padding: 0 19px;
  font-size: 16px;
  color: #333;
  font-weight: bold;
  text-align: center;
  line-height: 55px;
  
  &:active {
    border-bottom: 3px solid #30c1c3;
    height: 55px;
    box-sizing: border-box;
    color:#30c1c3;
    
   
    
    
  } 
  
`;
const Atag = styled.a`
    
    font-size: 12px;
    line-height: 55px;
    width: 55px;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: #111;
    border-left: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
`
const Image = styled.image`
  vertical-align: middle;
`;


  
export default HeaderCategory;
