import React from 'react';
import Container from '@mui/material/Container';

import Header from './Header';
import Content from './Content';

import { Provider } from "react-redux";
import { configureStore } from "./store";

const store = configureStore(); // create the redux store for global state management

function App() {
  //connect the react app to redux store through Provider component with store passed in as a prop
  return (
    <>
      <Provider store={store}>
        <Header />
        <Container>
          <Content />
        </Container>
      </Provider>
    </>
  );
}

export default App;
