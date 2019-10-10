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
            <div>

                {/* <div className="walkLight">
                    <div className="walk">

                    </div>
                    <div className="doNotWalk">
                    <img class="man" src="https://image.flaticon.com/icons/png/512/8/8818.png"></img>
                    </div>
                </div>
                <div className="pole2"></div>

                <div className="settings">
                    <div id="on">ON</div>
                    <div id="off" >OFF</div>
                    <div id="auto">AUTO</div>
                </div>
            </div> */}

		</div>
		</div>
	);
}

export default TrafficLight;


