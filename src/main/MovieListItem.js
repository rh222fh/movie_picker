import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './MovieListItem.css';

const MovieListItem = ({ movie, clicked }) => {
	const { title, poster_path, release_date, vote_average } = movie;
	const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
	const year = release_date.substring(0, 4);

	return (
		<Card style={{ margin: 10, maxWidth: 200 }} onClick={clicked}>
			<Image style={{ maxWidth: 200 }} src={imgUrl} />
			<Card.Content>
				<Card.Header style={{ fontSize: '12pt' }}>{title}</Card.Header>
			</Card.Content>
			<Card.Content extra style={{ fontWeight: 'bold' }}>
				<span className='date'>{year}</span>
				<span style={{ float: 'right' }}>{vote_average}</span>
			</Card.Content>
		</Card>
	);
};
export default MovieListItem;
