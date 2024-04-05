import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import theme from './utils/theme.ts'
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';


const rootElement = document.getElementById('root')!
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
)