import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Body, View, Left, Button, } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import About from './common/About';
import Mapping from './common/Mapping';
import HeaderDetails from './common/HeaderDetails';
export default class Details extends Component {
    render() {
        return (
            <Container>
                 <HeaderDetails txtTitle={this.props.pageTitle} />
                <Tabs tabBarUnderlineStyle={{ backgroundColor: "green"}} >
                    <Tab heading= {<TabHeading style={{ backgroundColor: "white"}} > 
                    <Body style={{flexDirection:"row"}}>
                    <Image source={require('./img/Khrogaty-Cuts/Icons/gabout.png')}
                            style={{ width: 15, height: 20,marginLeft:20,marginRight:15}} />
                        <Text>About</Text>
                    </Body>                      
                    </TabHeading>}>
                        <About 
                        titlename={this.props.pageTitle}
                        imagename={this.props.img }
                        descreptionname={this.props.pageDescreption}
                        cityName={this.props.city}
                        phoneName={this.props.phone}
                        emailName={this.props.email}
                        idName={this.props.idName}
                        />
                    </Tab>
                    <Tab heading={<TabHeading style={{ backgroundColor: "white" }}>
                    <Body style={{flexDirection:"row"}}>
                    <Image source={require('./img/Khrogaty-Cuts/Icons/grey-map-marker.png')}
                            style={{ width: 15, height: 20,marginLeft:20,marginRight:15}} />
                        <Text>Map</Text>
                    </Body>
                    </TabHeading>}>
                        <Mapping
                         mappingLocation={this.props.loctionMapping}
                          />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

