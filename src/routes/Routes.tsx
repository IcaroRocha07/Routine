import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { propsNavigationStack } from "./Models";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Login from "../modules/auth/Login/Login";
import Selector from "../modules/Screens/selector/Selector";

// Componente de navegação
const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Login" component={Login} />
        <Screen name="Selector" component={Selector} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
