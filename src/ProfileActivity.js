
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text} from 'react-native';

// Importing Stack Navigator library to add multiple activities.
//import { StackNavigator } from 'react-navigation';
import {  createStackNavigator, } from 'react-navigation';

class ProfileActivity extends Component
{

 // Setting up profile activity title.
  static navigationOptions =
  {
     title: 'ProfileActivity',

  };


  render()
  {

    const {goBack} = this.props.navigation;

     return(
        <View style = { styles.MainContainer }>

           <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>

           <Button title="Click here to Logout" onPress={ () => goBack(null) } />

        </View>
     );
  }
}


/**************navigate start*************************************************************************************/
export default MainProject = createStackNavigator(
{
  //First: { screen: Login },

  Second: { screen: ProfileActivity }

});
/**************navigate*************************************************************************************/
