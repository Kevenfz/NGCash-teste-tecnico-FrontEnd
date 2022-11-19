import styled, { css } from "styled-components";

export const InputRegisterField = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    margin-top: -0.5rem;
    font-family: ${theme.constants.fontFamily};
  `}
`;

export const TitleRegisterModal = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.constants.fontSizeLoginForm};
    color: ${theme.colors.secundaryColor};
  `}
`;

export const InputLabelRegister = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    .label {
      font-family: ${theme.constants.fontFamily};
      color: ${theme.colors.secundaryColor};
    }
  `}
`;

export const LabelRegister = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.constants.fontSizeLoginForm};
    font-family: ${theme.constants.fontFamily};
    font-weight: ${theme.constants.fontWeigthBold};
    color: ${theme.colors.secundaryColor};
    margin-bottom: 0.3rem;
  `}
`;

export const InputRegister = styled.input`
  ${({ theme }) => css`
    background-color: transparent;
    width: 24rem;
    font-size: ${theme.constants.fontSizeDefault1};
    border: 2px solid transparent;
    border-bottom-color: ${theme.colors.secundaryColor};
    outline: 0;
    transition: all 0.3s ease-in-out;
    color: ${theme.colors.secundaryColor};
    font-weight: ${theme.constants.fontWeigthBold};
    :focus {
      background: none;
      border-bottom: 2px solid ${theme.colors.hoverColor};
    }
    ::placeholder {
      color: #8e8e8e;
      font-size: 0.9rem;
    }
  `}
`;

export const btnLogin = styled.button`
  ${({ theme }) => css`
    ${theme.mixins.BtnRegisterPage}
  `}
`;
