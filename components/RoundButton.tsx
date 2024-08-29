import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import  Torch  from 'react-native-torch'
import { ToastAndroid } from 'react-native'
export default function RoundButton() {
  
  const [power, setPower] = useState(false)
  const imageSource1 = '@/assets/images/eco-light.png'
   const imageSource2 = '@/assets/images/power.png'
   const offColor = 'red';
   const onColor = '#4CAF50';
  return (
    <TouchableOpacity style={[styles.buttton, {backgroundColor:power?onColor:offColor}]} onPress={async()=> {
      setPower(!power);
      try {
        if(Platform.OS === 'ios'){
          console.error(Torch);
          await Torch.switchState(power);
        }else{
          const cameraAllowed = await Torch.requestCameraPermission(
            'Camera Permissions', // dialog title
		        'We require camera permissions to use the torch on the back of your phone.' // dialog body
          );
          if(cameraAllowed){
            await Torch.switchState(power);
          }
        }
      } catch (e) {
        ToastAndroid.show(
          'We: '+e,
          ToastAndroid.SHORT
        );
      }
      }}>
      <Image 
      source={power?require(imageSource1):require(imageSource2)} 
      style = {styles.buttonLogo}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttton: {
        width: 100, // Width and height should be the same to make it round
        height: 100,
        // backgroundColor: '#4CAF50', // Button color
        borderRadius: 50, // Half of the width/height to make it circular
        justifyContent: 'center', // Center text horizontally
        alignItems: 'center', // Center text vertically
        elevation: 5, // Adds a shadow for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.8, // Shadow opacity for iOS
        shadowRadius: 2, // Shadow radius for iOS
    },
    buttonLogo: {
      width: 50, // Set the image size (adjust as needed)
      height: 50,
    }
})