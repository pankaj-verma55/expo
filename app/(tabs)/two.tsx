import { StyleSheet, Button, Linking, Alert, Platform, NativeModules } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';


const { AccessibilityServiceModule } = NativeModules;
export default function TabTwoScreen() {
  const [isTalkBackEnabled, setIsTalkBackEnabled] = useState(false);


   // open Accessibility Settings direactly 
   const openAccessibilitySettings = () => {
    if (Platform.OS === 'android') {
      Linking.openSettings(); 
      // opening the setting directly 
    } else {
      // feature not avilable
      Alert.alert('Not Supported', 'This feature is only available on Android.');
    }
  };


  const toggleTalkBack = () => {
    const newState = !isTalkBackEnabled;
    setIsTalkBackEnabled(newState);
    AccessibilityServiceModule.toggleTalkBack(newState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Button title="Open Accessibility Settings" onPress={openAccessibilitySettings} />
      </View>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title={isTalkBackEnabled ? 'Disable TalkBack' : 'Enable TalkBack'}
        onPress={toggleTalkBack}
      />
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
});
