import React, { useState } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<div className="container">
			<div className="row">
				<div className="col-2 mx-auto bg-black rounded">
					<div
						className={
							color == "red"
								? " light bg-danger mx-auto m-2 text-warning rounded-circle selected"
								: "light bg-danger mx-auto m-2 text-warning rounded-circle"
						}
						onClick={() => setColor("red")}></div>
					<div
						className={
							color == "yellow"
								? "light bg-warning mx-auto m-2 text-warning rounded-circle selected"
								: "light bg-warning mx-auto m-2 text-warning rounded-circle"
						}
						onClick={() => setColor("yellow")}></div>
					<div
						className={
							color == "green"
								? " light bg-success mx-auto m-2 text-warning rounded-circle selected"
								: "light bg-success mx-auto m-2 text-warning rounded-circle"
						}
						onClick={() => setColor("green")}></div>
				</div>
			</div>
		</div>
	);
};
