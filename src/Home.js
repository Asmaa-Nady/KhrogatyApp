import React, { Component } from 'react';
import MainFooter from './common/MainFooter.js';
import { Container, Card, Content,} from 'native-base';
import { ImageBackground,Image,AsyncStorage } from 'react-native';

import Places from './categories/Places.js';
import HeaderHome from './common/HeaderHome.js';
import Restaurants from './categories/Restaurants.js';
import ThingsToDo from './categories/ThingsToDo.js';
export default class Home extends Component {
   
   componentDidMount=()=>{
    
        AsyncStorage.setItem('home','1')
    }
    render() {
        return (
            <Container>
                <Content>
                <HeaderHome />
                    <Card>
                        <Places />
                    </Card>
                    <Card>
                        <Restaurants />
                    </Card>
                    <Card>
                        <ThingsToDo />
                    </Card>
                </Content>
                <MainFooter activeHome="true"/>
                </Container>
        );
    }
}

