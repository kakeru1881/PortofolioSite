import React from 'react';
import styled from "styled-components";
import backgroundPc from '../../pages/img/background-pc.jpg'

export const HomeHeader = () => {

  return (
    <>
      <SContainer>
        <Stitle>Who we are</Stitle>
        <SContent>
          商品やサービスを周知するために必要なランディングページ（LP）作成を承ります。各店舗の需要予測と利益の最大化を目的とした施策なら何なりとお申し付けください。</SContent>
      </SContainer>
    </>
  );
}


// HEADER
const SContainer = styled.div`
  text-align: center;
  height: 80vh;
  min-height: 500px;
  background-image: url(${backgroundPc});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  filter: sepia(30%);
  `

const Stitle = styled.h1`
  font-family: 'Noto Serif',serif;
  font-weight: 400;
  font-size: 34px;
  letter-spacing: .08em;
  color: #fff;
`
const SComment = styled.p`
  margin: 0 auto;
  width: fit-content;
  max-width: 500px;
  font-size: 10px;
  letter-spacing: .05em;
  line-height: 24px;
`

const SContent = styled.p`
  margin: 10px auto 0 auto;
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  width: 90%;
  max-width: 500px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #333333; 
  background-color: #555;
`
