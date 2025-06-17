import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import Login from '../screens/features/auth/Login';
import Dashboard from '../screens/Dashboard/Dashboard';
import Profile from '../components/Ui/Profile';
import SplashScren from '../screens/features/auth/SplashScren';
import WelcomeScreen from '../screens/features/auth/WelcomeScreen';
import {navigationRef} from '../utils/NavigationUtil';
import {Colors} from '../utils/Colors';
import Heart from '../screens/Dashboard/Heart';
import {images} from '../assests/image';
import {Image, Platform, StyleSheet, View} from 'react-native';
import Chat from '../screens/Dashboard/Chat';
import TabIcon from '../components/TabIcon';
import {windowHeight, windowWidth} from '../utils/Constant';
import Wink from '../screens/DrawerScreens/Wink';
import CustomDrawerContent from '../components/Navigation/CustomDrawerContent';
import SignUp from '../screens/features/auth/SignUp';
import ForgotPassword from '../screens/features/auth/ForgotPassword';
import Media from '../screens/DrawerScreens/Media';
import SearchList from '../screens/Profile/SearchList.tsx';
import EditProfile from '../screens/Profile/EditProfile';
import {FilterProvider} from '../context/FilterContext.tsx';
import ProfileDetails from '../screens/Profile/ProfileDetails.tsx';
import MyMatches from '../screens/Profile/MyMatches.tsx';
import MyGifts from '../screens/Profile/MyGifts.tsx';
import MatchAlert from '../screens/Profile/MatchAlert.tsx';
import MyWink from '../screens/Profile/MyWink.tsx';
import MyFriends from '../screens/Profile/MyFriends.tsx';
import ProfileStatus from '../screens/Profile/ProfileStatus.tsx';
import Favorite from '../screens/Profile/Favorite.tsx';
import Comment from '../screens/Profile/Comment.tsx';
import TinderSwiper from '../components/Ui/TinderSwiper.tsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// Bottom tabs (Dashboard, Profile)
const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'home';

          if (route.name === 'Home') {
            iconName = focused ? images.Home : images.HomeGrey;
          } else if (route.name === 'Chat') {
            iconName = focused ? images.ActiveChat : images.ChatInactive;
          } else if (route.name === 'Heart') {
            iconName = focused ? images.InActiveHeart : images.InActiveHeart;
          } else if (route.name === 'Profile') {
            iconName = focused
              ? images.InActiveProfile
              : images.InActiveProfile;
          }

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses';
          } else if (route.name === 'Heart') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person';
          }
          // console.log('Icon name', iconName);
          return (
            <TabIcon
              source={iconName}
              focused={focused}
              routeName={route.name}
            />
          );
        },
        tabBarStyle: {
          backgroundColor: Colors.black,
          height: 60 + insets.bottom,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          maxWidth: windowWidth * 210,
          // justifyContent: 'center',
          paddingBottom: insets.bottom + 6,
          marginTop: windowHeight * 17,
        },
        // tabBarSafeAreaInset: {bottom: 'always'},
      })}>
      <Tab.Screen name={'Home'} component={Dashboard} />
      <Tab.Screen name="Heart" component={Favorite} />
      <Tab.Screen name="Chat" component={Chat} />

      <Tab.Screen name="Profile" component={ProfileDetails} />
    </Tab.Navigator>
  );
};

// Drawer wrapping Bottom Tabs
const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerContentContainerStyle: {
        backgroundColor: Colors.black,
      },
      drawerItemStyle: {
        marginVertical: 0, // reduces vertical space between items
      },
      drawerActiveBackgroundColor: Colors.border, // DarkRed
      drawerStyle: {
        backgroundColor: 'white',
        width: windowWidth * 650,

        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,

        // Android elevation
        elevation: 15,
      }, // Very dark red
      // active item background
      drawerActiveTintColor: Colors.darkGrey, // active icon/text color
      drawerInactiveTintColor: '#ccc', // inactive icon/text color
    }}
    drawerContent={props => <CustomDrawerContent {...props} />}>
    <Drawer.Screen
      name="MainTabs"
      component={BottomTabNavigator}
      options={{
        drawerItemStyle: {display: 'none'}, // 🔒 Hides from drawer UI
      }}
    />
    <Drawer.Screen
      name="ProfileStatus"
      component={ProfileStatus}
      options={{
        drawerItemStyle: {display: 'none'}, // 🔒 Hides from drawer UI
      }}
    />
    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.HomeGrey} // replace with your icon path
            style={{width: 24, height: 24}}
          />
        ),
        drawerLabel: 'Home',
      }}
      name="Home"
      component={BottomTabNavigator}
    />
    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.TheWink} // replace with your icon path
            style={{width: 24, height: 24}}
          />
        ),
        drawerLabel: 'Wink',
      }}
      name="HomeTabs"
      component={MyWink}
    />
    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.friends} // replace with your icon path
            style={{width: 26, height: 18}}
          />
        ),
        drawerLabel: 'Friends',
      }}
      name="Friends"
      component={MyFriends}
    />

    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.heart} // replace with your icon path
            style={{width: 24, height: 23}}
          />
        ),
        drawerLabel: 'Favorites',
      }}
      name="Favorites"
      component={Favorite}
    />

    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.gift} // replace with your icon path
            style={{width: 24, height: 25}}
          />
        ),
        drawerLabel: 'Gifts',
      }}
      name="gift"
      component={MyGifts}
    />

    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.Star} // replace with your icon path
            style={{width: 24, height: 25}}
          />
        ),
        drawerLabel: 'Matches',
      }}
      name="Matches"
      component={MyMatches}
    />

    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.comment} // replace with your icon path
            style={{width: 22, height: 22}}
          />
        ),
        drawerLabel: 'Comments',
      }}
      name="Comments"
      component={Comment}
    />

    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.thebell} // replace with your icon path
            style={{width: 25, height: 22}}
          />
        ),
        drawerLabel: 'Match Alert',
      }}
      name="MatchAlert"
      component={MatchAlert}
    />

    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.Line} // replace with your icon path
            style={{marginTop: 30}}
          />
        ),
        drawerLabel: '',
      }}
      name="Line"
      component={Wink}
    />
    <Drawer.Screen
      options={{
        drawerIcon: ({color, size}) => (
          <Image
            source={images.Media} // replace with your icon path
            style={{width: 25, height: 22}}
          />
        ),
        drawerLabel: 'Media',
      }}
      name="Media"
      component={Media}
    />
  </Drawer.Navigator>
);

// Top-level app navigation (Login, MainApp)
const Routes = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScren">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SplashScren" component={SplashScren} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="MainApp" component={DrawerNavigator} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SearchList" component={SearchList} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="ProfileStatus" component={ProfileStatus} />
      <Stack.Screen name="TinderSwiper" component={TinderSwiper} />
    </Stack.Navigator>
  </NavigationContainer>
);

// Wrap with gesture + safe area
export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <FilterProvider>
          <Routes />
        </FilterProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
