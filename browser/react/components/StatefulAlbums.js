import React from 'react';
import AllAlbums from './AllAlbums';
import axios from 'axios';


export default class StatefulAlbums extends React.Component{
 constructor(props){
  super(props)
  this.state = {
    albums: []

    }
  }

  componentDidMount () {
    axios.get('/api/albums/')
      .then(res => res.data)
      .then(albums => {
        this.setState({ albums })
      });
  }


  render(){
    return (
      <AllAlbums albums={this.state.albums}/>
    )
  }
}