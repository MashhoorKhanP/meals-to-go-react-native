import { useTheme } from "@/providers/ThemeProvider"; // Adjust the path as necessary
import React from "react";
import { Switch, View } from "react-native";

const ThemedComponent = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <View>
            <Switch
                value={theme === "dark"}
                onValueChange={toggleTheme}
                thumbColor={theme === "dark" ? "#fff" : "#000"}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
            />
        </View>
    );
};

export default ThemedComponent;
