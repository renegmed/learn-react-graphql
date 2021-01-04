import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvier } from 'react-apollo';

const client = new ApolloClient({}); // assume server /graphql is available

const Root = () => {
  return (
    <ApolloProvier client={client}>
      <div>Lyrical</div>
    </ApolloProvier>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
