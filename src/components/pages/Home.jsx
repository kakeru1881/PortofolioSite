import styled from 'styled-components';
import { HomeHeader } from '../organisms/home/HomeHeader';
import { HomeContents } from '../organisms/home/HomeContents';

const menus = [
  {
    // type: "right",
    title:"History",
    url:"/history",
    explain: "常に新しいビジュアルコミュニケーションを提供していくために日々進化しながら変革を続ける姿をご紹介します。",
    image: "./img/history.jpg",
  },
  {
    // type: "left",
    title:"Skill",
    url:"/skill",
    explain: "人の心を動かすビジュアルコミュニケーションのために。培ってきた表現力と最新のデジタル技術を最大限に活かして、お客様の伝えたい想いをより伝わるかたちへと変えていきます。",
    image: "./img/skill.jpg",
  },
  

  {
    // type: "right",
    title:"Products",
    url:"/products",
    explain: "ビジュアルからコンテンツ制作、製品開発、イベント私たちが手がけた最新の事例をご紹介。ご支援させていただいたお客様をご確認頂けます。",
    image: "./img/product.jpg",
  },
]



export const Home = () => {
  return (
    <>
    {/* タイトルと紹介文 */}
     <HomeHeader></HomeHeader>
     {/* メイン */}
      <SMainContainer>
        {/* <SHeaderImg src={backgroundDesk}/> */}
        {/* 各ページへのリンクコンテナ */}
        <HomeContents menus={menus}></HomeContents>

      </SMainContainer>
    </>
  );
}

// MAIN
const SMainContainer = styled.div`
`
const SHeaderImg = styled.img`
  height: auto;
  max-height: 500px;
  overflow: hidden;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`