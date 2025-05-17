import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export default function Input(props: TextInputProps) {
  return <TextInput style={styles.input} placeholderTextColor="#999" {...props} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
    color: theme.colors.text,
  },
});
