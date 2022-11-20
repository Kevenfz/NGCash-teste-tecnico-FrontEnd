import ImgHome from "../../assets/Images/ImgHome.png";
import * as S from "./style";

export const LeftSideHomeComponent = () => {
  return (
    <S.MainSpace className="leftSide">
      <S.ValueSpace className="value">R$ 3.139,30</S.ValueSpace>

      <S.BtnSpace className="infos">
        <S.Btns>transferir</S.Btns>
        <S.Btns>solicitar</S.Btns>
      </S.BtnSpace>

      <S.ImgHome src={ImgHome} alt="Imagem Ilustrativa de camapanha" />
    </S.MainSpace>
  );
};
