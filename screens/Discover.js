import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { Avatar, Hotels, Restaurants, Attractions, NotFound } from "../assets";
import MenuContainer from "../components/MenuContainer";
import { FontAwesome } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData } from "../api";
const Discover = () => {
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null)
  const [bl_lng, setBl_lng] = useState(null)
  const [tr_lat, setTr_lat] = useState(null)
  const [tr_lng, setTr_lng] = useState(null)



  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat,bl_lng,tr_lat,tr_lng,type).then((data) => {
      setMainData(data)
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat,bl_lng,tr_lat,tr_lng,type]);
{
 
}
  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <View className="flex-row items-center justify-between px-8 py-9">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[#527273] text-[20px]">the beauty today</Text>
        </View>
        <View className="items-center justify-center w-12 h-12 bg-gray-400 rounded-md shadow-lg ">
          <Image
            source={Avatar}
            className="object-cover w-full h-full rounded-md "
          />
        </View>
      </View>
      <View className="flex-row items-center px-4 py-1 mx-4 mt-1 bg-white shadow-lg shadow-black rounded-xl">
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat)
            setBl_lng(details?.geometry?.viewport?.southwest?.lng)
            setTr_lat(details?.geometry?.viewport?.northeast?.lat)
            setTr_lng(details?.geometry?.viewport?.northeast?.lng)
          }}
          query={{
            key: "pk.fe02ef7d15dfb249295fcf08fd42338c",
            language: "en",
          }}
        />
      </View>
      {/* Menue Container */}
      {isLoading ? (
        <View className="items-center justify-center flex-1">
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 pt-8">
            <MenuContainer
              key={"hotels"}
              title="hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>
          <View>
            <View className="flex-row items-center justify-between px-4 pt-5 ">
              <Text className="text-[24px] font-bold text-[#3c6072] ">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2 ">
                <Text className="text-[20px] font-bold text-[#3c6072] ">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#a0c4c7"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap items-center px-2 mt-4 justify-evenly ">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, i) => (
                    <ItemCardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://logos.flamingtext.com/Word-Logos/places-design-sketch-name.png"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[300px]  justify-center space-y-8 items-center  ">
                    <Image
                      className="object-cover w-32 h-32"
                      source={NotFound}
                    />
                    <Text className="text-[#428288] text-2xl font-semibold ">
                      Opps..No Data Found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
