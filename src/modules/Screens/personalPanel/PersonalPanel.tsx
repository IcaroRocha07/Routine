import React from "react";
import * as S from "./PersonalPanel.style";
import DateButton from "../../../components/DateButton/DateButton";




const PersonalPanel: React.FC = () => {

    return (
            
        <S.Container>
            <S.ContainerTop>
               <DateButton  text="S"number={'02'}/> 
            </S.ContainerTop>

            <S.ContainerMid>
                <S.TextTop>Este é seu Painel Pessoal!</S.TextTop>
            </S.ContainerMid>

            <S.ContainerDown>
                    <S.Box></S.Box>
                    <S.Box></S.Box>
                    <S.Box></S.Box>
            </S.ContainerDown>

        </S.Container>
                
    )
}

export default PersonalPanel;