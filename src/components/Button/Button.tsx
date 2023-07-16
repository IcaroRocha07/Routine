import React from "react";
import { View } from "react-native";
import { IButton } from "./Button.interface";
import * as S from "../Button/Button.style";

const Button: React.FC<IButton> = ({ text, type, ...props }) => {
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
        
         : (
          <S.Container {...props}>
            <S.TitleSecondary>{text}</S.TitleSecondary>
          </S.Container>
        )}
      </View>
    );
  };
  
  export default Button;