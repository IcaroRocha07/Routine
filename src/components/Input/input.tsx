import React, { useState } from "react";
import { View } from "react-native";
import { TInput } from "./input.interface";
import * as S from "./Input.styles";

// import { Container } from './styles';

const Input: React.FC<TInput> = ({ label, ...props }) => {
  const [setText] = useState("");

  return (
    <View>
      <S.Label>{label}</S.Label>
      <S.TextInput {...props} placeholderTextColor={"grey"} />
      <S.Line/>
    </View>
  );
};

export default Input;
