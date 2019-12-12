import React, { Component } from 'react';
import { Spinner,  } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { ImageBackground,Image,AsyncStorage } from 'react-native';
export default class Splash extends Component {

    componentDidMount() {
	
        AsyncStorage.getItem('home').then((value)=>{
            if (value=== '1'){
                Actions.pop(),Actions.Home()
            }
            else{
                Actions.pop(),Actions.OnBoarding1()
            }
        })
    }

    
    render() {
        return (
            <ImageBackground  source={require('./img/Khrogaty-Cuts/Backgrounds/splash-bg.png')} style={{ width: '100%', height: '100%' }}>
                <Spinner color='blue' />
                <Image source={require('./img/Khrogaty-Cuts/Logo/khrogaty-logo.png')} style={{ width: 150, height: 150,marginTop:140,marginLeft:120 }}/>
            </ImageBackground>
        );
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         Actions.pop(), Actions.Home();
    //      }, 1000)
    // }
}

