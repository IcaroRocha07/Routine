import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
background-color: ${({ theme }) => theme.colors.aqua};
width: 80%;
margin-top: 70px;
border-radius: 20px;
margin-left: 25px;
`
export const ContainerDate = styled.View `
align-items: center;
background-color: ${({ theme }) => theme.colors.white};
border-radius: 20px;
`
export const Day = styled.Text`
font-size: 20px;
padding-bottom: 10px;
`
export const Text = styled.Text`
font-size: 18px;
padding-top: 10px;
`