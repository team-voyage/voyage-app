import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { props } from "./types";
import styles from "./styles";

export const Button = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, style]} {...props}>
    {text && <Text style={[styles.buttonText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export const ConfirmButton = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, styles.confirm, style]} {...props}>
    {text && <Text style={[styles.buttonText, styles.confirmText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export const CancelButton = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, styles.cancel, style]} {...props}>
    {text && <Text style={[styles.buttonText, styles.cancelText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

export const SearchBoxButton = ({ text, children, style, textStyle, ...props }: props) => (
  <TouchableOpacity style={[styles.button, styles.searchBox, style]} {...props}>
    {text && <Text style={[styles.buttonText, styles.searchBoxText, textStyle]}>{text}</Text>}
    {children}
  </TouchableOpacity>
);

