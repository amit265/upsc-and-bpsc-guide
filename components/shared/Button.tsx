import React from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import colors from "../../constants/colors";

export default function Button({
  text,
  type = "fill",
  onPress,
  loading,
  disable = false,
  backgroundColor = colors.BUTTON,
  color = colors.WHITE,
  variant = "active"
}) {
  const isInactive = disable || variant === "inactive";

  const getBackgroundColor = () => {
    if (isInactive) return colors.BUTTON;
    return type === "fill" ? backgroundColor : colors.WHITE;
  };

  const getTextColor = () => {
    if (isInactive) return colors.GRAY || "#999"; // Fallback gray text
    return type === "fill" ? color : colors.PRIMARY;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || isInactive}
      style={{
        padding: 15,
        width: "100%",
        borderRadius: 15,
        marginTop: 15,
        backgroundColor: getBackgroundColor(),
        opacity: isInactive ? 0.5 : 1,
      }}
    >
      {!loading ? (
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            color: getTextColor(),
            fontFamily: "nunito-bold",
          }}
        >
          {text}
        </Text>
      ) : (
        <ActivityIndicator
          size={"large"}
          color={type === "fill" ? colors.WHITE : colors.PRIMARY}
        />
      )}
    </TouchableOpacity>
  );
}
