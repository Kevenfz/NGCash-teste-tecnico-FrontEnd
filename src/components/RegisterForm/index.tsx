import React from 'react'
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export const RegisterForm = () => {
  const navigate = useNavigate();
  
  return (
    <div>
        <S.InputRegisterField >
          <S.TitleRegisterModal>Crie sua conta</S.TitleRegisterModal>
          <S.InputLabelRegister>
            <S.LabelRegister className="label" htmlFor="email">
              Usuário
            </S.LabelRegister>
            <S.InputRegister

              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Digite seu e-mail"
            />
          </S.InputLabelRegister>
          
          <S.InputLabelRegister>
            <S.LabelRegister className="label" htmlFor="email">
              E-mail
            </S.LabelRegister>
            <S.InputRegister

              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Digite seu e-mail"
            />
          </S.InputLabelRegister>

          <S.InputLabelRegister>
            <S.LabelRegister className="label" htmlFor="password">
              Senha
            </S.LabelRegister>
            <S.InputRegister

              type="password"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Digite sua senha"
            />
          </S.InputLabelRegister>

          <S.btnLogin>cadastrar</S.btnLogin>
        </S.InputRegisterField>
    </div>
  )
}
