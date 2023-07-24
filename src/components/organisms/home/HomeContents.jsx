import React from 'react';
import styled from "styled-components";
import media from 'styled-media-query';
import { LinkButton } from '../../atoms/button/LinkButton';

export const HomeContents = (props) => {
    const { menus } = props;
    return (
        <>
            {/* <img src="../img/history.jpg"></img>
            <img src="../img/skill.jpg"></img>
            <img src="../img/product.jpg"></img> */}

            {
                React.Children.toArray(menus.map((e) => (
                    // 条件分岐で１つ目２つ目とかで分けるか
                    <SContentsContainer>
                            <SContentTitle>{e.title}</SContentTitle>
                                <LinkButton url={e.url}>VIEW MORE</LinkButton>
   
                    </SContentsContainer>
                )))
            }
        </>
    );
}

const SContentsContainer = styled.div`
  width: 500px;
  height: auto;
  min-height: 60vh;
  max-height: 500px;
  margin: 100px auto;
  position: relative;
  background-size:  cover;
  background-repeat: no-repeat;
  
 :nth-of-type(1) {
  margin: 53px auto 0 10px;
  background-image: url('${window.location.origin}/img/history.jpg');
  filter: grayscale(70%);
    :hover{
        filter: blur();
    }
 }
 :nth-of-type(2) {
    margin: 50px auto 0 10px;
  background-image: url('${window.location.origin}/img/skill.jpg');
  filter: grayscale(70%); 
      :hover{
        filter: blur();
    } 
 }
 :nth-of-type(3) {
    margin: 50px auto 50px 10px;
  background-image: url('${window.location.origin}/img/product.jpg');
  filter: grayscale(70%);
        :hover{
        filter: blur();
    } 
 }

`


// CONTENTS
const SContents = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: row;
  ${media.lessThan("small")`
    width: 100%;
  `}
`

const SContentTitle = styled.p`
  color: #000000;
  font-size: 20px;
  margin: 18px auto 30% auto;
  border: 1px solid #fff; 
  background-color: #fff;
`

// const SContentsImg = styled.img`
//   width: 500px;
//   height: auto;
// `