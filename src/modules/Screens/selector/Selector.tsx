import React from "react";
import * as S from "./Selector.style";
import Button from "../../../components/Button/Button";

const Selector: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerTop>
        <S.Title>Seletor de rotina</S.Title>
      </S.ContainerTop>

      <S.ContainerMid>
        <S.ContainerEspace>
          <Button
            type="select"
            text="Pessoal"
            textDesc="Aqui poderá criar sua rotina pessoal!"
          ></Button>
        </S.ContainerEspace>
        <S.ContainerEspace>
          <Button
            type="select"
            text="Acadêmica"
            textDesc="Aqui poderá criar sua rotina de estudos!"
          ></Button>
        </S.ContainerEspace>
        <S.ContainerEspace>
          <Button
            type="select"
            text="Profissional"
            textDesc="Aqui poderá criar sua rotina de trabalho!"
          ></Button>
        </S.ContainerEspace>
        <S.ContainerEspace>
          <Button
            type="select"
            text="Lembrete"
            textDesc="Aqui poderá criar seus lembretes!"
          ></Button>
        </S.ContainerEspace>
      </S.ContainerMid>
      <S.Text>Powered by Rudá & Ícaro</S.Text>
    </S.Container>
  );
};
export default Selector;
