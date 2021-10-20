import React from "react";
import { Light } from "./light.jsx";
import { useState } from "react";

const color_up = "danger";
const color_mid = "warning";
const color_low = "success";

export const Content = () => {
	const [allLights, setAllLigths] = useState({
		danger: false,
		warning: false,
		success: false
	});

	const changeLight = myColor => {
		setAllLigths({ [myColor]: !allLights.myColor });
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<Light
						color={color_up}
						obj={allLights}
						theChangefunction={myColor => changeLight(myColor)}
					/>

					<Light
						color={color_mid}
						obj={allLights}
						theChangefunction={myColor => changeLight(myColor)}
					/>

					<Light
						color={color_low}
						obj={allLights}
						theChangefunction={myColor => changeLight(myColor)}
					/>
				</div>
			</div>
		</div>
	);
};
