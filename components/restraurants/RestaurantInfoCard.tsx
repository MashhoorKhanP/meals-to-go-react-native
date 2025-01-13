import { useTheme } from "@/providers/ThemeProvider";
import React from "react";
import { Image, Text, View } from "react-native";
import { Path, Svg } from "react-native-svg";

type Props = {
    restaurant: {
        name: string;
        icon: string;
        photos: string[];
        address: string;
        isOpenNow: boolean;
        rating: number;
        isClosedTemporarily: boolean;
    };
};

const RestaurantInfoCard = ({ restaurant }: Props) => {
    const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;
    const { theme } = useTheme();

    const renderStars = (rating: number) => {
        return Array.from(new Array(Math.floor(rating)), (_, index) => (
            <Svg key={index} height={20} width={20} viewBox="0 0 24 24" fill="none">
                <Path
                    d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z"
                    fill="gold"
                />
            </Svg>
        ));
    };

    return (
        <View
            className={`p-4 m-2 rounded-md shadow-lg ${theme === "light" ? "bg-light-background" : "bg-gray-800"} ${theme === "light" ? "" : ""}`}
        >
            <Image source={{ uri: photos[0] }} className="w-full h-40 object-cover rounded-lg" />
            <View className="py-1">
                <View className="flex flex-row w-[326px] justify-between items-center">
                    <Text
                        className={`${theme === "light" ? "text-light-foreground" : "text-dark-foreground"} text-lg font-lato700`}
                    >
                        {name}
                    </Text>
                    <View className="flex flex-row">
                        {renderStars(rating)}
                        <Text
                            className={`${theme === "light" ? "text-light-foreground" : "text-dark-foreground"} font-lato400`}
                        >
                            ({rating})
                        </Text>
                    </View>
                </View>
                <Text
                    className={`${theme === "light" ? "text-light-foreground" : "text-dark-foreground"} font-lato400`}
                >
                    {address}
                </Text>
                <View className="flex flex-row w-[326px] justify-between items-center">
                    <Text
                        className={`${theme === "light" && isOpenNow ? "text-light-success" : !isOpenNow ? "text-light-danger" : "text-light-success"} font-semibold text-end mt-2`}
                    >
                        {isOpenNow ? "Open Now" : "Closed"}
                    </Text>
                    <Svg height={20} width={20} viewBox="0 0 24 24" fill="currentColor">
                        <Path
                            d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
                            fill={theme === "light" ? "black" : "white"}
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
};

export default RestaurantInfoCard;
