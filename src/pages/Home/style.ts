import styled, { css } from "styled-components";
import BackgroundImg from "../../assets/Images/backgroundHome2.jpg";

export const MainSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background: url(${BackgroundImg});
    background-size: contain;
    background-repeat: repeat;
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
  `}
`;
