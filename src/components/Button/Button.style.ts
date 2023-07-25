import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.aqua};
  border-radius: 10px;
`;
export const BackgroundPrim = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange};
`;

export const TitlePrim = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.background};
`;

export const TitleSec = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.background};
`;

export const ContainerSec = styled.TouchableOpacity`
  width: 120px;
  height: 27px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
`;

export const BackgroundSec = styled.View`
  width: 120px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const TitleSecondary = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.poppins_semibold};
`;

export const ContainerSelect = styled.TouchableOpacity`
  width: 360px;
  height: 95px;
  background-color: ${({ theme }) => theme.colors.aqua};
  border-radius: 20px;
  margin-left: 16px;
`;
export const BackgroundSelect = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const TitleSelect = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
  `;

export const TitleDesc = styled.Text`
font-size: 15px;
color: ${({ theme }) => theme.colors.background};
text-align: center;
`;

export const LineW = styled.View`
  width: 85%;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid white;
`;