import React, {Component} from 'react';
import {View,Text,ListView,Image,StyleSheet,TextInput,Alert} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem,  } from 'native-base';
import {Actions} from 'react-native-router-flux';
class ContentFeed extends Component{
	constructor(props){

		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
	    };

	}
	checkRegister(){
		Actions.login();
	}
	checkBack(){
		Actions.menuice();
	}
	render() {
		return (
			<Image source={require('../Image/Mook.png')}
					style ={Styles.imgBG}
					>
					<View>
					<Button iconLeft light style={{backgroundColor: '#96C7BE',width:70,justifyContent:'center',height:33,marginTop:60}}
						onPress={this.checkBack.bind(this)}>
                      <Icon name='arrow-back' />
                      <Text style={{fontWeight:'bold'}}>Back</Text>
                  </Button>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
	            <Button iconLeft light style={{ backgroundColor: '#96C7BE',alignSelf:'center',marginTop:-30,marginLeft:280,height:30 }} onPress={this.checkRegister.bind(this)}>
                            <Text style={{color:'black',fontWeight:'bold'}}> Logout </Text>
                            </Button>
					</View>
					</View>
					<Container style={{marginTop:10, marginLeft:160 }}>

					<Content>
					<Text style={{color:'#96C7BE',fontSize:20,fontWeight:'bold'}}>ORDER</Text>
					
					</Content>
					</Container>
					
				
					<Container style={{marginTop:-90}}>
                <Content >
                    <Card>
                    <CardItem style={{borderColor: '#96C7BE',borderWidth: 1}}>
                       <Image source={require('../Image/i01Chocolate.png')} style={{height:40, width:40}}/>
                       
                       <Text style={{color:'#96C7BE' }}>Chocolate </Text>
                       <Text  style={{color:'#96C7BE' }}>49 BTH </Text>
                       <Right>
                          <Icon name="md-close" />
                       </Right>
                     </CardItem>
                   </Card>
                </Content>
            </Container>
            <Container style={{marginTop:-40}}>
                <Content >
                    <Card>
                    <CardItem style={{borderColor: '#96C7BE',borderWidth: 1,marginTop:10}}>
                       <Image source={require('../Image/i01Chocolate.png')} style={{height:40, width:40}}/>
                       <Text style={{color:'#96C7BE' }}>Chocolate </Text>
                       <Text  style={{color:'#96C7BE' }}>49 BTH </Text>
                       <Right>
                          <Icon name="md-close" />
                       </Right>
                     </CardItem>
                   </Card>
                </Content>
            </Container>
            <Container style={{marginTop:-30}}>
                <Content >
                    <Card >
                    <CardItem style={{borderColor: '#96C7BE',borderWidth: 1,marginTop:10}}>
                       <Image source={require('../Image/i01Chocolate.png')} style={{height:40, width:40}}/>
                       <Text style={{color:'#96C7BE' }}>Chocolate </Text>
                       <Text  style={{color:'#96C7BE' }}>49 BTH </Text>
                       <Right>
                          <Icon name="md-close" />
                       </Right>
                     </CardItem>
                   </Card>
                </Content>
            </Container>

				<Container>
	                
	                <Content>
						
	                </Content>
	                
	            </Container>
	            <Container>
	            <View style={{
							flexDirection:'row',
							alignItems:'center',
							marginBottom:200,
							width:230,
							marginLeft:60,

						}}>
							
							<Text
							style={Styles.inputForm}
							>
							3 Items
							</Text>
							<Text
							style={Styles.inputForm}
							>
							147 THB
							</Text>
						</View>
                          </Container>
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
		backgroundColor:'rgba(0,0,0,0.20)',
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
		height:40,
		backgroundColor:'white',
		padding:5,
		flex:2,
		borderColor: '#698B85',
		borderWidth: 3,
		fontSize:18,
		marginLeft:20,
		fontWeight: 'bold',

	}
});

export default ContentFeed;