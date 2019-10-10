import React from "react";

function TrafficLight() {
	return (
		<div>
			<div className="light">
				<div id="red" className="red1"></div>
                <div id="yellow" className="yellow1"></div>
				<div id="green" className="green1"></div>
			</div>
            <div className="pole"></div>

			<div id="walkLight" className="walkLite">
				<div id="walk" className="walk">WALK</div>
                <br></br>
				<div id="doNotWalk" className="doNotWalk">DONT WALK</div>
            <div className="pole2"></div>
			</div>

			<div id="controls" className="settings">
				<div id="on">ON</div>
                <br></br>
				<div id="off" >OFF</div>
                <br></br>
                <div id="auto">AUTO</div>
			</div>

		</div>
	);
}

export default TrafficLight;


