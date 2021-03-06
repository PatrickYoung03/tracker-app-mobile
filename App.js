import React from "react";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import LoadingScreen from "./src/screens/LoadingScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";

import { FontAwesome } from "@expo/vector-icons";

import { setNavigator } from "./src/navigationRef";

const tlFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});

tlFlow.navigationOptions = {
  title: "Track List",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

const switchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  loginFlow: createStackNavigator({
    signup: SignupScreen,
    signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: tlFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
