import React, { Component } from 'react';
import MovieListItem from './MovieListItem';
import './Movies.css';
import { Container } from 'semantic-ui-react';
import MovieInfo from './MovieInfo';

class Movies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies        : [],
			showMovieInfo : false,
			movieInfo     : []
		};
		//this.onMovieClick = this.onMovieClick.bind(this);
		this.handleMovieClose = this.handleMovieClose.bind(this);
	}

	componentDidMount() {
		const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process
			.env
			.REACT_APP_TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

		fetch(apiUrl)
			.then(response => response.json())
			.then(data => this.storeMovies(data))
			.catch(error => console.log(error));
	}
	storeMovies = data => {
		const movies = data.results.map(result => {
			const {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date,
				overview
			} = result;
			return {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date,
				overview
			};
		});
		this.setState({ movies });
	};

	onMovieClick(movie, e) {
		this.setState({
			showMovieInfo : true,
			movieInfo     : movie
		});
		console.log('Title:', movie);
	}

	handleMovieClose() {
		this.setState({
			showMovieInfo : false
		});
	}

	render() {
		return (
			<Container style={{ marginTop: 30 }} fluid>
				<ul className='movies'>
					{this.state.movies.map((movie, index) => (
						<MovieListItem
							key={movie.id}
							movie={movie}
							clicked={this.onMovieClick.bind(this, movie)}
						/>
					))}
					{this.onMovieClick ? (
						<MovieInfo
							movie={this.state.movieInfo}
							bool={this.state.showMovieInfo}
							onClose={this.handleMovieClose}
						/>
					) : null}
				</ul>
			</Container>
		);
	}
}

export default Movies;
