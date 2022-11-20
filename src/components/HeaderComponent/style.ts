import styled, { css } from "styled-components";

export const HeaderSpace = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 9%;
    background-color: black;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 6rem;
    box-sizing: border-box;
  `}
`;

export const LogoNG = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    height: 5rem;
    margin-left: 3rem;
  `}
`;

export const OptionsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-family: ${theme.constants.fontFamily};
    font-weight: ${theme.constants.fontWeigthBold};
  `}
`;

export const Options = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.constants.fontFamily};
    font-weight: ${theme.constants.fontWeigthBold};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    :hover{
      color: #abababef;
    }
  `}
`;

export const UserOption = styled.p`
${({ theme }) => css`
  font-family: ${theme.constants.fontFamily};
  font-weight: ${theme.constants.fontWeigthBold};
  cursor: context-menu;
`}
`;

export const UserSpace = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-family: ${theme.constants.fontFamily};
    font-weight: ${theme.constants.fontWeigthBold};
    margin-left: 38rem;
  `}
`;

export const IconLogout = styled.img`
  ${({ theme }) => css`
    width: 3rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    :hover {
      transform: scale(1.08);
    }
  `}
`;
