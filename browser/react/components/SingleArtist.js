import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums';

export default class SingleArtists extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			currentArtist: {},
			currentArtistSongs: [],
			currentArtistAlbums: []
		}
	}

	componentDidMount(){
		axios.get(`/api/artists/${this.props.match.params.artistId}`)
		.then(res => res.data)
		.then(artist => {
			return this.setState({currentArtist: artist})})
		.catch(err=> console.error(err))
		.then(()=> axios.get(`/api/artists/${this.props.match.params.artistId}/albums`))
		.then(res => res.data)
		.then(albums => {
		return this.setState({currentArtistAlbums: albums})})
		.catch(err=> console.error(err))
		.then(()=> axios.get(`/api/artists/${this.props.match.params.artistId}/songs`))
		.then(res => res.data)
		.then(songs => {
		return this.setState({currentArtistSongs: songs})})
		.catch(err=> console.error(err))

	}


render () {

  const artist = this.state.currentArtist; // or however you've named it //someId={routeProps.match.params.someId} 

  return (
    <div>
      <h3>{ artist.name }</h3>
      <ul className="nav nav-tabs">
        <li><NavLink to={`/artists/${artist.id}/albums`}>ALBUMS</NavLink></li>
        <li><NavLink to={`/artists/${artist.id}/songs`}>SONGS</NavLink></li>
      </ul>

		<Route path={`/artists/${artist.id}/albums`} render={
		  (routeProps) => <AllAlbums albums={this.state.currentArtistAlbums} />
		} />
		<Route path={`/artists/${artist.id}/songs`} render={
		  (routeProps) => <Songs songs={this.state.currentArtistSongs} />
		} />
    </div>
  	);
  }
}