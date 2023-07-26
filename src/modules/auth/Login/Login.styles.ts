import styled from "styled-components/native";

export const Container = styled.View`
  padding-top: 130px;
  background-color: ${({ theme }) => theme.colors.grayHome};
`;
export const Title =styled.Text`
font-size: 18px;
`
export const Image = styled.Image`
  margin-bottom: 10px;
`;
export const ContainerCenter = styled.View`
  align-items: center;
`;

export const ContainerMid = styled.View`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  height: 100%;
  border-radius: 35px;
  margin-top: 80px;
`;

export const Text = styled.Text`
font-size: 35px;
margin-top: 10%;
color: ${({ theme }) => theme.colors.white};
text-align: center;
`

export const Nome = styled.Text`
font-size: 20px;
margin-left: 40px;
`
export const Padding = styled.View`
  margin-top: 12%;
  width: 100%;
  padding-left: 38px;
  padding-top: 10px;
`;
export const PaddingInp = styled.View`
  margin-top: 15px;
  width: 100%;
  padding-left: 38px;
  padding-top: 10px;
`;
export const Button =styled.View`
width: 35%;
margin-left: 123px;
margin-top: 40px;
`