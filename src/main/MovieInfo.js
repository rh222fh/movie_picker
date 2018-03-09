import React from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';
import Palette from 'react-palette';

const MovieInfo = props => {
	const imgUrl = `https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`;

	return (
		<Palette image={imgUrl}>
			{palette => (
				<Modal
					closeOnDimmerClick={true}
					closeOnEscape={true}
					open={props.bool}
					onClose={props.onClose}
					size='{tiny}'
					style={{ backgroundColor: palette.muted }}
				>
					{/*<Modal.Header>{props.movie.title}</Modal.Header>*/}
					<Modal.Content
						image
						style={{ backgroundColor: palette.muted }}
					>
						<Image
							style={{ maxWidth: 250, maxHeight: 350 }}
							src={imgUrl}
						/>
						<Modal.Description>
							<Header>{props.movie.title}</Header>
							<p style={{ textAlign: 'justify' }}>
								{props.movie.overview}
							</p>
						</Modal.Description>
					</Modal.Content>
				</Modal>
			)}
		</Palette>
	);
};

export default MovieInfo;
