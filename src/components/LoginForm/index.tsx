import * as S from "./style";
import React from 'react'
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  
  return (
    <div>
        <S.InputLoginField >
          <S.TitleLoginModal>Login</S.TitleLoginModal>
          <S.InputLabelLogin>
            <S.LabelLogin className="label" htmlFor="email">
              Nome de usuário ou e-mail
            </S.LabelLogin>
            <S.InputLogin

              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Digite seu e-mail"
            />
          </S.InputLabelLogin>

          <S.InputLabelLogin>
            <S.LabelLogin className="label" htmlFor="password">
              Senha
            </S.LabelLogin>
            <S.InputLogin

              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Digite sua senha"
            />
          </S.InputLabelLogin>

          <S.LinkRegisterPage>
            <S.pLoginPage>Não tem conta? </S.pLoginPage>
            <S.spanLoginPage onClick={()  => navigate("/test")}>
              Cadastre-se
            </S.spanLoginPage>

          </S.LinkRegisterPage>

          <S.btnLogin>entrar</S.btnLogin>
          
        </S.InputLoginField>
    </div>
  )
}
