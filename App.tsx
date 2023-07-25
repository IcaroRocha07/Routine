import React, { ReactElement } from "react";
import { SafeAreaView } from "react-native";
import { useTheme, ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { StatusBar } from "expo-status-bar";
import AppRoutes from "./src/routes/Routes";


const ApplicationContent = () => {
  return (
    <>

    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={"#DA701F"} />
      <AppRoutes />
    </SafeAreaView>
  </>
  );
};

function App(): ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationContent />
      </ThemeProvider>
    </>
  );
}

export default App;
