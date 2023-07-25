import { TouchableOpacityProps } from "react-native";

export interface IButton extends TouchableOpacityProps {
  text: string;
  textDesc: any;
  type: "primary" | "secondary" | "select";
}
