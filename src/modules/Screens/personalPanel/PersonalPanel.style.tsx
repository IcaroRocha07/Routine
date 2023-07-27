import styled from "styled-components/native";

export const Container = styled.SafeAreaView `
flex: 1;
background-color: ${({ theme }) => theme.colors.grayHome};
align-items: center;
position: relative;
` 
export const ContainerTop = styled.View `
height: 160px;
background-color: ${({ theme }) => theme.colors.blue};
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
display: flex;
flex-direction: row;
width: 100%;
` 
export const ContainerMid = styled.View `
align-items: center;
`
export const TextTop = styled.Text`
font-size: 28px;
margin-top: 50px;
`
export const ContainerDown = styled.View `
align-items: center;
width: 100%;
height: 100%
`
export const Box = styled.View `
width: 300px;
margin-top: 40px;
background-color: ${({ theme }) => theme.colors.white};
height: 122px;
border-radius: 20px
`

export const Scroll = styled.ScrollView `
flex: 1;
margin: 5px
`

export const Button = styled.View `
position: absolute;
bottom: 40px;
right: 10px
` 