import React from 'react';
import * as S from "./Register.styles";
import { IRegister } from './Register.interface';

const Register: React.FC<IRegister> = ({onPress}) => {
    return (
        <S.RegisterContainer onPress={onPress}>
          <S.Image source={require('.././../../assets/mais.png')}/>
        </S.RegisterContainer>
    )
}

export default Register;