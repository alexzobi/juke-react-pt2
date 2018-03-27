import React from 'react';
import { Route, Link } from 'react-router-dom';
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
		const artist = this.state.currentArtist
		return (
			<div>
  			<h3>{this.state.currentArtist.name}</h3>

  			<h4>ALBUMS</h4>
				<AllAlbums albums={this.state.currentArtistAlbums}/>
        <Songs songs={this.state.currentArtistSongs} />
			</div>
		)
	}
}