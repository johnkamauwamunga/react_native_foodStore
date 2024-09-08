import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { ShoppingBagIcon } from 'react-native-heroicons/solid';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


export function Demo({item, index}) {
    const navigation= useNavigation();
  return(
    <Animatable.View
    delay={index*120}
    animation="slideInRight"
    key={index}
 className="w-56 h-76 mr-6 my-5 p-3 py-5 rounded-3xl"
 style={{backgroundColor:'rgba(255,255,255,0.7)'}}
 >
<View className="flex-row justify-center">
<Image source={item.image} className="h-48 w-48" />
</View>

 <View className="flex-1 px-3 py-2 space-y-2">
<Text className="text-white flex-xl font-medium tracking-wider">{item.name}</Text>
<Text className="text-white">{item.ingridients}</Text>
</View>

<View className="flex-row justify-between items-center px-1">
    <Text className="text-white font-semibold text-2xl">${item.price}</Text>
  <TouchableOpacity
  onPress={()=>navigation.navigate('FoodDetails', {...item})}
  className="bg-white rounded-full p-3"
  >

    <ShoppingBagIcon size={25} color="black" />
  </TouchableOpacity>
</View> 
</Animatable.View>
    )
  
}

export default Demo
