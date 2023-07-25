import React from "react";
import * as S from "./Login.styles";
import LOGO from "../../../../assets/LOGO.png";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../../routes/Models";


const Login: React.FC = () => {
  const navigation = useNavigation<propsStack>();


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
        <Button 
          text="Iniciar" 
          type="primary"
          textDesc=""
          onPress={() => navigation.navigate("Selector")}
          />
        </S.Button>
       
      </S.ContainerMid>
    </S.Container>
  );
};

export default Login;

