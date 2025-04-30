import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key} // Añadido key único
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabButton, isFocused && styles.tabButtonFocused]}
          >
            <Text style={{ color: isFocused ? colors.primary : colors.text }}>
              {typeof label === 'function' ? label({
                  focused: isFocused, color: isFocused ? colors.primary : colors.text, children: '',
                  position: 'beside-icon'
              }) : label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff', // Fondo blanco para la barra de pestañas
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Línea superior para separar la barra
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  tabButtonFocused: {
    backgroundColor: '#e6f7ff', // Fondo diferente para la pestaña seleccionada
  },
});

// Define colores predeterminados si no están definidos
const colors = {
  primary: '#007bff', // Color para la pestaña seleccionada
  text: '#333', // Color para las pestañas no seleccionadas
};