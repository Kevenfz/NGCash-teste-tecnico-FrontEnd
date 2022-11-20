import { useEffect, useState } from "react";
import { Transactions } from "../../mocks/transactions";
import { TransactionsType } from "../../types/types";
import * as S from "./style";

export const RightSideHomeComponent = () => {
  const [transactions, setTransactions] = useState<TransactionsType[]>([
    {
      user: "",
      typeCash: false,
      value: 0,
      date: "",
    },
  ]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    setTransactions(Transactions);
  };

  return (
    <S.MainSpace>
      <S.ModalPix>
        <S.TitleModal>Transações</S.TitleModal>

        <S.InfoUserPix>
          {transactions.map((tr) => (
            <>
              <S.InfoUser1>
                <S.NameUser>{tr.user}</S.NameUser>
                <p>{tr.date}</p>
              </S.InfoUser1>

              <S.InfoUser2>
                <S.TypeCash>{tr.typeCash == true ? "Cash-in" : "Cash-out"}</S.TypeCash>
                <S.ValuePix style={tr.value >= 0 ? {color:"#7431F3"} : {color:"#ff0000"}}>
                  {tr.value.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </S.ValuePix>
              </S.InfoUser2>
            </>
          ))}
        </S.InfoUserPix>
      </S.ModalPix>
    </S.MainSpace>
  );
};
