import styled, { css } from "styled-components";

export const MainSection = styled.section`
 ${({theme}) =>css`
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    `}
`;

export const InfoSpace = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 3rem;
  `}
`;
