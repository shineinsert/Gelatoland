import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TextInput,Alert} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
	state = {}
	constructor(props){
		super(props);
		this.state={
			username:"",
			password:""
		}
	}
	checkLogin(){
		if((this.state.username==='Gelatoadmin')&&(this.state.password==='root')){
			Actions.menuice();
		}else{
			Alert.alert(
  			'Can not Login',
  			'Username or Password Fail',
			  [
			    {text: 'OK'},
			  ],
  				{ cancelable: false }
			)
		}
	}
	checkRegister(){
		Actions.Register();
	}
	render(){
		let {username,password} = this.state;
		return (
				<Image source={require('../Image/Mook2.png')}
					style ={Styles.imgBG}
					>
					<View style={Styles.overlayBg}>
					<View>
					<Text style={{color:'#96C7BE',fontSize:40,fontWeight:'bold',marginLeft:5,marginTop:10}}>LOGIN</Text>
					</View>
					<View style={{marginTop:10}}>
					
						
						<View style={{
							flexDirection:'row',
							alignItems:'center',
							marginBottom:20
						}}>
							
							<TextInput 
							placeholder="EnterUsername"
							
							onChangeText={(username)=>this.setState({username})}
							style={Styles.inputForm}
							/>
						</View>
						<View style={{
							flexDirection:'row',
							alignItems:'center',
							marginBottom:20,
							width:300
						}}>
							
							<TextInput 
							placeholder="EnterPassword"
							
							onChangeText={(password)=>this.setState({password})}
							secureTextEntry={true}
							style={Styles.inputForm}
							/>
						</View>
						<View style={{flexDirection:'row',alignItems:'center'}}>
						<Button  style={{ backgroundColor: '#96C7BE',marginTop:7,marginLeft:50,width:88,justifyContent:'center' }} onPress={this.checkLogin.bind(this)}>
                            <Text style={{color:'white'}}> Login </Text>
                          </Button> 
                          <Button  style={{ backgroundColor: '#96C7BE',marginTop:7,marginLeft:20 }} onPress={this.checkRegister.bind(this)}>
                            <Text style={{color:'white'}}> Register </Text>
                          </Button>
						
						</View>
					</View>
					</View>
					 <Footer style={{backgroundColor:'#96C7BE'}}>
                    <FooterTab>
                    <View style={{flexDirection:'row',flex:4,alignItems:'center',justifyContent:'center',marginLeft:60}}>
                        <Icon name="md-home" style={{flex:1}}/>
                        <Icon name="md-ice-cream" style={{flex:1}}/>
                        <Icon name="md-card" style={{flex:1}}/>
                        <Icon name="md-person" style={{flex:1}}/>
                        </View>
                    </FooterTab>
                </Footer>
				</Image>

			);
	}
}
const Styles = StyleSheet.create({
	imgBG: {
		flex:1,
		width:null,
		height:null,
	},
	overlayBg:{
		flex:1,
		backgroundColor:'rgba(0,0,0,0.1)',
		justifyContent:'center',
		alignItems:'center'
	},
	loginlabel:{
		flex:2,
		textAlign:'center',
		marginRight:20,
		fontSize:18,


	},
	inputForm:{
		height:30,
		backgroundColor:'white',
		padding:5,
		flex:2,
		borderColor: '#96C7BE',
		borderWidth: 1
	}
});

export default Login ;