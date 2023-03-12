import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ItemCardContainer = ({ imageSrc, title, location,data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    
    onPress={()=>{navigation.navigate("ItemScreen",{param:data})}}
    
    className="px-3 py-2 space-y-3 border border-gray-300 rounded-md shadow-md bg-white w-[140px] mb-3 ">
      <Image
        className="object-cover w-full rounded-md h-[120px] "
        source={{ uri: imageSrc }}
      />
      {title ? (
        <>
          <Text className="text-[14px] text-[#428288] font-bold">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row items-center space-x-2">
            <FontAwesome name="map-marker" size={18} color="#8597a2" />
            <Text className="text-[10px] text-[#428288] font-bold">
              {location?.length > 10 ? `${location.slice(0, 10)}...` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
