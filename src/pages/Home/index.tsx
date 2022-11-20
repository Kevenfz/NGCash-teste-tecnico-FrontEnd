import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HeaderComponent } from "../../components/HeaderComponent";
import { LeftSideHomeComponent } from "../../components/LeftSideHomeComponent";
import { RightSideHomeComponent } from "../../components/RightSideHomeComponent";
import { UserType } from "../../types/types";
import * as S from "./style";

export const Home = () => {
  const [userLogged, setUserLogged] = useState<UserType>({
    user: "",
    email: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const dataUser = JSON.parse(data);
      setUserLogged(dataUser);
    } else {
      toast.error("Você não tem autorização para acessar esta página.");
      navigate("/");
    }
  }, []);

  const data = localStorage.getItem("user");

  return (
    <S.MainSection>
      <HeaderComponent userLoged={userLogged} />

      <S.InfoSpace>
        <LeftSideHomeComponent />
        <RightSideHomeComponent />
      </S.InfoSpace>
    </S.MainSection>
  );
};
