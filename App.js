import React from 'react';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';
import SearchBox from './src/components/SearchBox';

export default function App() {
  return (
    <>
    <SafeAreaView style={{flex:1}}>
      <View style={{backgroundColor:'blue', padding:10}}>
      <TextInput placeholder='Search Resturant' placeholderTextColor="#fff" style={styles.textbox}
      editable
      maxLength={40}
    />
      </View>
      <View style={{flex:1, padding:10, backgroundColor:"red"}}>
        <Text>text input 2 test</Text>
      </View>
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  textbox: {
    borderColor:'white',
    color:'orange',
  }
 });

