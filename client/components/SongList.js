import React, { Component } from 'react';
import gql from 'graphql-tag';
import  { graphql } from 'react-apollo';


class SongList extends Component {
    render() { 
      console.log(this.props); // will be rendered 2 times. See data loading status in console log e.g. loading true/false, songs
      return(
        <div>
            SongList
        </div>
      );
    }
}


const query = gql`
{
 songs{
  title
 } 
}
`;

// graphql(query) returns a function. It is immediately invocated or called by SongList
// SongList actually executes the query
export default graphql(query)(SongList); 