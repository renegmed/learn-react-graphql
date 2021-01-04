import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';  // integration between client and server

import SongList from './components/SongList';

const client = new ApolloClient({}); // assume server /graphql is available

const Root = () => {
  return (
    <ApolloProvider client={client}>  
      <SongList />
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
