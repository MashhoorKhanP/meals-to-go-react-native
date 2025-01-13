import RestaurantInfoCard from "@/components/restraurants/RestaurantInfoCard";
import ThemedComponent from "@/components/ThemeComponent";
import { useTheme } from "@/providers/ThemeProvider";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { Searchbar } from "react-native-paper";

type Props = {};

const restaurants = [
    {
        name: "Canto Restaurant",
        icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMalappuram%2FMulticuisine-Restaurants%2Fnct-10332161&psig=AOvVaw2IiyRsOEod4zYrDffTkoM-&ust=1735320072389000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIji3ZX5xYoDFQAAAAAdAAAAABAE",
        photos: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0f/92/68/getlstd-property-photo.jpg?w=600&h=400&s=1",
        ],
        address: "100 street, New York, NY",
        isOpenNow: true,
        rating: 4.5,
        isClosedTemporarily: false,
    },
    {
        name: "Canto Restaurant",
        icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMalappuram%2FMulticuisine-Restaurants%2Fnct-10332161&psig=AOvVaw2IiyRsOEod4zYrDffTkoM-&ust=1735320072389000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIji3ZX5xYoDFQAAAAAdAAAAABAE",
        photos: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0f/92/68/getlstd-property-photo.jpg?w=600&h=400&s=1",
        ],
        address: "100 street, New York, NY",
        isOpenNow: true,
        rating: 4.5,
        isClosedTemporarily: false,
    },
    {
        name: "Canto Restaurant",
        icon: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FMalappuram%2FMulticuisine-Restaurants%2Fnct-10332161&psig=AOvVaw2IiyRsOEod4zYrDffTkoM-&ust=1735320072389000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIji3ZX5xYoDFQAAAAAdAAAAABAE",
        photos: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/0f/92/68/getlstd-property-photo.jpg?w=600&h=400&s=1",
        ],
        address: "100 street, New York, NY",
        isOpenNow: true,
        rating: 4.5,
        isClosedTemporarily: false,
    },
];

const Restaurants = (props: Props) => {
    const [search, setSearch] = useState("");
    const { theme } = useTheme();

    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginTop: StatusBar.currentHeight,
                backgroundColor: theme === "light" ? "white" : "black",
            }}
        >
            <View className={`bg-${theme}-background flex-row justify-between items-center p-4`}>
                <Searchbar
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search Restaurants"
                    style={{ flex: 1, marginRight: 8 }}
                />
                <ThemedComponent />
            </View>

            <FlatList
                data={restaurants}
                renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
                keyExtractor={item => item.name}
                contentContainerClassName="p-4"
            />
        </SafeAreaView>
    );
};
// 07 48
export default Restaurants;
