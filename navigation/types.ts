import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NavigationType = {
  Home: undefined;
  Profile: undefined;
};

export type HomeProps = NativeStackScreenProps<NavigationType, "Home">;
export type ProfileProps = NativeStackScreenProps<NavigationType, "Profile">;
