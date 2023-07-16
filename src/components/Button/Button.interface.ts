import { TouchableOpacityProps } from "react-native";

export interface IButton extends TouchableOpacityProps {
  text: string;
  type: "primary" | "secondary";
}
