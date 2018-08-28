import React, { Component } from 'react';
import { Platform,StyleSheet, TextInput, View, Alert, Button, Text,ImageBackground} from 'react-native';

import {  createStackNavigator, } from 'react-navigation';

//import  ProfileActivity  from '.../src/ProfileActivity';
class HomeScreen extends React.Component {
  state = {
      activeTab: 'home',
      activeTintColor:'black',
      initialRouteName: 'Album',
  activeTintColor: '#f0edf6',


    }

    tabs = [
      {
        key: 'home1',
        label: 'Home1',
        color:'#000000',
        barColor: '#ff7417',
        backgroundColor:'#000',
        activeColor:'#000000',
        //pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: 'home'
      },
      {
        key: 'account',
        label: 'Movies & TV1',
        activeColor:'#000000',
        //barColor: '#00695C',
        //pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: 'account'
      },
      {
        key: 'music',
        label: 'Music',
        //barColor: '#6A1B9A',
        //pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: 'bell'
      },
      {
        key: 'books',
        label: 'Books',
        //barColor: '#1565C0',
        //pressColor: 'rgba(255, 255, 255, 0.16)',
        icon: 'menu'
      }
    ]

    state = {
      activeTab: this.tabs[0].key,
      activeTintColor:'black',
      initialRouteName: 'Album',
  activeTintColor: '#f0edf6',
    }

    renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
      <IconTab
        isActive={isActive}
        showBadge={tab.key === 'home'}
        renderBadge={() => <Badge>2</Badge>}
        key={tab.key}
        label={tab.label}
        renderIcon={this.renderIcon(tab.icon)}
      />
  )



  render() {



    return (
      <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/home-bac.png')}>

      <View style={{
              flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop:130,
              marginBottom:20
            }}>
              <View><Image  source={require('../assets/acc-info.png')} /></View>
              <View></View>
              <View style={{marginTop:15,}}><Image  source={require('../assets/id-card.png')} /></View>
            </View>

    <View style={styles.container_logo}>
    <Image  source={require('../assets/logo.png')} />
    </View>
    <View style={{
            //flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,

          }}>
            <View style={{marginLeft:8,}}><Image  source={require('../assets/appointments.png')} /></View>
            <View></View>
            <View style={{marginRight:8,}}><Image  source={require('../assets/telemedicine.png')} /></View>
          </View>

          <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                  <View></View>
                  <View><Image  source={require('../assets/customer-service.png')} /></View>
                  <View></View>
                </View>
                <View style={styles.shadow1}>
                <Image  source={require('../assets/b.png')} />
                </View>
                <View style={{
                        //flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 0,
                        padding:10,
                        backgroundColor:'#ffffff'

                      }}>
                        <View style={{marginLeft:8,}}><Image  source={require('../assets/home-active.png')} /></View>
                        <View><Image  source={require('../assets/user.png')} /></View>
                        <View><Image  source={require('../assets/notification.png')} /></View>
                        <View style={{marginRight:8,}}><Image  source={require('../assets/list.png')} /></View>
                      </View>

</ImageBackground>
    );
  }
}
