import * as S from "./style";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../types/types";
import { Users } from "../../mocks/users";
import { toast, ToastContainer } from "react-toastify";

export const LoginForm = () => {
  const [values, setValues] = useState<UserType>({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState<UserType[]>([
    {
      email: "",
      password: "",
    },
  ]);

  useEffect(() => {
    setUsers(Users);
  }, []);

  const navigate = useNavigate();

  const handleChangesValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: UserType) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAuthLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    users.map((user) => {
      if (user.email == values.email && user.password == values.password) {
        toast.success("Login efetuado com sucesso!");
        console.log("Deu certo!");
        
        setTimeout(() => {
          navigate("/register");
        }, 2000);

      } else if (user.email != values.email && user.password != values.password) {
        toast.error("Email ou senha inválidos!");
        console.log("Deu errado!");
      }
    });

    // console.log("map", users);
    // console.log("values", values);
  };

  return (
    <div>
      <S.InputLoginField onSubmit={handleAuthLogin}>
        <S.TitleLoginModal>Login</S.TitleLoginModal>
        <S.InputLabelLogin>
          <S.LabelLogin className="label" htmlFor="email">
            E-mail
          </S.LabelLogin>
          <S.InputLogin
            onChange={handleChangesValues}
            type="text"
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
            onChange={handleChangesValues}
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Digite sua senha"
          />
        </S.InputLabelLogin>

        <S.LinkRegisterPage>
          <S.pLoginPage>Não tem conta? </S.pLoginPage>
          <S.spanLoginPage onClick={() => navigate("/register")}>
            Cadastre-se
          </S.spanLoginPage>
        </S.LinkRegisterPage>

        <S.btnLogin>entrar</S.btnLogin>
      </S.InputLoginField>
      
    </div>
  );
};
