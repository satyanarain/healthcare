
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,Platform,Image, TouchableOpacity,ImageBackground} from 'react-native';
import {  createStackNavigator, } from 'react-navigation';

class Login extends Component {


constructor(props) {
 super();
   this.state = {

     UserEmail: '',
     UserPassword: '',
      isVisible : true
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

/*******************************************start login***********************************************/
UserLoginFunction = () =>{
const { UserEmail }  = this.state ;
const { UserPassword }  = this.state ;
fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
 method: 'POST',
 headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
 },
 body: JSON.stringify({
  email: UserEmail,
  password: UserPassword

 })

}).then((response) => response.json())
     .then((responseJson) => {

       // If server response message same as Data Matched
      if(responseJson === 'Data Matched')
       {

           this.props.navigation.navigate('Second', { Email: UserEmail });

       }
       else{

         Alert.alert(responseJson);
       }

     }).catch((error) => {
       console.error(error);
     });


 }
/*************************user login ajax**********************************************/


render() {
  let Splash_Screen = (

              <View style={styles.SplashScreen_RootView}>

                  <View style={styles.SplashScreen_ChildView}>

                      {/* Put all your components Image and Text here inside Child view which you want to show in Splash Screen. */}

                      <Image source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/welcome.png'}}
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
return (
<View style={styles.MainContainer}>
<ImageBackground style={ styles.imgBackground }
                 resizeMode='cover'
                 source={require('../assets/background.png')}>


{
                  (this.state.isVisible === true) ? Splash_Screen : null
                }
     <TextInput placeholder="Enter User Email" onChangeText={UserEmail => this.setState({UserEmail})}
     underlineColorAndroid='transparent' style={styles.textInput}/>

       <TextInput placeholder="Enter User Password" onChangeText={UserPassword => this.setState({UserPassword})} underlineColorAndroid='transparent'

         style={styles.textInput} secureTextEntry={true} />

       <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#2196F3" />


</ImageBackground>
</View>

   );
 }
}
/*********************Second login**************************************************************************************/

// Creating Profile activity.



/**************navigate start*************************************************************************************/
export default MainProject = createStackNavigator(
{
  First: { screen: Login },

  //Second: { screen: ProfileActivity }

});
/**************navigate*************************************************************************************/
const styles = StyleSheet.create({

  MainContainer:
    {
      justifyContent: 'center',
       marginTop: 50,
       padding: 20,
       backgroundColor: '#ffffff',


      //  flex: 1,

        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
    imgBackground: {
            width: '100%',
            height: '100%',
            flex: 1
    },

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
borderColor: '#2196F3',

// Set border Radius.
borderRadius: 5 ,

},

TextComponentStyle: {
  fontSize: 20,
 color: "#000",
 textAlign: 'center',
 marginBottom:5
},

SplashScreen_RootView:
{
    justifyContent: 'center',
    flex:1,
    margin: 10,
    position: 'absolute',
    width: '100%',
    height: '100%',

},
textInput:
    {
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        marginVertical: 5,
        alignSelf: 'stretch',
        padding: 8,
        fontSize: 16
    },
SplashScreen_ChildView:
{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
    flex:1,
    margin: 20,
},

TouchableOpacity_Style:{

    width:25,
    height: 25,
    top:9,
    right:9,
    position: 'absolute'
  //  zIndex: 100

},
TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
borderColor: '#2196F3',

// Set border Radius.
borderRadius: 5 ,

},

TextComponentStyle: {
  fontSize: 20,
 color: "#000",
 textAlign: 'center',
 marginBottom:5
}


});
