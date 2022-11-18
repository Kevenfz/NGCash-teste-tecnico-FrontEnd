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
    width: 65%;
    height: 71%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: url(${BackgroundImg});
    background-size: contain;
    background-repeat: repeat;
    gap: 2rem;
    border-radius: 1rem;

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
    border-radius: 1rem;
  `}
`;

export const LogoNG = styled.img`
  ${({ theme }) => css`
    position: absolute;
    width: 20rem;
    left: 14.5rem
    /* height: 10rem; */
  `}
`;

export const ModalField = styled.div`
  ${({ theme }) => css`
    width: 78%;
    height: 68%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffffff;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    margin-top: -1rem
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

export const ImgModal = styled.img`
  ${({ theme }) => css`
    position: absolute;
    top: 22rem;
    left: 58rem;
    width: 29rem;
    /* height: 51rem; */

  `}
`;
