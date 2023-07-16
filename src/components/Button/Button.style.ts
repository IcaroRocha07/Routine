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