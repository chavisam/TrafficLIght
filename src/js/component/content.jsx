import React from "react";
import { Light } from "./light.jsx";
import { useState } from "react";

export const Content = () => {
	const [allLights, setAllLigths] = useState({
		danger: false,
		warning: false,
		success: false
	});

	let arr = ["danger", "warning", "success"];
	// let gh = Object.keys(allLights).newArr;
	// console.log(gh);
	const newArr = arr.map((color, index) => (
		<Light
			key={index}
			color={color}
			obj={allLights}
			theChangefunction={() => changeLight(color)}
		/>
	));

	const changeLight = myColor => {
		setAllLigths({ [myColor]: !allLights.myColor });
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">{newArr}</div>
			</div>
		</div>
	);
};
