import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TextInput,Alert} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import {Actions} from 'react-native-router-flux';
class register extends Component {
	state = {}
	constructor(props){
		super(props);
		this.state={
			username:"",
			password:"",
			conpassword:"",
			email:""
		}
	}
	checkLogin(){
		if((this.state.conpassword===this.state.password)){
			if((this.state.conpassword==="")&&(this.state.password==="")){
				Alert.alert(
  			'Fail to Register',
  			'Please Enter Password',
			  [
			    {text: 'OK'},
			  ],
  				{ cancelable: false }
			)}
			if((this.state.username==="")&&(this.state.email==="")){
				Alert.alert(
  			'Fail to Register',
  			'Please Enter Information in Blank',
			  [
			    {text: 'OK'},
			  ],
  				{ cancelable: false }
			)
			}else{
				Actions.login();
			}
		}else{
			Alert.alert(
  			'Fail to Register',
  			'Password Not match',
			  [
			    {text: 'OK'},
			  ],
  				{ cancelable: false }
			)
		}
	}
	checkRegister(){
		Actions.login();
	}
	render(){
		let {username,password} = this.state;
		return (
			 	<Image source={require('../Image/Templete.png')}
					style ={Styles.imgBG}
					>
					<View style={Styles.overlayBg}>
					<View>
					<Text style={{color:'#96C7BE',fontSize:20,fontWeight:'bold',marginTop:-80}}>REGISTER</Text>
					</View>
					<View>
					
						<Button iconLeft light style={{backgroundColor: '#96C7BE',width:65,justifyContent:'center',marginTop:-80,marginLeft:-180,height:30}}
						onPress={this.checkRegister.bind(this)}>
                      <Icon name='arrow-back' />
                      <Text>Back</Text>
                  </Button>

                
					</View>
					<View style={{
							width:280,
							height:80}}>
						
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
							marginBottom:20
						}}>
							
							<TextInput 
							placeholder="Email"
							onChangeText={(email)=>this.setState({email})}
							style={Styles.inputForm}
							/>
						</View>
						<View style={{
							flexDirection:'row',
							alignItems:'center',
							marginBottom:20
						}}>
							
							<TextInput 
							placeholder="Password"
							
							onChangeText={(password)=>this.setState({password})}
							secureTextEntry={true}
							style={Styles.inputForm}
							/>
						</View>
						<View style={{
							flexDirection:'row',
							alignItems:'center',
							marginBottom:20
						}}>
							
							<TextInput 
							placeholder="ConfirmPassword"
							
							onChangeText={(conpassword)=>this.setState({conpassword})}
							secureTextEntry={true}
							style={Styles.inputForm}
							/>
						</View>
						
						<Button  style={{ backgroundColor: '#96C7BE',marginTop:7,marginLeft:0,width:280,justifyContent:'center' }} onPress={this.checkLogin.bind(this)}>
                            <Text style={{color:'white'}}> Register </Text>
                          </Button>
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
		alignItems:'center',
		marginTop:-170
	},
	loginlabel:{
		flex:2,
		textAlign:'center',
		marginRight:20,
		fontSize:18

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

export default register ;