
import React, { Component } from 'react';
import { Image, ImageBackground,StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, View } from 'native-base';

import { Actions } from 'react-native-router-flux';
import OnBoarding2 from './OnBoarding2';
import OnBoarding1 from './OnBoarding1';

const styles = StyleSheet.create({
  
  
    container: {
      flex: 1,
      
      
    },
    loadingText: {
        color: 'black',
        fontSize: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },

      imagebackground:{
        width: '100%', height: '100%',
        justifyContent: 'center',
    alignItems: 'center',
      }
    
  });
export default class OnBoarding3 extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
        }
    }
    render() {
        return (

            // <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            //     <ImageBackground source={require('../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-left.png')}
            //      style={{ width: '100%', height: '100%' }}>
            //                 <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')}
            //                  style={{ height: 60, width: 60, alignSelf: 'center',marginTop:300,marginRight:19  }} />

            //         <List style={{ marginTop: 100, }}>

            //             {/* <CardItem cardBody style={{
            //                 alignSelf: 'center',
            //                 width: 60, height: 60,
            //                 borderRadius: 10,
            //                 alignContent: 'center',
            //                 justifyContent: 'center'
            //             }}> */}
            //             {/* <CardItem>
            //                 <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')} style={{ height: 60, width: 60, alignSelf: 'center', }} />

            //             </CardItem> */}
            //             <View style={{ flexDirection: 'column', marginHorizontal: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
            //                 <Text>What Do I DO ?</Text>
            //                 <Text style={{
            //                     width: '90%',
            //                     margin: 10, textAlign: 'center'
            //                 }} note>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolore.</Text>
            //             </View>
            //             <View >
            //                 <Left style={{ alignSelf: 'flex-start' }}>
            //                     <Button transparent iconLeft light onPress={() => { this.setState({ page: 1 }) }}>
            //                         <Icon style={{ color: '#333' }} name='arrow-back' />

            //                         <Text style={{ color: '#333' }}>prev</Text>
            //                     </Button>
            //                 </Left>
            //                 <Body style={{ alignSelf: 'center' }}>
            //                     <Button
            //                         style={{ width: 120, height: 30, backgroundColor: 'green', borderRadius: 10, justifyContent: 'center' }}

            //                         iconRight light onPress={() => { Actions.Home()}}>
            //                         <Text style={{ color: '#fff', }} >start</Text>
            //                     </Button>
            //                 </Body>
            //             </View>
            //         </List>
            //         {this.nextPage()}
            //     </ImageBackground>
                
            // </View>

            <View style={styles.container}>
            <ImageBackground style={styles.imagebackground}
              source={require('../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-right.png')}>
              <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')}style={{ width:150,height:150,marginBottom: 20}}></Image>
              
              <Image source={require('../img/Khrogaty-Cuts/VectorIcons/home-third-icon.png')}style={{ width:60,height:60,marginTop:220}}></Image>
              
              <Text style={{fontSize:20 }}> What Do I Do?</Text>
    
              <View style={{flexDirection:"row",marginTop:20}}>
    
              <Left>

              <Button iconRight transparent onPress={()=>{Actions.pop()}}  >
                <Text style={{color:"black"}}>Prev</Text>
                <Icon style={{color:"black"}} name='arrow-back' />
              </Button>
              </Left>
      
              <Body style={{alignContent:"center"}}>
    
              <Button  onPress={()=>{Actions.Home()}} style={{marginLeft:-40}} rounded success>
                <Text>Start</Text>
              </Button>
             
              </Body>
    
              </View>
         </ImageBackground>
              </View>
        );
    }
    // nextPage = () => {
    //     if (this.state.page == 1) {
    //         return <OnBoarding2 />
    //     }
    }
