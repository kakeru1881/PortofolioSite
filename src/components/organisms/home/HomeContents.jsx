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
                                <Button>
                                <LinkButton url={e.url}>VIEW MORE</LinkButton>
                                </Button>
                            <SContentExplain>{e.explain}</SContentExplain>
                    </SContentsContainer>
                    
                )))
            }
        </>
    );
}

const SContentsContainer = styled.div`
  width: 500px;
  height: 300px;
  min-height: 50%;
  max-height: 100%;
  max-width: 100%;
  margin: 100px auto;
  position: relative;
  background-size:  cover;
  background-repeat: no-repeat;
  ${media.lessThan("small")`
    width: 50%;
    height: 50%;
  `}
 :nth-of-type(1) {
  margin: 10px auto 0 10px;
  background-image: url('${window.location.origin}/img/history.jpg');
  filter: grayscale(80%);

      :hover{
        filter: blur();
    } 
 }
 :nth-of-type(2) {
    margin: 10px auto 0 10px;
  background-image: url('${window.location.origin}/img/skill.jpg');
  filter: grayscale(80%); 
      :hover{
        filter: blur();
    } 
 }
 :nth-of-type(3) {
    margin: 50px auto 30px 10px;
  background-image: url('${window.location.origin}/img/product.jpg');
  filter: grayscale(90%);
        :hover{
        filter: blur();
    } 
 }
 

`
const Button = styled.div`
${media.lessThan("small")`
 transform: translate(50%, -50%) ;
    width: 50%;
    height: 50%;
  `}
`



// CONTENTS
// const SContents = styled.div`
//   width: 50%;
//   height: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: left;
//   flex-direction: row;
//   ${media.lessThan("small")`
//     width: 100%;
//   `}
// `

const SContentTitle = styled.p`
  color: #000000;
  font-size: 20px;
  margin: 18px auto 30% auto;
  background-color: #fff;
  ${media.lessThan("small")`
    font-size: 10px;
  `}
`

// const SContentsImg = styled.img`
//   width: 500px;
//   height: auto;
// `

const SContentExplain = styled.p`
  color:Black;
  font-size: 15px;
  position: absolute;
  max-width: 100%;
  text-align:left;
	background: #eaf5f9;
	padding: 1em;
	margin-top: 0%;
	box-shadow: 0 2px 3px #ccc;
  transform: translate(110%, -110%) ;
  ${SContentsContainer}:hover & {
    color:white;
    background:black;
  }
  ${media.lessThan("small")`
    font-size: 4px;
    width: auto;
    height: aut;
    transform: translate(110%, -110%) ;
  `}
`