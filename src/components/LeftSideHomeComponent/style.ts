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

export const ValueSpace = styled.div`
  ${({ theme }) => css`
    width: 59%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: #fff;
    font-size: ${theme.constants.fontSizeValue};
    border: 2px solid black;
    border-radius: 1rem;
  `}
`;

export const BtnSpace = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 3rem;
  `}
`;

export const Btns = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnHomePage}
  `}
`;

export const ImgHome = styled.img`
  ${({ theme }) => css`
    width: 30rem;
  `}
`;
