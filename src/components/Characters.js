import React from "react";
import '../index.css';


const Characters = (props) => (

	<div className="container character-body">
		{/* maps through the new characterArray and renders the 12 random characters */}
		{props.charactersArray.map((image, index) => {
			return <div className="imageContainer" key={index} ><img className="images" src={image.image} alt={image.name}
				onClick={(event) => { props.handleClick(image.imgId) }}
			/></div>;
		})}
	</div>
);

export default Characters;
