import { View } from "react-native";
import AboutScreen from "./components/review/about";
import DetailScreen from "./components/review/detail";
import HomeScreen from "./components/review/home";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
const App = () => {
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <View>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  );
};
export default App;
