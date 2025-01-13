import React from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Use any icon library you prefer

type CustomSwitchProps = {
  value: boolean;
  onValueChange: () => void;
};

const CustomSwitch = ({ value, onValueChange }: CustomSwitchProps) => {
  const translateX = value ? 20 : 0; // Adjust this value based on your design

  return (
    <TouchableOpacity onPress={onValueChange} style={styles.container}>
      <Animated.View style={[styles.switch, { transform: [{ translateX }] }]}>
        <MaterialIcons name={value ? "dark-mode" : "light-mode"} size={24} color="white" />
      </Animated.View>
      <View style={[styles.track, value ? styles.trackOn : styles.trackOff]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  switch: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF', // Color of the thumb
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  trackOn: {
    backgroundColor: '#4CD964', // Color when switch is on
  },
  trackOff: {
    backgroundColor: '#FF3B30', // Color when switch is off
  },
});

export default CustomSwitch; 