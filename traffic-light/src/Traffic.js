import React, { useState } from "react";

function TrafficLight() {
    const [red, setRed] = useState('red1 lightOff')
    const [yellow,setYellow] = useState('yellow1 lightOff')
    const [green, setGreen] = useState('green1 lightOff')

	return (
		<div>
			<div className="light">
				<div id="red" className={red}
                    onClick={() => {
                    setRed('red1 lightOn')
                    setYellow('yellow1 lightOff')
                    setGreen('green1 lightOff')
                }}>
                </div>

				<div id="yellow" className={yellow}
                    onClick={() => {
                    setYellow('yellow1 lightOn')
                    setRed('red1 lightOff')
                    setGreen('green1 lightOff')
                }}>
                </div>

				<div id="green" className={green}
                    onClick={() => {
                    setGreen('green1 lightOn')
                    setRed('red1 lightOff')
                    setYellow('yellow1 lightOff')
                }}>
                </div>

			</div>

            <div className="pole"></div>

            <div>

                <div className="walkLight">
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
            </div>

		</div>
	);
}

export default TrafficLight;
