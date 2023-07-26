import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";
import { SkilCards } from '../organisms/skill/SkillCards';
import backgroundHeader from './img/background-header-skill.jpg'

const skills = [
  {
    title: '○○様',
    start: '2020/9',
    // business: true,
    comment: 'コーポレートサイト内のグラフィックもフルリニューアルすることとなりビジュアルを制作。',
  },
  {
    title: '△△△△様',
    start: '2020/9',
    // business: true,
    comment: '他社と差別化できる訴求ポイントを細かく精査し、サイト上の構成も含めて、分かりやすい表現で製品の魅力を紹介しています。',
  },
  {
    title: '□□□□□□様',
    start: '2020/12',
    // business: true,
    comment: '撮影、CG制作、映像プランニングなど、広告ビジュアル制作で培ったノウハウをフルに活用。',
  },
]

export const Skill = () => {
  return (
    <>
      <SContentContainer>
        <SHeader>
          <STitleContainer>
            <STitle>Skill</STitle>
            <SContent>[ LP作成, SEO対策, 業務システム開発, DX支援 ]</SContent>
          </STitleContainer>
        </SHeader>
        <SMainContainer>
          <SDetailTitle>Details</SDetailTitle>
          <SkilCards skills={skills}></SkilCards>
        </SMainContainer>
      </SContentContainer>
    </>
  );
}
const SMainContainer = styled.div`
  background: linear-gradient(#000, #201c09);
  padding: 0 60px;
  ${media.lessThan("small")`
    padding: 0 30px;
  `}
`
const SDetailTitle = styled.h3`
  font-family: 'Noto Serif',serif;
  text-align: left;
  font-size: 24px;
  letter-spacing: .08em;
  padding: 40px 0 20px 0;
`

const SContentContainer = styled.div`
  width: 100%;
  height: auto;
`
const SHeader = styled.div`
  height: 300px;
  background-image: url(${backgroundHeader});
  background-size:  cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ::before {
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: ' ';
  }
`
const STitleContainer = styled.div`
  padding: 0 60px;
  display: flex;
  position: relative;
  ${media.lessThan("small")`
    display: block;
    padding: 0 30px;
  `}
`
const STitle = styled.h2`
  font-family: 'Noto Serif',serif;
  font-size: 24px;
  letter-spacing: .08em;
  width: 120px;
  color: #fff;
`
const SContent = styled.p`
  font-size: 13px;
  letter-spacing: .05em;
  line-height: 24px;
  color: #fff;
  min-width: 300px;
  width: fit-content;
  ${media.lessThan("small")`
    min-width: auto;
  `}
`