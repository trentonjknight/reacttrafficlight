import React from "react";
import {useState, useEffect} from 'react';

function TrafficLight() {
    const [red, setRed] = useState('red1 lightOff')
    const [yellow,setYellow] = useState('yellow1 lightOff')
    const [green, setGreen] = useState('green1 lightOff')
    const [mils,setMils] = useState(0);

    useEffect(() => {
        setTimeout(()=> setMils(mils+1),1000)
    },[mils])


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
                    <div className={red.includes('On') ? 'man' : 'walkMan man'}>
                        <img class="man" src="https://image.flaticon.com/icons/png/512/8/8818.png"></img>

                    <div className={green.includes('On') ? 'hand man' : 'doNotWalk'}>

                        <img class="hand" src="https://cdn2.iconfinder.com/data/icons/toolbar-signs-2/512/stop_hand_play_pause-512.png"></img>
                    </div>
                </div>

                <div className="pole2"></div>

                <div className="settings">

                    <button id="on">ON</button>
                    <br></br>
                    <button id="off" >OFF</button>
                    <br></br>
                    <div className={mils} onClick={() => {setMils('auto')}}>Auto
                    </div>

                </div>
		</div>
	</div>
</div>
	);
}



export default TrafficLight;


