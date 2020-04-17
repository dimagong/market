import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from "react-redux"

import "antd/dist/antd.css"

import './index.css'
import App from 'Components/App'
import {create} from './Redux/index'


const store = create();

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store} >
          <App  />
      </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);


//import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();



