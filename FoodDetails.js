import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ChatBubbleBottomCenterIcon, ChevronDoubleLeftIcon } from 'react-native-heroicons/outline'
import { HeartIcon } from 'react-native-heroicons/outline'
import { ClockIcon, FireIcon, MinusIcon, PlusIcon, ScaleIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';

export default function FoodDetails(props) {
    let item= props.route.params;
    const navigation=useNavigation();

  return (
    <View className="flex-1 bg-white">
        <Image style={{borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} blurRadius={40} source={require('./assets/images/wall.jpeg')} className="w-full h-96 absolute"/>
   <SafeAreaView>
    <View className="flex-row mx-4 justify-between items-center mt-6">
 <TouchableOpacity 
 onPress={()=>navigation.goBack()}
 className="bg-white rounded-2xl p-3 shadow"
 >
    <ChevronDoubleLeftIcon size={20} color="black" />
 </TouchableOpacity>

 <TouchableOpacity 
 className="bg-white rounded-2xl p-3 shadow"
 >
    <HeartIcon size={20} color="black" />
 </TouchableOpacity>
    </View>

    <View className="flex justify-center items-center">
        <Image source={item.image} className="w-48 h-48"/>
        <Text className="text-white text-semibold text-3xl">{item.name}</Text>
    </View>

    <View className="flex-row justify-center items-center mt-6">
        <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3">
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
               <MinusIcon size={20} strokeWidth={1.8} color="black" />
            </TouchableOpacity>
            <Text className="text-xl">1</Text>
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
             <PlusIcon size={20} strokeWidth={1.8} color="black" />
            </TouchableOpacity>
        </View>
    </View>

    <View className="flex-row justify-between items-center mx-4 h-20 overflow-hidden mt-6">
        <Animatable.View
        delay={100}
        animation="slideInDown"
        className="flex items-center" 
        >
          <FireIcon size={30} color="red" />
          <Text className="font-semibold">130 cal</Text>
        </Animatable.View>

        <Animatable.View
        delay={200}
        animation="slideInDown"
        className="flex items-center space-y-2"
        >
          <ClockIcon size={30} color="blue" />
          <Text className="font-semibold">24 hours</Text>
        </Animatable.View>

        <Animatable.View
        delay={300}
        animation="slideInDown"
        className="flex items-center space-y-2"
        >
          <ChatBubbleBottomCenterIcon size={30} color="purple" />
          <Text className="font-semibold">Lets Chat</Text>
        </Animatable.View>

        <Animatable.View
        delay={400}
        animation="slideInDown"
        className="flex items-center space-y-2"
        >
          <ScaleIcon size={30} color="green" />
          <Text className="font-semibold">300 g</Text>
        </Animatable.View>
    </View>

    <View className="mx-4 mt-6 space-y-3 h-40">
    <Animatable.Text
    animation="slideInUp"
    className="text-3xl font-semibold text-gray-800"
    >
        Description
    </Animatable.Text>
    <Animatable.Text
    delay={100}
    animation="slideInUp"
    className="text-gray-600 tracking-wider"
    >
        {item.desc}
    </Animatable.Text>
    </View>

    <View className="mx-4 flex-row justify-between items-center">
     <Animatable.Text
     animation="slideInRight"
     delay={100}
     className="text-3xl font-semibold text-gray-800"
     >
        ${item.price}
     </Animatable.Text>

     <Animatable.Text
     delay={100}
     animation="slideInRight"
     >
        <TouchableOpacity className="bg-gray-800 p-4 px-14 rounded-2xl">
            <Text className="text-white text-xl font-semibold">Add to Cart</Text>
        </TouchableOpacity>
     </Animatable.Text>
    </View>
   </SafeAreaView>
    </View>
  )
}

