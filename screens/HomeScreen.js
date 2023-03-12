import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from "react";
import { HeroImage } from "../assets";
import { TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Discover from "./Discover"
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="relative flex-1 bg-white">
      {/* First Section */}
      <View className="flex-row items-center px-6 mt-8 space-x-2 ">
        <View className="items-center justify-center bg-black rounded-full w-14 h-14 ">
          <Text className="text-[#4dabb7] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2a2b4b] text-2xl ">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3c6072] text-[32px]">Enjoy the Trip with</Text>
        <Text className="text-[#00bcc9] text-[29px] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3c6072] text-base">
          hi this is a travel app you can use it for traveling ,it make your
          life easier
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[340px] h-[340px] bg-[#4dabb7] rounded-full absolute bottom-28 -right-36 "></View>
      <View className="w-[340px] h-[340px] bg-[#e99265] rounded-full absolute -bottom-20 -left-36 "></View>
      {/* image container */}
      <View className="items-center justify-center flex-1">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="object-cover w-full h-full "
        />
        <TouchableOpacity
        onPress={()=>navigation.navigate("Discover")}
         className="absolute w-24 h-24 border-t-4 border-l-2 border-r-2 bottom-20 border-[#4dabb7] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 bg-[#4dabb7] rounded-full items-center justify-center"
          >
            <Text className="text-gray-50 font-semibold text-[32px]">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
