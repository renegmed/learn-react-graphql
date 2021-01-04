import React, { Component } from 'react';
import gql from 'graphql-tag';
import  { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

class SongList extends Component {
    onSongDelete(id) {
        this.props.mutate({ variables: { id } })  // or { id: id }
    }
    renderSongs() {   
        return this.props.data.songs.map(({id, title}) => {
            return (
                <li key={id} className="collection=item">
                    {title}
                    <i
                      className="material-icons"
                      onClick={() => this.onSongDelete(id)}
                    >delete</i>
                </li>
            );
        });    
    }
    render() { 
      //console.log(this.props); // will be rendered 2 times. See data loading status in console log e.g. loading true/false, songs
      if (this.props.data.loading) {
          return <div>loading....</div>;
      }  
       
      return(      
        <div>
        <ul className="collection">
            {this.renderSongs()}
        </ul>
        <Link 
            to ="/songs/new"
            className="btn-floating btn-large red right"
        >
            <i className="material-icons">add</i>
        </Link>
        </div> 
      );
    }
}
 
const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id:$id) {
            id 
            title
        }
    }
`;
// graphql(query) returns a function. It is immediately invocated or called by SongList
// SongList actually executes the query
export default graphql(mutation)(
    graphql(query)(SongList)
);