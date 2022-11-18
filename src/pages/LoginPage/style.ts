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
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: url(${BackgroundImg});
    background-size: contain;
    background-repeat: repeat;
    gap: 2rem;
  `}
`;

export const LogoField = styled.div`
  ${({ theme }) => css`
    position: relative;
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
    position: absolute;
    width: 20rem;
    left: 18rem
    /* height: 10rem; */
  `}
`;

export const ModalField = styled.div`
  ${({ theme }) => css`
    width: 67%;
    height: 55%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000ef;
    border-radius: 1rem;
    /* margin-bottom: 1rem; */
  `}
`;

export const InfoSpace = styled.div`
  ${({ theme }) => css`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `}
`;

export const DogImg = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 6rem;
    left: 45rem;
    width: 62rem;
  `}
`;
