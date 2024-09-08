import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { ShoppingBagIcon, ShoppingCartIcon } from 'react-native-heroicons/solid';import * as Animatable from 'react-native-animatable';


export function FoodCard({item, index}) {
  return(
    <View
 className="w-56 h-56 mr-6 my-5 p-3 py-5 rounded-3xl"
 style={{backgroundColor:'rgba(255,255,255,0.7)'}}
 >
<View className="flex-row justify-center">
<Image source={item.image} className="h-32 w-32" />
</View>

 <View className="flex-1 px-3 py-2 space-y-2">
<Text className="text-white flex-xl font-medium tracking-wider">{item.name}</Text>
<Text className="text-white">{item.ingredients}</Text>
</View>

<View className="flex-row justify-between items-center px-1">
    <Text className="text-white font-semibold text-2xl">${item.price}</Text>
  <TouchableOpacity
  className="bg-white rounded-full p-3"
  >

    <ShoppingCartIcon size={25} color="grey" />
  </TouchableOpacity>
</View> 
</View>
    )
  
}

export default FoodCard
