import { Router,RouteComponentProps } from '@reach/router';
import React from 'react';
import {Chat} from "./components/Chat"
import {Provider} from "react-redux"
import {store} from "./store/store"
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Chat path="/" />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
