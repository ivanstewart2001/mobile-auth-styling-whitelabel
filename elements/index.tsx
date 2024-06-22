import { Text as RNText, View as RNView } from "react-native";
import { styled } from "nativewind";
import {
  Layout as UIKLayout,
  Button as UIKButton,
} from "@ui-kitten/components";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

export const View = styled(RNView);
export const Text = styled(RNText);
export const Layout = styled(UIKLayout);
export const Button = styled(UIKButton);
export const SafeAreaView = styled(RNSafeAreaView);
