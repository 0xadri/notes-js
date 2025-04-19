

Feedback
The global expo-cli package has been deprecated.

//-------------------------------------------------------//

# Influencers —

https://www.youtube.com/c/wcandillon/videos

https://www.youtube.com/c/CatalinMironDev/videos

//-------------------------------------------------------//

# Alternatives —

React Native - the most work. Would need to fetch everything from an API. Would need to rewrite most components to work with it. Updates to the website would mean building and releasing a new app to the App Store.

Solito https://solito.dev - Similar to React Native, but with some niceties to make it less of a transition. You’d still need to build and ship new versions, but you can write code once the Solito way and have it work on React Native and Next.js.

Capacitor - It’s just a wrapper around the website. When you open the app, it opens the website. You can still tie into phone-specific APIs like payment processing, sharing, camera, notifications, haptics, etc. When we update the website we don’t need to release a new version of the app.

//-------------------------------------------------------//

# Docs —

https://reactnative.dev/

https://expo.dev/

https://developer.apple.com/design/human-interface-guidelines/

https://m3.material.io/

https://reactnavigation.org/

//-------------------------------------------------------//

# Imports —

import { StyleSheet, Pressable, Text, Button, View, ScrollView } from 'react-native';

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//-------------------------------------------------------//

# React Native —

React Native: library built with the same API as React.

Tools to make development with React Native even easier.

//-------------------------------------------------------//

# Local Expo CLI —

npx expo start    // instead of: expo start. No longer need to run npm install -g expo-cli

npx create-expo-app@latest StickerSmash

//-------------------------------------------------------//

# Styling —

Expo and React Native don’t use CSS. This method of styling is not available on native platforms.

Instead of using CSS, we can write our styling using plain JavaScript objects. 

These objects use the same CSS properties but they are written in “camelCase”.
 
https://reactnative.dev/docs/style

All components are a flexbox by default

// Example
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <View
      style={{ width: 100, height: 100, backgroundColor: "red", flex: 1 }}
  ></View>
</View>

//-------------------------------------------------------//

# View Component —

<View style={{ flex: 1, justifyContent: 'center' }}>
</View>

// Custom Comp w View
<Box color="red" />
export const Box = (props) => (
  <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);

//-------------------------------------------------------//

# Text Component —

//-------------------------------------------------------//

# Image Component —

Similar to the <img> HTML element, but the Image component has more features.

Able to load images from different sources: https:// link, local file:// reference, Base64-encoded string, or image imported as module with require

'require' allows to bundle the image file with your app

// Example 1
<Image style={{ width: 100, height: 100 }} source={{ uri: 'https://picsum.photos/100/100' }}></Image>

// Example 2
const image = require('./react-native.jpg');
<Image style={{ width: 100, height: 100 }} source={image}></Image>

//-------------------------------------------------------//

# ScrollView Component —

View components aren’t scrollable in Expo and React Native.

ScrollView is one of the scrollable components in Expo and React Native.

It allows us to fully manage and customize how the content should be scrolled.

// Example
<ScrollView>
  <View style={{ width: 300, height: 300, backgroundColor: "red" }} />
  <View style={{ width: 300, height: 300, backgroundColor: "green" }} />
  <View style={{ width: 300, height: 300, backgroundColor: "blue" }} />
</ScrollView>

//-------------------------------------------------------//

# Button Component —

The Button component is very limited in styling customization because it is heavily tied to the native platform

But it’s perfect for learning or prototyping purposes.

// Example
<Button
  title="Profile page"
  onPress={() => navigate('profile')}
/>

//-------------------------------------------------------//

# TextInput Component —


<TextInput placeholder="type here" value="val" onChangeText={(text) => null} />

// secureTextEntry Property: hides the text for password input
<TextInput
  style={{ padding: 8, backgroundColor: '#f5f5f5' }}
  onChangeText={text => setName(text)}
  secureTextEntry
/>


//-------------------------------------------------------//

# View, Text & TextInput Components —

// Example App — Try it on https://snack.expo.dev/@charliecruzan/1_6?platform=web

import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ecf0f1" }}
    >
      <CustomComp
        label="email"
        placeholder="type email"
        value={email}
        onChangeText={setEmail} // equiv. to: {(text) => {setEmail(text)}}
      />
      <CustomComp
        label="password"
        placeholder="type password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry="true"
      />
  );
};

const CustomComp = ({ label, placeholder, value, onChangeText, secureTextEntry }) => (
  <View>
    <Text>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

export default App;

//-------------------------------------------------------//

# Styling —

// Before
const AwesomeBox = () => (
  <View style={{ width: 100, height: 100, backgroundColor: 'red' }} />
);
// After
const AwesomeBox = () => (
  <View style={styles.box} />
);
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
});

//-------------------------------------------------------//

# Styling: Combining Styles —


// Example 1
<View style={[styles.box, {backgroundColor: 'blue'} ]} />

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

// Example 2
const AwesomeBox = (props) => (
  <View style={[styles.box, props.isActive && { backgroundColor: 'purple' }]} />
);

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

// Example 3
<Pressable>
  {(state) => <Box pressed={state.pressed} />}
</Pressable>

export const Box = (props) => (
  <View style={[styles.box, props.pressed && { backgroundColor: "blue" }]} />
);

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

//-------------------------------------------------------//

# Density-independent Pixels — 

Default unit for React Native when setting styling properties, such as height, width, and fontSize

//-------------------------------------------------------//

# All Elements Are Flexboxes — 

In ReactNative all elements are flexboxes. You don’t have to specify display: flex.

Default direction of the flexbox (different to web): it’s vertically.


// Example
import React from 'react';
import { StyleSheet, View } from 'react-native';
const App = () => (
  <View style={styles.layout}>
    <View style={[styles.box, { backgroundColor: 'red' }]} />
    <View style={[styles.box, { backgroundColor: 'green' }]} />
    <View style={[styles.box, { backgroundColor: 'blue' }]} />
  </View>
);
export default App;
export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row-reverse'
  },
  box: {
    flex: 1,
    backgroundColor: 'black',
  },
});

//-------------------------------------------------------//

# Flexbox: Child Elements Position — 

Property: justifyContent

Property that renders child elements
 - center : at the center of our parent flexbox
 - flex-start : at the start of our parent flexbox
 - flex-end : at the end of our parent flexbox
 - space-around : remaining space around child elements
 - space-between : remaining space between the elements, without space at the start or end
 - space-evenly : remaining space evenly divided, including space at the start and end

//-------------------------------------------------------//

# React Navigation — 

Stack navigation: users click from one screen to another. With each step, screens are kept track in a stack data structure.

// Structure
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Catalog" component={CatalogScreen} />
  </Tab.Navigator>
</NavigationContainer>

// Programatic Navigation
const nav = useNavigation();
<Button title="Log In" onPress={() => nav.navigate('SignIn')} />

// Example 1
const FeedScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>First screen</Text>
      <Button title="Log In" onPress={() => doSomething()} />
    </View>
  );
};
const Stack = createStackNavigator();
const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;

// Example 2
https://snack.expo.dev/@adri999/programmatic-navigation

// Example 3
https://snack.expo.dev/@adri999/authentication-flow




