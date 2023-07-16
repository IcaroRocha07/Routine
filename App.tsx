import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/modules/auth/Login/Login';
import { useTheme, ThemeProvider } from "styled-components";
import theme from './src/styles/theme';

export default function App () {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Login/>
    </ThemeProvider>
    </>
    
  );
}
