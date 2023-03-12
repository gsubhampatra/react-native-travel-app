import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="relative flex-1 bg-white ">
      <ScrollView className="flex-1 px-4 py-6 ">
        <View className="relative bg-white">
          <Image
            source={{
              uri: data?.photo?.images?.medium?.url
                ? data?.photo?.images?.medium?.url
                : "https://logos.flamingtext.com/Word-Logos/places-design-sketch-name.png",
            }}
            className="object-cover w-full h-[200px] mt-3 rounded-2xl "
          />
          <View className="absolute inset-x-0 flex-row justify-between px-6 top-5 ">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Discover");
              }}
              className="items-center justify-center w-10 h-10 bg-white rounded-md "
            >
              <FontAwesome name="chevron-left" size={24} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity className="items-center justify-center w-10 h-10 bg-[#06b2be] rounded-md ">
              <FontAwesome name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="absolute inset-x-0 flex-row justify-between px-6 bottom-5 ">
          <View className="flex-row items-center space-x-2 ">
            <Text className="text-[12px] text-gray-700 font-bold ">
              {" "}
              {data?.price_level}{" "}
            </Text>
            <Text className="text-[12px] text-gray-700 font-bold ">
              {" "}
              {data?.price}{" "}
            </Text>
          </View>
          <View className="px-2 py-1 bg-teal-100 rounded-md">
            <Text>{data?.open_now_text}</Text>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center mt-2 space-x-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between mt-4">
          {data?.rating && (
            <View className="flex-row items-center space-x-2 ">
              <View className="items-center justify-center w-3 h-3 bg-red-100 shadow-md rounded-2xl">
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2 ">
              <View className="items-center justify-center w-12 h-12 bg-red-100 shadow-md rounded-2xl">
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center space-x-2 ">
              <View className="items-center justify-center w-12 h-12 bg-red-100 shadow-md rounded-2xl">
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151] capitalize">
                  {data?.bearing}
                </Text>
                <Text className="text-[#515151]">Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row flex-wrap items-center justify-start gap-2 mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="px-4 py-2 mt-4 space-y-2 bg-gray-100 rounded-2xl">
          {data?.phone && (
            <View className="flex-row items-center space-x-3">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-md">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="flex-row items-center space-x-3">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-md">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="flex-row items-center space-x-3">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-md">{data?.address}</Text>
            </View>
          )}

          <View className="mt-4 px-3 py-3 rounded-lg bg-[#06B2BE] items-center justify-center mb-8">
            <Text className="text-xl font-semibold tracking-wider text-gray-100 uppercase">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
