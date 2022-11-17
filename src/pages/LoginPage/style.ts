import styled, { css } from "styled-components";
import BackgroundImg from "../../assets/Images/NGCashBackground.png";

export const MainSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const MidField = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: url(${BackgroundImg});
    background-size: contain;
    background-repeat: repeat;
    gap: 1rem;
  `}
`;

export const LogoField = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
  `}
`;

export const LogoNG = styled.img`
  ${({ theme }) => css`
    width: 18rem;
    /* height: 10rem; */
  `}
`;

export const ModalField = styled.div`
  ${({ theme }) => css`
    width: 80%;
    height: 80%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.799);
    border-radius: 1rem;
    margin-bottom: 1rem;
  `}
`;
