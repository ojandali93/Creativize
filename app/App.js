import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/Screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Creativize",
    },
  }
);

export default createAppContainer(navigator);