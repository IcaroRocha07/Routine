import React from "react";
import { Text } from "react-native";
import * as S from "./Login.styles";
import LOGO from "../../../../assets/LOGO.png";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/Button";

const Login: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerCenter>
        <S.Image source={LOGO} />
        <S.Title>Seu organizador de tarefas!</S.Title>
      </S.ContainerCenter>

      <S.ContainerMid>
        <S.Text>Vamos começar!</S.Text>
        <S.Padding>
          <Input label="Nome" placeholder="Digite seu nome." />
        </S.Padding>
        <S.PaddingInp>
          <Input label="Idade" placeholder="Digite sua idade." />
        </S.PaddingInp>
        <S.Button> 
        <Button text="Iniciar" type="primary"/>
        </S.Button>
       
      </S.ContainerMid>
    </S.Container>
  );
};

export default Login;
