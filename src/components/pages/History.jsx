import styled from "styled-components";
import media from "styled-media-query";
import { HistoryCard } from "../organisms/history/HistoryCard";

const step = [{
    title: 'システム開発',
    startDate: '2021/4',
  content:` 大規模金融システムの開発`,
  },
  {
    title: 'サーバーセキュリティ',
    startDate: '2022/2',
    content:`Cloud Security (CSPM)構築/導入/運用、EDR構築/導入/運用脆弱性診断`,
  },
  {
    title: 'Web制作',
    startDate: '2023/8',
    content:`企画制作及びインターネットマーケティング、LP作成/運用`,
  },
 
]

export const History = () => {
  return (
    <>
      <STitle>History</STitle>
      <SContainer>
        <HistoryCard step={step}></HistoryCard>
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  max-width: 1170px;
  padding: 0 0 0 32px;
  margin: 32px 0 64px;
  position: relative;
  ::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 105%;
    background: #bea76f;
    position: absolute;
    left: 30px;
  }

  ${media.greaterThan("large")`
    margin: 64px auto;
    padding: 0 32px;
    ::before {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
  `}
`
const STitle = styled.h2`
  margin: 0 0 0 70px;
  font-size: 24px;
  letter-spacing: .08em;
  color: #fff;
  font-family: "Noto Serif",serif;
  font-style: normal;
  font-weight: 400;
  ${media.greaterThan("large")`
    width: 100%;
    margin: 0;
    text-align: center;
  `}
`