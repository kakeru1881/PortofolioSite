import React from 'react';
import styled from "styled-components";
import media from 'styled-media-query';
import { LinkButton } from '../../atoms/button/LinkButton';

export const HomeContents = (props) => {
  const { menus } = props;
  return (
    <div>
      <SContentsContainer>
        {menus.map((e, index) => (
          <div key={index}>
            <SContentImageContainer>
              {/* 画像をクリックするとURLにリンク */}
              <Element>
                <SContentImageWrapper>
                <LinkButton url={e.url}>
                  <SContentImage src={e.image} alt={e.title} />
                </LinkButton>
                </SContentImageWrapper>
                <SContentBack>
                  <SContentTitle>{e.title}</SContentTitle>
                  <SContentDetail>{e.explain}</SContentDetail>
                </SContentBack>
              </Element>
            </SContentImageContainer>
          </div>
        ))}
      </SContentsContainer>
    </div>
  );
};

const SContentsContainer = styled.div`
  display: flex;
  flex-direction: row; /* 横並びに配置 */
  align-items: center;
  margin-bottom: 20px;
  margin-top: 0px;
  width: 100%;
  height: 500px;
  justify-content: center;
  position: relative;

  ${media.lessThan("small")`
    flex-direction: column; /* 縦並びに配置 */
    height: auto;
  `}
`;

const Element = styled.div`
`
const SContentImageWrapper = styled.div`
  // ... (他のスタイル)
`;

const SContentImageContainer = styled.div`
  margin: 0px;
  flex: 1; /* 均等幅に分配 */
  display: flex;
  justify-content: center; /* 水平方向に中央寄せ */
  position: relative; /* 要素を重ねるために相対位置指定 */

`;

const SContentImage = styled.img`
  width: 100%;
  max-height: 300px; /* 画像の最大高さを指定 */
  object-fit: cover;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
    filter: blur(1px);
  }
`;

const SContentBack = styled.div`
  background-color: #F2F2F2;
  color: #555555;
  width: 70%;
  padding: 20px;
  position: absolute; /* 絶対位置指定 */
  top: 100%; /* 画像の中央に配置 */
  left: 50%;
  transform: translate(-50%, -50%); /* 中央寄せ */
  ${media.lessThan("small")`
    font-size 5px;
    padding: 10px;
    top: 80%;
  `}
`;

const SContentTitle = styled.div`
  font-size: 15px;
  color: #fff;
  text-align: center;
  width: 50%;
  height: 18px;
  background-color: black;
  padding: 4px 4px;
  ${media.lessThan("small")`
    font-size: 6px;
    padding: 2px 2px;
    width: 25%;
  `}
`;

const SContentDetail = styled.div`
  margin: 10px 0 0;
  width: 100%;
  height: auto;

  ${media.lessThan('small')`
    width: 100%;
    font-size: 10px;
  `}

`;

