import React, { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import Doguinho from "../../assets/Icons/NGDoguinho.png";
import Logo from "../../assets/Icons/LogoNGCash.png";
import * as S from "./style";


export const LoginPage = () => {
  return (
    <S.MainSection>
      <S.MidField>
        <S.LogoField>
          <S.LogoNG src={Logo} alt="Logo NG.CASH" />
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
