import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyABg7wXyZhm_KQzfov4yRkdXMPwdnk8Eak',
       authDomain: 'manager-40f95.firebaseapp.com',
       databaseURL: 'https://manager-40f95.firebaseio.com',
       storageBucket: 'manager-40f95.appspot.com',
       messagingSenderId: '451688611645'
     };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
