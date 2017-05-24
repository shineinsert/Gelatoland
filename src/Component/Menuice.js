import React, {Component} from 'react';
import {View,Text,ListView,Image,StyleSheet,TextInput,Alert,TouchableOpacity,Linking} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem,  } from 'native-base';
import {Actions} from 'react-native-router-flux';
class OpenURLButton extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };
  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick} >

        <View style={Styles.button}>
          <Image source={require('../Image/BannerLink.jpg')} style={{width:200,height:300,marginTop:-70,marginLeft:90}}/>

        </View>
      </TouchableOpacity>
    );
  }
}
class Menuice extends Component{
	static title = 'Linking';
  static description = 'Shows how to use Linking to open URLs.';
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
	CheckBill(){
		Actions.contentfeed();
	}
	render() {
		return (
			<Image source={require('../Image/Templete.png')}
					style ={Styles.imgBG}
					><View style={{flexDirection:'row',alignItems:'center'}}>
	            <Button iconLeft light style={{ backgroundColor: '#96C7BE',alignSelf:'center',marginTop:60,marginLeft:290,height:30 }} onPress={this.checkRegister.bind(this)}>
                            <Text style={{color:'black',fontWeight:'bold'}}> Logout </Text>
                          </Button>
                          </View>
					<Container style={{marginTop:10, marginLeft:160 }}>

					<Content>
					<Text style={{color:'#96C7BE',fontSize:20,fontWeight:'bold'}}>MENU</Text>
					</Content>
					</Container>
					
					<Container style={{marginTop:-90}}>
                <Content >
                    <Card>
                    <CardItem style={{borderColor: '#96C7BE',borderWidth: 1}}>
                       <Image source={require('../Image/i01Chocolate.png')} style={{height:40, width:40}}/>
                       
                       <Text style={{color:'#96C7BE' ,marginLeft:15}}>Chocolate </Text>
                       <Text  style={{color:'#96C7BE' }}>49 THB </Text>
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
                       <Image source={require('../Image/Bluebur.png')} style={{height:40, width:40}}/>
                       <Text style={{color:'#96C7BE',marginLeft:15 }}>BlueBerry CheeseCake </Text>
                       <Text  style={{color:'#96C7BE' }}>137 THB </Text>
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
                       <Image source={require('../Image/Mango.png')} style={{height:40, width:40}}/>
                       <Text style={{color:'#96C7BE',marginLeft:15 }}>Mango </Text>
                       <Text  style={{color:'#96C7BE' }}>432 THB </Text>
                       <Right>
                          <Icon name="md-close" />
                       </Right>
                     </CardItem>
                   </Card>
                </Content>
                <Text style={{marginTop:-10,marginLeft:40,color:'#96C7BE',fontWeight:'bold'}}>Click Picture For See how to make Icecream</Text>
            </Container>
					
     
				<Container>
	                
	                <Content>

						<OpenURLButton url={'https://www.youtube.com/watch?v=d2OuPIegZgY'} />
	                </Content>
	                
	            </Container>
	            <Container>
	            <View>
	            <Button  style={{ backgroundColor: '#96C7BE',marginTop:7,marginLeft:90,width:200,justifyContent:'center' }} onPress={this.CheckBill.bind(this)}>
                            <Text style={{color:'white',fontWeight:'bold'}}> CheckBill </Text>
                          </Button>
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

	},

  button: {
	width:300,
	height:null,
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

export default Menuice;