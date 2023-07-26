import React from "react";
import * as S from "./PersonalPanel.style";
import DateButton from "../../../components/DateButton/DateButton";
import RegisterButton from "../../../components/RegisterButton/Register";

const PersonalPanel: React.FC = () => {

    const handleButton = ( ) => {
        console.log('botao acionado')
    }

    return (
            
        <S.Container>
            <S.ContainerTop>
               <DateButton  text="S" number={'02'}/> 
               <DateButton  text="T" number={'03'}/>
               <DateButton  text="Q" number={'04'}/>
               <DateButton  text="Q" number={'05'}/>
               <DateButton  text="S" number={'06'}/>
               <DateButton  text="S" number={'07'}/>
               <DateButton  text="D" number={'08'}/> 
            </S.ContainerTop>

            <S.ContainerMid>
                <S.TextTop>Este é seu Painel Pessoal!</S.TextTop>
            </S.ContainerMid>

            <S.ContainerDown>
                    <S.Box></S.Box>
                    <S.Box></S.Box>
                    <S.Box></S.Box>
            </S.ContainerDown>
            <RegisterButton onPress={handleButton}/>
        </S.Container>
                
    )
}

export default PersonalPanel;