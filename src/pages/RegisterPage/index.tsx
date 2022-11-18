import React from "react";
import * as S from "./style";
import Logo from "../../assets/Icons/LogoNGCash.png";
import ImgModal from "../../assets/Icons/WhatsApp_Image_2022-11-16_at_00.38.44-removebg-preview.png";
import { LoginForm } from "../../components/LoginForm";
import { RegisterForm } from "../../components/RegisterForm";

export const RegisterPage = () => {
  return (
    <S.MainSection>
      <S.MidField>
        <S.LogoField>
          <S.LogoNG src={Logo} />
        </S.LogoField>

        <S.ModalField>
          
          <S.InfoSpace >
            <RegisterForm />
            <S.ImgModal src={ImgModal} alt="Imagem ilustrativa campanha NG, Doguinho" />
          </S.InfoSpace>

        </S.ModalField>
      </S.MidField>
    </S.MainSection>
  );
};