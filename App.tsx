import { View } from "react-native";
import AboutScreen from "./components/review/about";
import DetailScreen from "./components/review/detail";
import HomeScreen from "./components/review/home";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();
const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={HomeScreen} options={{ title: "Trang Chủ" }}></Stack.Screen>
        <Stack.Screen name='review-detail' component={DetailScreen} options={{ title: "Chi tiết review" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
