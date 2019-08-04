import React, { Component } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import 'leaflet/dist/leaflet.css';
// import mapStyles from './map.module.less';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class DirectorMap extends React.Component {
	state = {
		lat: 51.505,
		lng: -0.09,
		zoom: 13,
	}

	render() {
		const position = [this.state.lat, this.state.lng];

		if (typeof window !== 'undefined') {
			return (
				<>
					<Container>
						<Row>
							<Col lg={12} className={mapStyles.map_col}>
							<h1><FormattedMessage id='directorPage.map' /></h1>
							<Map center={position} zoom={this.state.zoom} className={mapStyles.map}>
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
							</Col>
						</Row>
					</Container>
				</>
			)
		}
		return null
	}
}

export default DirectorMap
