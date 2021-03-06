import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

export default class SingleAlbum extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedAlbum : {}
    }
  }

  componentDidMount () {
    axios.get(`/api/albums/${this.props.match.params.albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }

  // deselectAlbum () {
  //   this.setState({ selectedAlbum: {}});
  // }

  render () {

    const fakeAlbum = {
    name: 'Yellow Submarine',
    id: 2,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 4,
        name: 'London Calling',
        artists: [
          { name: 'Bill' }
        ],
        genre: 'Punk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  };

    const album = this.state.selectedAlbum;

    console.log(this.props.match.params);


    return (
      <div className="album">
        <div>
          <div>
            <h3 style={{display: "inline"}}>{ album.name } </h3>
            <button className="btn btn-default">
              <span className="glyphicon glyphicon-copy"></span>
            </button>
          </div>
  
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}
