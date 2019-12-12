import React, { Component } from 'react';

import { Container, Content,Text } from 'native-base';
import {WebView} from 'react-native';





export default class Mapping extends Component {
    render() {
        return (
           <Container>
                <WebView
            source={{uri: this.props.mappingLocation}}
            style={{marginTop: 20}}
          />
           </Container>
          

                
         
            


        );
    }
}

