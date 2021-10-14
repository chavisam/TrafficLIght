import React from "react";
import { TrafficLight } from "./trafficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Chavi Traffic Light</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<TrafficLight />
		</div>
	);
};

export default Home;
