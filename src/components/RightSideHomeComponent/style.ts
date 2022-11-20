import styled, { css } from "styled-components";

export const MainSpace = styled.section`
  ${({ theme }) => css`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 3rem;
  `}
`;

export const ModalPix = styled.div`
  ${({ theme }) => css`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 2px solid black;
    border-radius: 1rem;
    box-sizing: border-box;
    gap: 3rem;
    background-color: #fff;
    /* margin-right: 10rem; */
  `}
`;

export const TitleModal = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.constants.fontSizeValue};
    border: transparent;
    border-bottom: 3px solid black;
    width: 75%;
    padding: 1rem;
  `}
`;

export const InfoUserPix = styled.div`
  ${({ theme }) => css`
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 1.5rem;
  `}
`;

export const InfoUser1 = styled.div`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1px;
  `}
`;

export const InfoUser2 = styled.div`
  ${({ theme }) => css`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 1px;
    border-bottom: 2px dashed #7431F3;
    padding: 1rem;
    margin-top: -2rem;
  `}
`;

export const NameUser = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeLoginForm};
  `}
`;

export const TypeCash = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeDefault1};
    color: #5a5a5aef;
  `}
`;

export const ValuePix = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeValueModal};
    font-weight: ${theme.constants.fontWeigthBold};
    color: ${theme.colors.hoverColor};
  `}
`;
