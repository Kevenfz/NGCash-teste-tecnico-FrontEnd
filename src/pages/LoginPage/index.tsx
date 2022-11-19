import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/Icons/LogoNGCash.png";
import Doguinho from "../../assets/Icons/NGDoguinho.png";
import { LoginForm } from "../../components/LoginForm";
import { ToastContainer } from "react-toastify";

export const LoginPage = () => {
  return (
    <S.MainSection>
      <S.MidField>
        <S.LogoField>
          <S.LogoNG src={Logo} />
        </S.LogoField>

        <S.ModalField>
          <S.InfoSpace>
            <LoginForm />
            <S.DogImg
              src={Doguinho}
              alt="Imagem ilustrativa campanha NG, Doguinho"
            />
          </S.InfoSpace>
        </S.ModalField>
      </S.MidField>
    </S.MainSection>
  );
};
