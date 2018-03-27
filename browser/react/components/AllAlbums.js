import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

export default class AllAlbums extends React.Component{

  render(){
  const albums = this.props.albums; 
  // const selectAlbum = props.selectAlbum;
  return (

    <div>
      <h3>Albums</h3>
      <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <NavLink className="thumbnail" to={`/albums/${ album.id }`}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </NavLink>
          </div>
        ))
      }
      </div>
      {/* <Grandchild {...props} === albums={props.albums} selectAlbum={props.selectAlbum} /> */}
    </div>
  );
}
}

// const allMessages = [message1, message2, ...restOfMessages]