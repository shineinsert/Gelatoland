import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TextInput,Alert} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

class Foot extends Component {
	render(){
		return (
			<View style={{flexDirection:'row',flex:4,alignItems:'center',justifyContent:'center',marginLeft:60}}>
                        <Icon name="md-home" style={{flex:1}}/>
                        <Icon name="md-ice-cream" style={{flex:1}}/>
                        <Icon name="md-card" style={{flex:1}}/>
                        <Icon name="md-person" style={{flex:1}}/>
                        </View>


		);
	
	}

}