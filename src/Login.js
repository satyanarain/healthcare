
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,Platform,Image, TouchableOpacity,ImageBackground,} from 'react-native';
import {  createStackNavigator, } from 'react-navigation';
import DatePicker from 'react-native-datepicker'
import DatePicker from 'react-native-datepicker'
class Login extends Component {
  static navigationOptions = {
  header: { visible:false },
  title: 'Welcome',
  };

constructor(props) {
 super();
   this.state = {

     UserEmail: '',
     UserPassword: '',
      isVisible : true,
      date:"2018-08-20"
   }
//this.state = {date:"2016-05-15"}
 }
 // this.props.navigator.replace({
 //        title: 'ProviderList',
 //        component: ProviderList,
 //        passProps: {text: "hai"},``
 //        navigationBarHidden: true,
 //  });
 Hide_Splash_Screen=()=>{

     this.setState({
       isVisible : false

     });

   }
static navigationOptions = { title: 'Welcome', header: null,  navigationBarHidden: true};
   componentDidMount(){

     var that = this;

     setTimeout(function(){

       that.Hide_Splash_Screen();

     }, 1000);



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

                      <Image source={require('../assets/splash-screen.jpg')}
                      style={{width:'100%', height: '100%', resizeMode: 'contain'}} />

                  </View>


                  <TouchableOpacity
                    activeOpacity = { 0.5 }
                    style={styles.TouchableOpacity_Style}
                    onPress={this.Hide_Splash_Screen} >

                      <Image source={require('../assets/splash-screen.jpg')}
                      style={{width:25, height: 25}} />

                  </TouchableOpacity>


              </View> )
return (
  <ImageBackground style={ styles.imgBackground } resizeMode='cover' source={require('../assets/background.png')}>
<View style={styles.container}>
<Image  source={require('../assets/logo.png')} style={{marginBottom:40,marginTop:30}}/>

<View style={styles.SectionStyle1}>
  <Image source={require('../assets/user_icon.png')} style={styles.ImageStyle} />
  <TextInput
              style={{flex:1,width: 100,backgroundColor: '#ede9e0'}}
              placeholder="Member ID"
              underlineColorAndroid="transparent"
          />

</View>
<View style={styles.SectionStyle}>
  <Image source={require('../assets/cal.png')} style={styles.ImageStyle_birth} />
  <DatePicker
     style={{width: 267,backgroundColor: '#ede9e0'}}
     customStyles={{
   dateInput: {
     alignItems: 'flex-start',
     borderWidth: 0,


   },
   dateText:{
    // textAlign: 'left',
     fontSize: 18,
     color: '#000',
        paddingLeft:0
   }
 }}
     showIcon={false}
     //customStyles={customStyles}
      ref='datepicker'
     date={this.state.date}
     mode="date"
     placeholder="Select date"
     format="YYYY-MM-DD"
     minDate="1900-05-01"
     maxDate="2020-12-12"
     confirmBtnText="OK"
     cancelBtnText="Cancel"

     onDateChange={(date) => {this.setState({date: date})}}   />

</View>



<TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>

        <Image
         source={require('../assets/login.png')}
         style={{width:267,marginTop:10,}}
         />
  </TouchableOpacity>
{
                  (this.state.isVisible === true) ? Splash_Screen : null
                }
</View>
</ImageBackground>
   );
 }
}
/*********************Second login**************************************************************************************/
// Creating Profile activity.
/**************navigate start*************************************************************************************/
export default MainProject = createStackNavigator(
{
  First: { screen: Login },
},
{
  headerMode: 'screen',
  navigationOptions: {
  header: { visible: false },
 Login : {
     screen: Login,
     navigationOptions: {
       header: null,
     }
   },
    // headerVisible: false,
    //   visible: false,
    //   title: 'Login',
    //   header: null //this will hide the header
  }
 }


);





/**************navigate*************************************************************************************/
const styles = StyleSheet.create({
  container: {
          flex: 1,
          marginTop: 25,
          paddingTop:0,
          alignItems: 'center',

          //justifyContent: 'center',
        //  paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },

    imgBackground: {
            width: '100%',
            height: '100%',
            //resizeMode: 'cover',
            flex: 1,
backgroundColor:'blue',
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    ImageStyle_birth: {
        padding: 10,
        marginLeft: 5,
        paddingLeft:20,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },


    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ede9e0',
        borderWidth: .5,
        borderColor: '#ede9e0',
        height: 40,
        borderRadius: 5 ,
        margin: 10,
        width: 267,
          paddingLeft:40,
    },

    SectionStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ede9e0',
        borderWidth: .5,
        borderColor: '#ede9e0',
        height: 40,
        borderRadius: 5 ,
        margin: 10,
        width: 267,
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
        //justifyContent: 'center',
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

}


});
