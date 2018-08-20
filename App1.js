import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert,ImageBackground } from 'react-native';

export default class Myapp extends Component<{}>
{

  constructor(){

    super();

    this.state={

      isVisible : true,

    }

  }

  Hide_Splash_Screen=()=>{

    this.setState({
      isVisible : false

    });

  }

  componentDidMount(){

    var that = this;

    setTimeout(function(){

      that.Hide_Splash_Screen();

    }, 5000);



  }

    render()
    {
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

                    <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/close_button.png'}}
                    style={{width:25, height: 25}} />

                </TouchableOpacity>


            </View> )

        return(

            <View style = { styles.MainContainer }>

            <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('./assets/background.png')}>
          <View style={styles.container}>
          <Image   style={{marginBottom: 50}} source={require('./assets/logo.png')}/>

          <TextInput placeholder="Member ID" onChangeText={UserEmail => this.setState({UserEmail})}
          underlineColorAndroid='transparent' style={styles.textInput}/>
          <DatePicker
             style={{width: 200,backgroundColor: '#FFFFFF',}}
             ref='datepicker'
             date={this.state.date}
             mode="date"
             placeholder="Select date"
             format="YYYY-MM-DD"
             minDate="2016-05-01"
             maxDate="2020-12-12"
             confirmBtnText="OK"
             cancelBtnText="Cancel"
             onDateChange={(date) => {this.setState({date: date})}}   />
            <TextInput placeholder="BirthDate" onChangeText={UserPassword => this.setState({UserPassword})} underlineColorAndroid='transparent'

              style={styles.textInput} secureTextEntry={true} />

            <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />
          {
                            (this.state.isVisible === true) ? Splash_Screen : null
                          }
          </View>
          </ImageBackground>

                {
                  (this.state.isVisible === true) ? Splash_Screen : null
                }


            </View>

        );
    }
}

const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },

    SplashScreen_RootView:
    {
        justifyContent: 'center',
        flex:1,
      //  margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',

    },

    SplashScreen_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex:1,
      //  margin: 20,
    },
    textInput:
        {
            height: 40,
            borderWidth: 1,
            marginVertical: 5,
            alignSelf: 'stretch',
            padding: 8,
            fontSize: 16,
            backgroundColor: '#FFFFFF',
            color: '#000'
        },
    TouchableOpacity_Style:{

        width:25,
        height: 25,
        top:9,
        right:9,
        position: 'absolute'

    }
});
