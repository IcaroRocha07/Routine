import styled from 'styled-components/native';


  export const Container = styled.View`
  width: 100%;;
`;
  export const TextInput = styled.TextInput`
  height: 40px;
  color: white;
`;
export const Line = styled.View`
  width: 80%;
  height: 2px;
  margin-top: 1px;
  border: #3DAA36;
`;
export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.background};
  font-size: 18px;
  
  `;