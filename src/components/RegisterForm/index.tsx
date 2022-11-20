import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUserType } from "../../types/types";
import { Users } from "../../mocks/users";
import * as S from "./style";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const [valuesUser, setValuesUser] = useState<RegisterUserType>({
    user: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangesValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuesUser((values: RegisterUserType) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    localStorage.setItem('user', JSON.stringify(valuesUser));
    if (localStorage) {

      const data = localStorage.getItem("user");
      const dataUser = JSON.parse(data);

      Users.push(dataUser);
      toast.success("Cadastro realizado com sucesso!")
      setTimeout(() => {
        navigate("/");
      }, 2000);

    }
  };

  return (
    <div>
      <S.InputRegisterField onSubmit={createUser}>
        <S.TitleRegisterModal>Crie sua conta</S.TitleRegisterModal>
        <S.InputLabelRegister>
          <S.LabelRegister className="label" htmlFor="user">
            Usuário
          </S.LabelRegister>
          <S.InputRegister
            onChange={handleChangesValue}
            type="text"
            id="user"
            name="user"
            autoComplete="off"
            placeholder="Digite seu usuário"
          />
        </S.InputLabelRegister>

        <S.InputLabelRegister>
          <S.LabelRegister className="label" htmlFor="email">
            E-mail
          </S.LabelRegister>
          <S.InputRegister
            onChange={handleChangesValue}
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
            onChange={handleChangesValue}
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
  );
};
