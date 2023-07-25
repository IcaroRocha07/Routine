import React from "react";
import { View } from "react-native";
import { IButton } from "./Button.interface";
import * as S from "../Button/Button.style";


const Button: React.FC<IButton> = ({ text, textDesc, type, ...props }) => {
    return (
      <View>
        {type === "primary" ? (
          <S.Container {...props}>
            <S.BackgroundPrim>
              <S.TitlePrim>{text}</S.TitlePrim>
            </S.BackgroundPrim>
          </S.Container>
        ) 
        : type === "secondary" ? (
          <S.ContainerSec {...props}>
            <S.BackgroundSec>
            <S.TitleSec>{text}</S.TitleSec>
            </S.BackgroundSec>
          </S.ContainerSec>
        ) 
        
        : type === "select" ? (
          <S.ContainerSelect {...props}>
            <S.BackgroundSelect>
            <S.TitleSelect>{text}</S.TitleSelect>
            <S.LineW/>
            <S.TitleDesc>{textDesc}</S.TitleDesc>
            </S.BackgroundSelect>
          </S.ContainerSelect>
        ) 
        
         : (
          <S.Container {...props}>
            <S.TitleSecondary>{text}</S.TitleSecondary>
          </S.Container>
        )}
      </View>
    );
  };
  
  export default Button;