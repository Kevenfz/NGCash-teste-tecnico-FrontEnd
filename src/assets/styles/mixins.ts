import { css } from "styled-components";

const MainBackground = () => css`
  width: 100%;
  height: 100%;
  /* background-image: url(../Images/folhas.png);
  background-position: center center;
  background-attachment: local;
  background-repeat: repeat;
  background-size: cover; */
`;

const BtnLoginPage = () => css`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 2.5rem;
    /* padding: 0.5rem; */
    border: 1.5px solid black;
    border-radius: 1rem;
    font-family: ${theme.constants.fontFamily};
    font-size: ${theme.constants.fontSizeBtnLoginForm};
    font-weight: ${theme.constants.fontWeigthBold};
    color: ${theme.colors.secundaryColor};
    background-color: ${theme.colors.primaryColor};
    transition: all 0.3s ease-in-out;
    margin-top: 1.6rem;
    :hover {
      -webkit-box-shadow: 11px 10px 0px -2px #7431f3;
      box-shadow: 11px 10px 0px -2px #7431f3;
      /* transform: scale(1.02); */
    }
  `}
`;

const BtnRegisterPage = () => css`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 2.5rem;
    /* padding: 0.5rem; */
    border: 1.5px solid black;
    border-radius: 1rem;
    font-family: ${theme.constants.fontFamily};
    font-size: ${theme.constants.fontSizeBtnLoginForm};
    font-weight: ${theme.constants.fontWeigthBold};
    color: ${theme.colors.secundaryColor};
    background-color: ${theme.colors.primaryColor};
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;
    margin-bottom: .7rem;
    :hover {
      -webkit-box-shadow: 11px 10px 0px -2px #7431f3;
      box-shadow: 11px 10px 0px -2px #7431f3;
      /* transform: scale(1.02); */
    }
  `}
`;

export const mixins = {
  MainBackground,
  BtnLoginPage,
  BtnRegisterPage,
};
