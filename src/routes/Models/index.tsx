import { StackNavigationProp } from "@react-navigation/stack";

export type propsNavigationStack = {
  Login: undefined;
  Selector: undefined;
  PersonalPanel: undefined;
};

export type propsStack = StackNavigationProp<propsNavigationStack>;
