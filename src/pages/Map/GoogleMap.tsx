import { useEffect, useState } from "react";
import React from "react";
import GoogleMapReact from "google-map-react";

interface Position {
	lat: number;
	lng: number;
}

const defaultProps = {
	center: {
		lat: 59.95,
		lng: 30.33,
	},
	zoom: 11,
};

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export const GoogleMap = () => {
	const [position, setPosition] = useState<Position>({ lat: 0, lng: 0 });

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(
				(position) => {
					setPosition({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				(err) => console.log(err),
				{ enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 }
			);
		} else {
			alert("Not geo Supported");
		}
	}, []);

	return (
		<div style={{ height: "50vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyBOwAGiv5PJkFRsVN-R6a3e9HN5bO3pusk" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={position.lat} lng={position.lng} text={"You"} />
			</GoogleMapReact>
			<div>
				<ul>
					<li>Latitude:{position.lat}</li>
					<li>Longitude:{position.lng}</li>
				</ul>
			</div>
		</div>
	);
};
