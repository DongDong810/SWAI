import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { parseBoolean } from './utils';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import FriendsIdealTypeScreen from './screens/FriendsIdealTypeScreen';
import FriendsListScreen from './screens/FriendsListScreen';
import FriendsProfileScreen from './screens/FriendsProfileScreen';
import Screen1Landing from './screens/Screen1Landing';
import Screen2Login from './screens/Screen2Login';
import Temp2Screen from './screens/Temp2Screen';
import TempScreen from './screens/TempScreen';
import UserIdealTypeScreen from './screens/UserIdealTypeScreen';
import UserProfileScreen from './screens/UserProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function Auth() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
      })}
    >
      <Stack.Screen
        name="Screen1Landing"
        component={Screen1Landing}
        options={({ navigation }) => ({
          headerShown: false,
          title: '1 Landing',
        })}
      />
    </Stack.Navigator>
  );
}

function FeedNavigator() {
  /* Navigator has no children, add a child screen or navigator to have it rendered here */
}

function ProfileNavigator() {
  /* Navigator has no children, add a child screen or navigator to have it rendered here */
}

function ResourceNavigator() {
  /* Navigator has no children, add a child screen or navigator to have it rendered here */
}

function TeamNavigator() {
  /* Navigator has no children, add a child screen or navigator to have it rendered here */
}

function UpcomingScheduleNavigator() {
  /* Navigator has no children, add a child screen or navigator to have it rendered here */
}

function InAppTabs() {
  const tabBarIcons = {
    FeedNavigator: 'Entypo/home',
    TeamNavigator: 'FontAwesome/group',
    UpcomingScheduleNavigator: 'Entypo/calendar',
    ResourceNavigator: 'SimpleLineIcons/docs',
    ProfileNavigator: 'Entypo/user',
  };

  return (
    <Tab.Navigator
      initialRouteName="ProfileNavigator"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerShown: false,
        tabBarActiveTintColor: theme.colors.custom_rgb0_55_75,
        tabBarInactiveTintColor: theme.colors.custom_rgb170_167_163,
        tabBarLabelStyle: theme.typography.custom23,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.light,
        },
      })}
    >
      <Tab.Screen
        name="FeedNavigator"
        component={FeedNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/home"
              size={25}
              color={
                focused
                  ? theme.colors.custom_rgb0_55_75
                  : theme.colors.custom_rgb170_167_163
              }
            />
          ),
          title: 'Feed Navigator',
        })}
      />
      <Tab.Screen
        name="TeamNavigator"
        component={TeamNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/group"
              size={25}
              color={
                focused
                  ? theme.colors.custom_rgb0_55_75
                  : theme.colors.custom_rgb170_167_163
              }
            />
          ),
          title: 'Team Navigator',
        })}
      />
      <Tab.Screen
        name="UpcomingScheduleNavigator"
        component={UpcomingScheduleNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/calendar"
              size={25}
              color={
                focused
                  ? theme.colors.custom_rgb0_55_75
                  : theme.colors.custom_rgb170_167_163
              }
            />
          ),
          title: 'Upcoming Schedule Navigator',
        })}
      />
      <Tab.Screen
        name="ResourceNavigator"
        component={ResourceNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="SimpleLineIcons/docs"
              size={25}
              color={
                focused
                  ? theme.colors.custom_rgb0_55_75
                  : theme.colors.custom_rgb170_167_163
              }
            />
          ),
          title: 'Resource Navigator',
        })}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/user"
              size={25}
              color={
                focused
                  ? theme.colors.custom_rgb0_55_75
                  : theme.colors.custom_rgb170_167_163
              }
            />
          ),
          title: 'Profile Navigator',
        })}
      />
    </Tab.Navigator>
  );
}

function Onboarding() {
  return (
    <Stack.Navigator
      initialRouteName="Screen1Profile"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerStatusBarHeight: 44,
      })}
    >
      <Stack.Screen
        name="UserIdealTypeScreen"
        component={UserIdealTypeScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'User - Ideal Type',
        })}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#FBFCFD',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="Auth"
        presentation="card"
        screenOptions={({ navigation }) => ({
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerMode: 'none',
          headerShown: false,
          headerStatusBarHeight: 44,
        })}
      >
        <Stack.Screen
          name="Screen2Login"
          component={Screen2Login}
          options={({ navigation }) => ({
            headerShown: false,
            title: '2 Login',
          })}
        />
        <Stack.Screen
          name="TempScreen"
          component={TempScreen}
          options={({ navigation }) => ({
            title: 'Temp',
          })}
        />
        <Stack.Screen
          name="FriendsProfileScreen"
          component={FriendsProfileScreen}
          options={({ navigation }) => ({
            title: 'Friends Profile',
          })}
        />
        <Stack.Screen
          name="FriendsIdealTypeScreen"
          component={FriendsIdealTypeScreen}
          options={({ navigation }) => ({
            title: 'Friends - Ideal Type',
          })}
        />
        <Stack.Screen
          name="FriendsListScreen"
          component={FriendsListScreen}
          options={({ navigation }) => ({
            title: 'Friends List',
          })}
        />
        <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={({ navigation }) => ({
            title: 'User - Profile',
          })}
        />
        <Stack.Screen
          name="Temp2Screen"
          component={Temp2Screen}
          options={({ navigation }) => ({
            title: 'Temp 2',
          })}
        />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="InAppTabs" component={InAppTabs} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
