import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import AuthIndex from './src/routers/authIndex';

function App() {
  return (
    <Provider store={store}>
      <AuthIndex />
    </Provider>
  );
}

export default App;
