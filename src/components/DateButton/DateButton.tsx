import React from "react";
import { View } from "react-native";
import * as S from "./DateButton.style";
import { IDate } from "./DateButon.interface";

const DateButton: React.FC<IDate> = ({ text,number, ...props }) => {
    return (   
        <View>
            <S.Container {...props}>
                <S.ContainerDate>
                    <S.Text>{text}</S.Text>
                    <S.Day>{number}</S.Day>
                </S.ContainerDate>
            </S.Container>
        </View>
        
    );
};

export default DateButton;