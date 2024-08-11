import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import AppHeader from "./app.header";
import DetailScreen from "../review/detail";
import { createDrawerNavigator } from "@react-navigation/drawer";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name='home' component={HomeScreen} options={{ header: () => <AppHeader /> }}></Stack.Screen>
      <Stack.Screen name='review-detail' component={DetailScreen} options={{ title: "Chi tiết Review" }}></Stack.Screen>
    </Stack.Navigator>
  );
};
const AppNavigation = () => {
  const Drawer = createDrawerNavigator<RootStackParamList>();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name='home' options={{ title: "Trang chủ", header: () => <></> }} component={HomeLayout}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default AppNavigation;
