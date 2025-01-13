import { ThemeProvider, useTheme } from "@/providers/ThemeProvider";
import { Lato_400Regular,Lato_700Bold,useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import Restaurants from "./restaurants";

export default function Index() {
    const { theme } = useTheme();
    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLato({
        Lato_400Regular,
        Lato_700Bold
    });

    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    return (
        <ThemeProvider>
            <Restaurants />
            <ExpoStatusBar style={theme} />
        </ThemeProvider>
    );
}
