import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logout from "../../assets/Icons/IconLogout.png";
import Logo from "../../assets/Icons/LogoNGCash.png";
import { UserType } from "../../types/types";
import * as S from "./style";

export const HeaderComponent = (props: { userLoged: UserType }) => {
  const [userLogged, setUserLogged] = useState<UserType>({
    user: "",
    email: "",
  });

  const navigate = useNavigate();

  const LogoutBtn = () => {
    navigate("/");
    toast("Sessão encerrada");
  };

  useEffect(() => {
    setUserLogged(props.userLoged);
  }, []);

  return (
    <S.HeaderSpace className="Header">
      <S.LogoNG src={Logo} alt="Logo NG.CASH" />
      <S.OptionsHeader>
        <S.Options>BENEFÍCIOS</S.Options>
        <S.Options>TARIFAS</S.Options>
        <S.Options>AJUDA</S.Options>
        <S.Options>SEGURANÇA</S.Options>
        <S.Options>CARREIRAS</S.Options>
        <S.Options>PARCERIAS</S.Options>
      </S.OptionsHeader>

      <S.UserSpace>
        <S.UserOption>
          {props.userLoged ? `Olá, ${props.userLoged.user}` : ""}
        </S.UserOption>
        {props.userLoged ? (
          <S.IconLogout
            onClick={LogoutBtn}
            src={Logout}
            alt="Icone para deslogar-se"
          />
        ) : (
          ""
        )}
      </S.UserSpace>
    </S.HeaderSpace>
  );
};
