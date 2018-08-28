import React from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,Platform,Image, TouchableOpacity,ImageBackground} from 'react-native';
import {  createStackNavigator, } from 'react-navigation';
import DatePicker from 'react-native-datepicker';
import styled from 'styled-components';
//import Telemedicine from './Telemedicine';
import  Home  from './src/HomeScreen';

import BottomNavigation, {
  IconTab,
  Badge
} from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
class MianScreen extends React.Component {
constructor(props) {
   super();
     this.state = {

       UserEmail: '',
       UserPassword: '',
        isVisible : true,
        Login:false,
        date:null
     }
//this.state = {date:"2016-05-15"}
   }

  Hide_Splash_Screen=()=>{

      this.setState({
        isVisible : false

      });

    }
 static navigationOptions = { title: 'Welcome', header: null,  navigationBarHidden: true};
/***********************************************************/
    componentDidMount(){
    var that = this;
    setTimeout(function(){

        that.Hide_Splash_Screen();

      }, 5000);

      setTimeout(() => {this.setState({Login: true})}, 4000);
   }

  render() {
    const { navigate } = this.props.navigation;
    const {
       Login
     } = this.state;

     // const = {
     //   data,
     //   meta
     // } = this.props;
let Splash_Screen = (

                <View style={styles.SplashScreen_RootView}>

                    <View style={styles.SplashScreen_ChildView}>

                        {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

                        <Image source={require('./assets/splash-screen.jpg')}
                        style={{width:'100%', height: '100%', resizeMode: 'contain'}} />

                    </View>
                     <TouchableOpacity
                        activeOpacity = { 0.5 }
                        style={styles.TouchableOpacity_Style}
                        onPress={this.Hide_Splash_Screen} >
                        <Image source={require('./assets/splash-screen.jpg')}
                        style={{width:25, height: 25}} />
                      </TouchableOpacity>
                       </View> )


    return (
      <View style = { styles.MainContainer } className={this.state.visible}>
      {
            Login &&
                    <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('./assets/background.png')}>
                    <View style={styles.container}>
                    <Image  source={require('./assets/logo.png')} style={{marginBottom:65,marginTop:100}}/>

                    <View style={styles.SectionStyle1}>
                      <Image source={require('./assets/user_icon.png')} style={styles.ImageStyle} />
                      <TextInput
                                  style={{flex:1,width: 100}}
                                  placeholder="Member ID"
                                  placeholderTextColor="#000"
                                  underlineColorAndroid="transparent"
                              />

                    </View>
                    <View style={styles.SectionStyle}>
                      <Image source={require('./assets/cal.png')} style={styles.ImageStyle_birth} />
                      <DatePicker
                         style={{width: 267,backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
                         customStyles={{
                       dateInput: {
                         alignItems: 'flex-start',
                         borderWidth: 0,

                        },

                        placeholderText: {
                          color: '#000'
                        },
                       dateText:{
                        // textAlign: 'left',

                         color: '#000',
                            paddingLeft:0,


                       }
                     }}
                         showIcon={false}
                         //customStyles={customStyles}
                          ref='datepicker'
                         date={this.state.date}
                         mode="date"
                         placeholder="Birthday"
                         format="DD-MM-YYYY"
                         minDate="1900-05-01"
                         maxDate="2020-12-12"
                         autoComplete="off"
                         confirmBtnText="OK"
                         cancelBtnText="Cancel"

                         onDateChange={(date) => {this.setState({date: date})}}   />

                    </View>
                    <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}         onPress={() => navigate('Home')}>
                    <Image
                             source={require('./assets/login.png')}
                             style={{width:267,marginTop:10,}}
                             />
                      </TouchableOpacity>
                    {
                                      (this.state.isVisible === true) ? Splash_Screen : null
                                    }
                    </View>
                      </ImageBackground>
                    }

                      {
                        (this.state.isVisible === true) ? Splash_Screen : null
                      }


                  </View>
  );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('./assets/home-bac.png')}>
      <View style={{
              flex: 0.5,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop:130,
              marginBottom:20
            }}>
              <View><Image  source={require('./assets/acc-info.png')} /></View>
              <View></View>
              <View style={{marginTop:15,}}><Image  source={require('./assets/id-card.png')} /></View>
            </View>
    <View style={styles.container_logo}>
    <Image  source={require('./assets/logo.png')} />
    </View>
    <View style={{
            //flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,

          }}>
            <View style={{marginLeft:8,}}><Image  source={require('./assets/appointments.png')} /></View>
            <View></View>
            <View style={{marginRight:8,}}><Image  source={require('./assets/telemedicine.png')} /></View>
          </View>

          <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                  <View></View>
                  <View><Image  source={require('./assets/customer-service.png')} /></View>
                  <View></View>
                </View>
                <View style={styles.shadow1}>
                <Image  source={require('./assets/b.png')} />
                </View>
                
                <View style={{
                        //flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 0,
                        padding:10,
                        backgroundColor:'#ffffff'

                      }}>
                        <View style={{marginLeft:8,}}><Image  source={require('./assets/home-active.png')} /></View>
                        <View><Image  source={require('./assets/user.png')} /></View>
                        <View><Image  source={require('./assets/notification.png')} /></View>
                        <View style={{marginRight:8,}}><Image  source={require('./assets/list.png')} /></View>
                      </View>

</ImageBackground>
    );
  }
}


