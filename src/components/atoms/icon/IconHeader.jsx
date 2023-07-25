import styled from 'styled-components';
import media from "styled-media-query";
import { SA, SLi, SUl } from './IconCss';

export const IconHeader = () => {
  return (
    <>
      <SIcons>
        <SIconLink><a href='https://twitter.com/kishida230'target='_blank' rel="noreferrer"><i className="fab fa-twitter gold fa-lg"></i></a></SIconLink>
        <SIconLink><a href='https://github.com/kakeru1881' target='_blank' rel="noreferrer"><i className="fab fa-github gold fa-lg"></i></a></SIconLink>
      </SIcons>
    </>
  );
}

const SQiita = styled(SA)`
  background: #000000;
  ${media.lessThan("medium")`
    margin: 6px 0 0 0px;
  `}
`
const SIcons = styled(SUl)`
  position: absolute;
  left: 0;
  width: 17px;
  height: 44px;
  ${media.lessThan("small")`
    display: none;
  `}
`
const SIconLink = styled(SLi)`
  ${media.lessThan("medium")`
    margin: 0 0 0 5px;
  `}
`
