import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import {HashRouter, Route, Switch} from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import notFound from './notFound';

export default class Main extends Component {

  render () {
    return (
      <HashRouter>
        <div id="main" className="container-fluid">

          <div className="col-xs-2">
            <Sidebar deselectAlbum={this.deselectAlbum} />
          </div>

          <div className="col-xs-10">

            <Switch>
            <Route exact path='/' component={StatefulAlbums} />
            <Route exact path='/artists' component={AllArtists} />
            <Route path= '/albums/:albumId' component={SingleAlbum}/>
            <Route path= '/artists/:artistId' component={SingleArtist}/>
            <Route exact path='/albums' component={StatefulAlbums} />
            <Route path="*" component={notFound} status={404} />

            </Switch>
          </div>

          <Player />
        </div>
      </HashRouter>
    );
  }
}
