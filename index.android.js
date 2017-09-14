/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {StyleSheet,AppRegistry} from 'react-native';
 import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import MapView from 'react-native-maps';
export default class NerdMapp extends Component {
   constructor(props) {
   super(props);
 }
    render() {
     return (
       <Container>
               <Header>
                 <Left>
                   <Button transparent>
                     <Icon name='menu' />
                   </Button>
                 </Left>
                 <Body>
                   <Title>Header</Title>
                 </Body>
                 <Right />
               </Header>
               <Content>

                 <MapView
                 style={styles.map}
                  initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                    />

               </Content>
               <Footer>
                 <FooterTab>
                   <Button full>
                     <Text>Footer</Text>
                   </Button>
                 </FooterTab>
               </Footer>
             </Container>
     );
   }
 }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    map:{
      left:0,
      right:0,
      top:0,
      bottom:0,
      position: 'absolute'
    }
});

AppRegistry.registerComponent('NerdMapp', () => NerdMapp);
