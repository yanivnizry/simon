import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

import Board from './pages/Board';
import Results from './pages/Results';
import rootReducer from './redux/reducers';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const Stack = createStackNavigator();
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Simon Says" component={Board} />
            <Stack.Screen name="Results" component={Results} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
