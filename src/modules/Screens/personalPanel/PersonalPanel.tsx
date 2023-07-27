import React from "react";
import * as S from "./PersonalPanel.style";
import DateButton from "../../../components/DateButton/DateButton";
import RegisterButton from "../../../components/RegisterButton/Register";

const PersonalPanel: React.FC = () => {
  const handleButton = () => {
    console.log("botao acionado");
  };

  return (
    <S.Container>
      <S.ContainerTop>
        <S.Scroll horizontal showsHorizontalScrollIndicator={false}>
          <DateButton text="S" number={"02"} />
          <DateButton text="T" number={"03"} />
          <DateButton text="Q" number={"04"} />
          <DateButton text="Q" number={"05"} />
          <DateButton text="S" number={"06"} />
          <DateButton text="S" number={"07"} />
          <DateButton text="D" number={"09"} />
          <DateButton text="S" number={"10"} />
          <DateButton text="T" number={"11"} />
          <DateButton text="Q" number={"12"} />
        </S.Scroll>
      </S.ContainerTop>

      <S.ContainerMid>
        <S.TextTop>Este é seu Painel Pessoal!</S.TextTop>
      </S.ContainerMid>

      <S.Scroll showsVerticalScrollIndicator= {false}>
        <S.ContainerDown>
          <S.Box></S.Box>
          <S.Box></S.Box>
          <S.Box></S.Box>
          <S.Box></S.Box>
          <S.Box></S.Box>
        </S.ContainerDown>
      </S.Scroll>
      <S.Button>
      <RegisterButton onPress={handleButton} />
      </S.Button>
    </S.Container>
  );
};

export default PersonalPanel;
