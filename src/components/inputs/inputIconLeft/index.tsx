import React, { ReactNode } from "react";
import { Input, Text, IconElement, Icon } from "@ui-kitten/components";
import { styles } from "./styles";

interface InputGlobalProps {
  label: ReactNode;
  placeholder: string;
  secureTextEntry?: boolean;
  textColor?: string;
  iconName?: string;
}

export default function InputIconLeft({
  label,
  placeholder,
  secureTextEntry = false,
  textColor,
  iconName,
}: InputGlobalProps) {

  const icon = (props: any): IconElement => (
    <Icon
      {...props}
      name={iconName || "home"}
      fill="#ACACAC"
    />
  );

  return (
    <>
      {/* Título (Label) */}
      {label}

      {/* Input */}
      <Input
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={textColor}
        accessoryLeft={icon}
      />
    </>
  );
}
