
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
//import { StackNavigator } from 'react-navigation';
import {  createStackNavigator, } from 'react-navigation';

// Creating Login Activity.
/*
const App = createStackNavigator({
  Home: { screen: HomeScreen }
});*/
/*********************start login**************************************************************************************/

class Register extends Component {
static navigationOptions =
  {
     title: 'Register',
  };

constructor(props) {

   super(props)

   this.state = {

     UserEmail: '',
     UserPassword: ''

   }

 }

UserRegisterFunction = () =>{

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
render() {
   return (

<View style={styles.MainContainer}>
     <TextInput

         // Adding hint in Text Input using Place holder.
         placeholder="Enter User Email"

         onChangeText={UserEmail => this.setState({UserEmail})}

         // Making the Under line Transparent.
         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

         // Adding hint in Text Input using Place holder.
         placeholder="Enter User Password"

         onChangeText={UserPassword => this.setState({UserPassword})}

         // Making the Under line Transparent.
         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}

         secureTextEntry={true}
       />

       <Button title="Click Here To Register" onPress={this.UserRegisterFunction} color="#2196F3" />



</View>

   );
 }
}
/*********************Second Register**************************************************************************************/

// Creating Profile activity.



/**************navigate start*************************************************************************************/
export default MainProject = createStackNavigator(
{
  Third: { screen: Register },

  //Second: { screen: ProfileActivity }

});
/**************navigate*************************************************************************************/
const styles = StyleSheet.create({

MainContainer :{
  justifyContent: 'center',
  marginTop: 50,
  padding: 20,
  backgroundColor: '#ffffff',
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
