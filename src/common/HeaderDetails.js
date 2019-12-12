import React, { Component } from 'react';
import { Text, View, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';


import { ImageBackground, TouchableOpacity } from 'react-native';



export default class HeaderDetails extends Component {
    render() {
        return (




            <View style={{ width: "100%", height: 100, }}>

                <ImageBackground
                    source={require('../img/Khrogaty-Cuts/Backgrounds/theme-header.png')}
                    style={{ width: "100%", height: '100%' }}>

                    <View style={{ flexDirection: "row" }}>
                        
                            <TouchableOpacity onPress={() => {
                                Actions.pop({});
                            }} >
                                <Icon style={{ marginTop: 60, fontSize: 30, color: "white" }} name='arrow-back' />
                            
                            </TouchableOpacity>
                       
                        <Text style={{ marginTop: 60, fontSize: 16, color: "white",marginLeft:10 }}>
                            {this.props.txtTitle}
                        </Text>
                    
                    </View>
              
                </ImageBackground>

            </View>






        );
    }
}

