import {View, Text, StyleSheet, TextInput,Linking,Platform} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CommonBtn from '../components/CommonBtn';

const CallAmb = () => {
  const openDial=(phone)=>{
    if(Platform.OS==='android'){
        Linking.openURL(`tel:${phone}`)
    }
    else{
        Linking.openURL(`telprompt:${phone}`)
    }
  }
  return (
    <View style={styles.container}>
      <Header icon={require('../images/back.png')} title={'Call Ambulance'} />
      <TextInput placeholder="Give emergency number" style={styles.address}/>
      <CommonBtn w={200} h={50} txt={'Call Now'} status={true} />
    </View>
  );
};

export default CallAmb;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
  },
});
