// import React, { Component } from 'react';

import MainFooter from './common/MainFooter.js';
// import {Container,FooterTab,Footer,View,Content,Button,Icon,Text,Item,Input,Body,Left,Right,CardItem,ListItem,Card,Title} from "native-base";
// import {ImageBackground,ScrollView,Image,TouchableOpacity} from "react-native";
// import { Actions } from "react-native-router-flux";
 import HeaderDetails from './common/HeaderDetails.js';





import {Icon, Item, Input, Container, Thumbnail, Text, Left, Body, Button, Card, CardItem, Content, View } from 'native-base'
import React, { Component } from 'react';
import { Image } from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Search extends Component {
	state = {
		data: [],
		text: '',
	}
	componentDidMount() {

		fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=4')
			.then((response) =>
				response.json()
			)
			.then((responseJson) => {
				this.setState((prevState) => ({
					...prevState,
					data: prevState.data.concat(responseJson)
				}))
			})
			.catch((error) => {
				console.log(error);
			}).then(
				fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
					.then((response) =>
						response.json()
					)
					.then((responseJson) => {
						this.setState((prevState) => ({
							...prevState,
							data: prevState.data.concat(responseJson)
						}))
					})
					.catch((error) => {
						console.log(error);
					})
			).then(
				fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=2')
					.then((response) =>
						response.json()
					)
					.then((responseJson) => {
						this.setState((prevState) => ({
							...prevState,
							data: prevState.data.concat(responseJson)
						}))
					})
					.catch((error) => {
						console.log(error);
					})
			)
	}

	render() {
		const { text } = this.state;
		const { data } = this.state;
		let result;
		if (text === '') {
			result = [];
		} else {
			result = data.filter((i) => {
				return (i.title.rendered.toLowerCase().includes(text.toLowerCase()))
			});
		}
		// let result = text === '' 
		// ? [] 
		// : data.filter ((i) => {
		//     return i.title.rendered.toLowerCase().includes(text.toLowerCase())
		// });
		return (
			<Container>
				<Content>
        <HeaderDetails txtTitle="Search" />
					<Item rounded style={{
						marginTop: 20, borderColor: 'gray', alignSelf: 'center', width: '80%', height: 60, borderRadius: 10,
					}}  >
						<Icon name={'search'} style={{marginLeft: 20, color:'grey'}} />
						<Input onChangeText={(txt) => this.setState((prevState) => ({
							...prevState,
							text: txt.trim()
						}))}
							type='text' placeholder='Search here by place' value={this.text} />
					</Item>
					{
						result.length === 0 &&
						<Container>
							<Image
								style={{ height: 150, width: 150, marginTop: '20%', alignSelf: 'center' }}
								source={require('./img/Khrogaty-Cuts/VectorIcons/nosearch-icon.png')} />

							<Text style={{ alignSelf: 'center', fontSize: 20, marginTop: 10 }}>Search for any places</Text>

						</Container>
					}
					{result.length !== 0 &&
						result.map((r) => (
							<Card style={{marginTop: 10, borderRadius:8}} key={r.id}>
                  <CardItem thumbnail style={{marginTop:5}}>
                    <Left style={{flex:7}}>
                      <Thumbnail 
                      square 
                      style={{flex:1, height: 150, borderRadius: 10, marginEnd:15}}
                      resizeMode='cover'
                      source={{ uri: r.better_featured_image.source_url }} />
                    </Left>
                    <Body  style={{flex:10}}>
                      <Text numberOfLines={1} style={{fontFamily:'Serif', fontSize: 14, fontWeight: 'bold',}}>{r.title.rendered.replace("&#038;",'&')}</Text>
                      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Image 
                        source={require('./img/Khrogaty-Cuts/Icons/map-marker.png')}
                        style={{width: 15, height: 15}}/>
                        <Text style={{color: '#58B138', marginLeft:8, fontSize: 10}} numberOfLines={1}>
                          {r.acf.address}
                        </Text>
                      </View>
                      <Text note numberOfLines={4}
                      style={{marginBottom: 12, fontSize: 10}}>
                        {r.content.rendered.replace("\n<p>",'').replace("<p>",'').replace("&amp;",'&').replace("</p>",'')}
                      </Text>
                      
                      <Button style={{backgroundColor: '#58B138', borderRadius: 10, height:30, width: 100, justifyContent:'center'}}
                        onPress={() => {
                          Actions.Details({
                            "pageTitle": r.title.rendered,
                            "pageDescreption": r.content.rendered,
                            "img": r.better_featured_image.source_url,
                            "loctionMapping":r.acf.map_location,
                            "city":r.acf.address,
                            "phone":r.acf.phone_number,
                            "email":r.acf.email_address,
                            "idName":r.id
                        })
                          }}>
                        <Text style={{alignSelf: 'center'}} uppercase={false} >Details</Text>
                      </Button>
                      
                    </Body>
                  </CardItem>
                </Card>
						))
					}
					
				</Content>
        <MainFooter activeSearch="true" />
			</Container>
		)
	}
}