const SimpleApp = createStackNavigator({
  Mian: {
    screen: MianScreen,
    navigationOptions: {
      title: 'Mian'
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',header: null
    }
  },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({

container: {
          flex: 1,
          margin: 0,
          padding:0,
          alignItems: 'center',
         //justifyContent: 'center',
        //  paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },
      MainContainer:
       {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
       },

      container_logo: {
              //  margin: 0,
                marginBottom:20,
                padding:0,
                alignItems: 'center',
            },
          shadow1: {
                    //  margin: 0,
                      marginBottom:0,
                      padding:0,
                      alignItems: 'center',
                  },


container_home: {
  backgroundColor:'#4286f4',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'flex-start',
  marginTop:50,

},
    imgBackground: {
            width: '100%',
            height: '100%',
            //resizeMode: 'cover',
            flex: 1,

    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 20,
        width: 8,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    ImageStyle_birth: {
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        //paddingLeft:10,
        height: 20,
        width: 20,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    viewStyleOne: {
        width:40,
        height:40,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#b642f4'
      },
      textStyle:{
        textAlign:'center'
      },
    innerContainer: {
          flex: .5,
                flexDirection: 'row',
                alignItems: 'flex-start' //replace with flex-end or center
          },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#0f0',
        borderWidth: .5,
        borderColor: '#ffa970',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',

        height: 40,
        borderRadius: 5 ,
        margin: 20,
        width: 267,
        paddingLeft:40,
        shadowOffset:{  width: 5,  height: 5,  },
        borderWidth: 1,

    },

    SectionStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: .5,
        borderColor: '#ffa970',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 40,
        borderRadius: 5 ,
        margin: 10,
        width: 267,
    },
    SectionStyle2: {
        borderWidth: .5,
        marginRight: 30,
        width: 90,
        height:90
    },
  textInput:
    {
        height: 40,
        borderWidth: 1,
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16,
        backgroundColor: '#ede9e0',
        color: '#ede9e0',
        borderColor:'#ede9e0',
        width: 267,
        margin:30,
     },
    SplashScreen_RootView:
    {
      flex:1,
        margin: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',

    },
  SplashScreen_ChildView:
  {
    justifyContent: 'center',
    alignItems: 'center',

    flex:1,

  },

  TouchableOpacity_Style:{

    position: 'absolute',
    zIndex: 100000

  },
  container2: {
      flex: .5,
      flexDirection: 'row',
      alignItems: 'flex-start' //replace with flex-end or center
    },
    box: {
      width: 100,
      height: 100
    },
    box1: {
      backgroundColor: '#2196F3'
    },
    box2: {
      backgroundColor: '#8BC34A'
    },
    box3: {
      backgroundColor: '#e3aa1a'
    }


});
