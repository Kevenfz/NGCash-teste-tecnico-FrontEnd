import styled, { css } from "styled-components";

export const InputLoginField = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    margin-top: .5rem;
    font-family: ${theme.constants.fontFamily};
  `}
`;

export const TitleLoginModal = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeBtnLoginForm};
    color: ${theme.colors.primaryColor};
  `}
`;

export const InputLabelLogin = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-bottom: 1rem;
    .label {
      font-family: ${theme.constants.fontFamily};
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const LabelLogin = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeLabelForm};
    font-family: ${theme.constants.fontFamily};
    font-weight: ${theme.constants.fontWeigthBold};
    color: ${theme.colors.primaryColor};
    margin-bottom: .3rem;
  `}
`;

export const InputLogin = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    width: 24rem;
    font-size: ${theme.constants.fontSizeDefault1};
    border: 2px solid transparent;
    border-bottom-color: ${theme.colors.primaryColor};
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: ${theme.colors.primaryColor};
    font-weight: ${theme.constants.fontWeigthBold};
    :focus {
      background: none;
      border-bottom: 2px solid ${theme.colors.hoverColor};
    }
    ::placeholder {
      color: #8e8e8e;
      font-size: .9rem;
    }
  `}
`;

export const LinkRegisterPage = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.4rem;
    margin-top: -2rem;
    margin-left: .7rem;
  `}
`;

export const pLoginPage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-size: ${theme.constants.fontSizeSpanLoginForm};
    text-align: center;
    font-weight: bold;
  `}
`;

export const spanLoginPage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.hoverColor};
    font-size: ${theme.constants.fontSizeSpanLoginForm};
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.02);
    }
  `}
`;

export const btnLogin = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnLoginPage}
  `}
`;
