import React, { Component } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import 'leaflet/dist/leaflet.css';
import mapStyles from './map.module.less';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
 
export default class DirectorMap extends Component {
	state = {
		lat: 51.505,
		lng: -0.09,
		zoom: 13,
	}

	render() {
		const position = [this.state.lat, this.state.lng]
		

		return (
			<h1><FormattedMessage id='directorPage.map' /></h1>
			<Map className={mapStyles.director_map} center={position} zoom={this.state.zoom}>
			<TileLayer
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</Map>
		)

		// if (typeof window !== 'undefined') {
		// 	return (
		// 		<Container className={mapStyles.container}>
		// 			<Row>
		// 				<Col lg={12}>
		// 					<h1><FormattedMessage id='directorPage.map' /></h1>

		// 				</Col>
		// 			</Row>
		// 		</Container>
		// 	)
		// }
	// 	return null
	}
}