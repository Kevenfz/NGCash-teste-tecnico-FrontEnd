import React from "react";
import { RegisterForm } from "../../components/RegisterForm";
import ImgModal from "../../assets/Icons/WhatsApp_Image_2022-11-16_at_00.38.44-removebg-preview.png";
import Logo from "../../assets/Icons/LogoNGCash.png";
import * as S from "./style";

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