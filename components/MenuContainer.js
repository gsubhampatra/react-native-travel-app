import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const MenuContainer = ({title,imageSrc,type,setType}) => {
    const handelPress = () =>{
        setType(title.toLowerCase())
    }
  return (
    <TouchableOpacity  className="items-center justify-center space-y-2" onPress={handelPress} >
        <View  className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${type===title.toLowerCase()?"bg-gray-200":""}`} >
            <Image
            className="object-contain w-full h-full"
             source={imageSrc}
            />
        </View>
        <Text className="text-[#4dabb7] font-semibold text-lg" >{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer