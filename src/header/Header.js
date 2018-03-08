import React from 'react';
import './Header.css';
import { Menu, Container } from 'semantic-ui-react';

const Header = () => (
	<Menu fixed='top' inverted>
		<Container fluid>
			<Menu.Item as='a' header href=''>
				MoviePicker
			</Menu.Item>
			{/*<Menu.Item as='a'>Home</Menu.Item>*/}
		</Container>
	</Menu>
);

export default Header;
