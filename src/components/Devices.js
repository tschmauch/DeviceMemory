import React from "react";
import '../index.css';


const Devices = (props) => (

	<div className="container device-body">
		{props.deviceArray.map((image, index) => {
			return <div className="imageContainer" key={index} ><img className="images" src={image.image} alt={image.name}
				onClick={(event) => { props.handleClick(image.imgId) }}
			/></div>;
		})}
	</div>
);

export default Devices;
