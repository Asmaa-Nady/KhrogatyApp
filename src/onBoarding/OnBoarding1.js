
import React, { Component } from 'react';
import {Image,StyleSheet,View,ImageBackground,TouchableOpacity} from'react-native';
import { Container, Header, Content, Tab, Tabs ,TabHeading,Icon,Text,Button} from 'native-base';
import OnBoarding2 from './OnBoarding2';
import OnBoarding3 from './OnBoarding3';
import { Actions } from 'react-native-router-flux';


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


export default class OnBoarding1 extends Component {
    


    // constructor() {
    //     super();
    //     this.state = {
    //         page: 0,
    //     }
    // }

    // saveItem() {
    //     try {
    //         AsyncStorage.setItem("tst", "home");
    //     } catch (err) {
    //         alert(err);
    //     }
    // }



    render() {
        return (


//             <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>

//             <ImageBackground source={require('../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-left.png')}
//                 style={{ width: '100%', height: '100%' }}>
//                 <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')}
//                     style={{ height: 60, width: 60, alignSelf: 'center', marginTop: 300, marginRight: 19 }} />
//                 <List style={{ marginTop: 100, }}>

//                     {/* <CardItem >
              
//             <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')} style={{ height: 60, width:60, alignSelf:'center', }} />
            
//             </CardItem> */}
//                     <View style={{ flexDirection: 'column', marginHorizontal: 10, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
//                         <Text>Place for going out</Text>
//                         <Text style={{
//                             width: '90%',
//                             margin: 10, textAlign: 'center'
//                         }} note>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, dolore.</Text>
//                     </View>
//                     <View >

//                         <Right style={{ alignSelf: 'flex-end' }}>
//                             <Button transparent iconRight light onPress={() => { this.setState({ page: 1 }) }}>
//                                 <Text style={{ color: '#333' }}>Next</Text>
//                                 <Icon style={{ color: '#333' }} name='arrow-forward' />
//                             </Button>
//                         </Right>
//                     </View>
//                 </List>
//                 {this.nextPage()}
//             </ImageBackground>

// </View>



<View style={styles.container}>
        <ImageBackground style={styles.imagebackground}
          source={require('../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-right.png')}>
          <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')}style={{ width:150,height:150,marginBottom: 20}}></Image>
          
          <Image source={require('../img/Khrogaty-Cuts/VectorIcons/home-first-icon.png')}style={{ width:60,height:60,marginTop:200}}></Image>
          
          <Text style={{fontSize:20 }}>  Places For Going Out</Text>
          <Button onPress={()=>{Actions.OnBoarding2()}} iconRight transparent style={{marginLeft:270,marginBottom:-90}} >
            <Text style={{color:"black"}}>Next</Text>
            <Icon style={{color:"black"}} name='arrow-forward' />
          </Button>
        </ImageBackground>
          </View>
        );
    }

        
    // nextPage = () => {
    //     if (this.state.page == 1) {
    //         return <OnBoarding2 />
    //     }
    // }
}

// import React, { Component } from 'react';
// import {Image,StyleSheet,View,ImageBackground,TouchableOpacity} from'react-native';
// import { Container, Header, Content, Tab, Tabs ,TabHeading,Icon,Text,Button} from 'native-base';
// import { Actions } from 'react-native-router-flux';
// import OnBoarding2 from './OnBoarding2';
// import OnBoarding3 from './OnBoarding3';
  

// const styles = StyleSheet.create({
  
  
//     container: {
//       flex: 1,
      
      
//     },
//     loadingText: {
//         color: 'black',
//         fontSize: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },

//       imagebackground:{
//         width: '100%', height: '100%',
//         justifyContent: 'center',
//     alignItems: 'center',
//       }
    
//   });


// export default class OnBoarding1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             page: 0,
//         }
//     }

//     saveItem() {
//         try {
//             AsyncStorage.setItem("tst", "home");
//         } catch (err) {
//             alert(err);
//         }
//     }


//   render( ) 
  
//   { 
   
//     return (


//         <View style={styles.container}>
//         <ImageBackground style={styles.imagebackground}
//           source={require('')}>
//           <Image source={require('../img/Khrogaty-Cuts/Backgrounds/onboarding-bg-right.png')}style={{ width:150,height:150,marginBottom: 20}}></Image>
          
//           <Image source={require('../img/Khrogaty-Cuts/Logo/khrogaty-logo.png')}style={{ width:60,height:60,marginTop:200}}></Image>
          
//           <Text style={{fontSize:20 }}>  Places For Going Out</Text>


          



//           <Button onPress={()=>{Actions.OnBoarding2()}} iconRight transparent style={{marginLeft:270,marginBottom:-90}} >
//             <Text style={{color:"black"}}>Next</Text>
//             <Icon style={{color:"black"}} name='arrow-forward' />
//           </Button>




 
          
        
        
//         </ImageBackground>
//           </View>





//     )
// }
// }