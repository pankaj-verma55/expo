import { Button, AccessibilityInfo, Alert, StyleSheet, TextInput, TouchableOpacity, NativeModules, Linking } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import * as CustomModule from '@/modules/my-module-sample';
import { useEffect, useState } from 'react';
import React from 'react';


const { MyAccessibilityModule } = NativeModules;


export default function TabTwoScreen() {
  const [value, setValue] = useState('');
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);
  

  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled().then((isEnabled) => {
      if (isEnabled) {
        Alert.alert('Screen Reader is enabled!');
      } else {
        Alert.alert('Screen Reader is not enabled.');
      }
    });
  }, []);

  // Function to handle input and log changes
  const handleChange = (text: any) => {
    setValue(text);
    console.log('Updated Value:', text);
  };



  // const openAccessibilitySettings = () => {
  //   // MyAccessibilityModule.openAccessibilitySettings();

  //   Linking.openSettings().catch(() => {
  //     Alert.alert('Error', 'Unable to open settings.');
  //   });
  // };

  const openAccessibilitySettings = () => {
    Linking.openSettings().catch(() => {
      Alert.alert('Error', 'Unable to open settings.');
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab three</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        placeholder="Type something..."
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/three.tsx" />

      <View style={styles.container}>
      
      <Text style={styles.output}>You typed: {value}</Text>
      <Text>Welcome to the Accessible App!</Text>


      <Text>
        {screenReaderEnabled
          ? 'Screen Reader is currently ON.'
          : 'Screen Reader is OFF.'}
      </Text>

      <Text
        accessible={true}
        accessibilityLabel="Example Text"
        accessibilityHint="This text provides an example of accessibility support."
      >
        Hello! This is an accessible text element.
      </Text>
      {/* <Button title="Announce Message" onPress={handleAnnouncement} /> */}

      <Button title="Enable Accessibility Service" onPress={openAccessibilitySettings} />

      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Submit Button"
        accessibilityHint="Press to submit your details"
        accessibilityRole="button"
        style={styles.button}
        onPress={() => alert('Button Pressed!')}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  output: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
