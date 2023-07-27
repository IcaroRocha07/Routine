import styled from "styled-components/native";

export const Container = styled.View`
width: "100%";
align-items: center;
position:relative;
background-color:${({ theme }) => theme.colors.grayHome};
`
export const ContainerTop = styled.View`
margin-top:140px;
align-items: center;
`
export const Title = styled.Text`
font-size: 40px;
`
export const ContainerMid = styled.View`
width: "100%";
margin-top: 30px;
`
export const ContainerEspace = styled.View`
width: "100%";
margin-top: 35px;
`
export const Text = styled.Text`
font-size: 13px;
text-align: right;
margin-right: 20px;
margin-top: 25px;
left: 120px;
bottom: 10px

`