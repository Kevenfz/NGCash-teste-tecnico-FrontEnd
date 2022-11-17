import React from "react";
import * as S from "./style";
import Logo from "../../assets/Icons/LogoNGCash.png";
import Doguinho from "../../assets/Icons/NGDoguinho.png";

export const LoginPage = () => {
  return (
    <S.MainSection>
      <S.MidField>
        <S.LogoField>
          <S.LogoNG src={Logo} />
        </S.LogoField>

        <S.ModalField>
          <h1>Login</h1>
          <div className="PositionsMidModal">
            
            <form action="">
              <div>
                <label htmlFor="">Nome de usuário ou e-mail</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Senha</label>
                <input type="text" />
              </div>
              <button>Entrar</button>
            </form>

            <img src={Doguinho} alt="" />
          </div>
        </S.ModalField>
      </S.MidField>
    </S.MainSection>
  );
};
