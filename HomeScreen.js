import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View,Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";
// import { ArrowLeftIcon } from "react-native-heroicons/solid"; // Solid icons
import { AdjustmentsHorizontalIcon, ArrowRightIcon } from "react-native-heroicons/outline"; // Outline icons
import * as Animatable from 'react-native-animatable';
import Demo from './Demo';
import {Categories, foodItems} from './assets/dummy/index'

export default function Homescreen() {
  const [activeCategory, setActiveCategory] = useState("Burgers")
  return (
    <View className="flex-1 relative">
      <Image blurRadius={40} source={require('./assets/images/wall.jpeg')} className="h-full absolute w-full" />
    
    <SafeAreaView className="flex-3">
    <View className="flex-row justify-between item-center mx-4 mt-6"> 
    <View className="bg-white shadow-md rounded-2xl p-3">
    <Bars3CenterLeftIcon size="25" stroke={100} color="black" />
    </View>
    <View className="rounded-2xl " style={{backgroundColor:'rgba(255,255,0,7)', padding:3}} >
      <Image className="h-12 w-12 rounded-2xl" source={require('./assets/images/john.jpg')} style={{backgroundColor:'rgba(255,255,0,7)'}} />
    </View>
    </View>
{/* punchline */}
    <View className="my-12 space-y-2">
      <Text className="mx-4 text-5xl font-medium text-gray-800">Fast and</Text>
      <Text className="mx-4 text-5xl font-medium text-gray-800">
      <Text className="font-extrabold">Delicious</Text> Food
      </Text>
    </View>
    {/* search */}
    <View className="mx-4 flex-row justify-between items-center space-x-3">
      <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
        <MagnifyingGlassIcon stroke={40} color="gray" />
        <TextInput placeholder='Search ...' className="ml-2 text-gray-800" />
      </View>
      <View className="bg-white rounded-2xl p-4">
        <AdjustmentsHorizontalIcon size={25} color="black" stroke={40} />
      </View>
    </View>
    {/* categories scrollable */}
    <ScrollView
    className="mt-6 pt-6 max-h-20"
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{paddingHorizontal:20}}
    >
{
  Categories.map((category, index) =>{
    let isActive = category ==activeCategory;
     let textClass = isActive? 'font-bold':'';

     return(
      <Animatable.View
      delay={index*120}
      animation="slideInDown"
      key={index}
      >
      <TouchableOpacity
      className="mr-9"
      onPress={()=>setActiveCategory(category)}
      >
        <Text  className={"text-white text-base tracking-widest"+textClass}>{category}</Text>
      
      </TouchableOpacity>
      </Animatable.View>

     )
  })
}
    </ScrollView>

    {/* food cards */}
    <ScrollView
    contentContainerStyle={{paddingHorizontal:20}}
    horizontal showsHorizontalScrollIndicator={false}
    >
{
  foodItems.map((item, index) =><Demo item={item} index={index} key={index} />)
}
    </ScrollView>
    </SafeAreaView>
    </View>
  );
}

