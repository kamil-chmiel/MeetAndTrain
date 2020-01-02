import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import {openSession} from '../../actions/sessionActions';
import {connect} from 'react-redux';

import {ButtonsContainer} from './styles';

class SplashScreen extends Component<any, any> {
  componentDidMount() {
    this.checkSession();
  }

  checkSession = async () => {
    const {openSession, navigation} = this.props;

    const [[, userId]] = await AsyncStorage.multiGet(['userId']);

    if (userId) {
      await openSession(userId);
      navigation.navigate('MainPanel');
    } else {
      navigation.navigate('Intro');
    }
  };

  render() {
    return <View style={{flex: 1, backgroundColor: 'white'}} />;
  }
}

const mapDispatchToProps = {
  openSession,
};

export default connect(null, mapDispatchToProps)(SplashScreen);
