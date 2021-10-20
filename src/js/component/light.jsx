import React from "react";
import PropTypes from "prop-types";

// let objColor = props.obj[props.color]

export const Light = props => {
	return (
		<div
			className={
				props.obj[props.color] == true
					? "light bg-" + props.color
					: "light bg-dark"
			}
			onClick={() => {
				props.theChangefunction(props.color);
			}}></div>
	);
};

Light.propTypes = {
	color: PropTypes.string,
	obj: PropTypes.object,
	theChangefunction: PropTypes.func
};
