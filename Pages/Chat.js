import React, { Component,useState, useCallback, useEffect } from 'react'

import {StatusBar, StyleSheet, View, Image, ScrollView } from 'react-native';
import { Container, DeckSwiper, Card, CardItem, Button, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import I18n from '../src/I18n/index';
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          messages: [],
          loadEarlier: true,
          typingText: null,
          isLoadingEarlier: false,
        };
        this.renderFooter = this.renderFooter.bind(this);
    
      }

    state = {
        messages: [],
      }
     
      componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'مرحبا بك فى فيجن',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://d29jd5m3t61t9.cloudfront.net/static/images/comprofiler/gallery/operator/operator_m_v_1501069185.png',
              },
            //   img in msg
            //   image: 'https://d29jd5m3t61t9.cloudfront.net/static/images/comprofiler/gallery/operator/operator_m_v_1501069185.png'
            }
          ],
        })
      }
     
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
      renderFooter(props) {
        if (this.state.typingText) {
          return (
            <View style={styles.footerContainer}>
              <Text style={styles.footerText}>
                {this.state.typingText}
              </Text>
            </View>
          );
        }
        return null;
      }
     
      render() {
        return (
          <Container>
                 <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#232323" translucent = {true}/>
                <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
            renderFooter={this.renderFooter}
          />
          </Container> 
        
        )
        
      }
    }
