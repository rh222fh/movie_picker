import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';

const MovieInfo = props => {
	const imgUrl = `https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`;

	return (
		<Modal
			closeOnDimmerClick={true}
			closeOnEscape={true}
			open={props.bool}
			onClose={props.onClose}
		>
			{/*<Modal.Header>{props.movie.title}</Modal.Header>*/}
			<Modal.Content image>
				<Image style={{ maxWidth: 250, maxHeight: 350 }} src={imgUrl} />
				<Modal.Description>
					<Header>{props.movie.title}</Header>
					<p style={{ textAlign: 'justify' }}>
						{props.movie.overview}
					</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

export default MovieInfo;
