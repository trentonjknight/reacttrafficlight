import React from "react";
import {useState, useEffect} from 'react';

function TrafficLight() {
    const [red, setRed] = useState('red1 lightOff')
    const [yellow,setYellow] = useState('yellow1 lightOff')
    const [green, setGreen] = useState('green1 lightOff')
    const [walk,setWalk] = useState('man')
    const [dwalk,setDwalk] = useState('hand')
    const [off,setOff] = useState(0)

    const [mils,setMils] = useState(0);

    useEffect(() => {
        setTimeout(()=> setMils(mils+1),5000)
    },[mils])


	return (
		<div id='content'>
			<div className="light">
				<div id="red" className={red}
                    onClick={() => {
                    setRed('red1 lightOn')
                    setYellow('yellow1 lightOff')
                    setGreen('green1 lightOff')
                    setDwalk('doNotWalk lightOn')
                    setWalk('lightOff')
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
                    setDwalk('lightOff')
                    setWalk('walkMan lightOn')
                }}>
                </div>
			</div>

                <div className="pole"></div>

            <div className="horizontal">
                <div className="walkLight">
                    <div className={walk}>
                    {/* <div className={red.includes('On') ? 'man' : 'walkMan man'}> */}
                        <img class="man" src="https://image.flaticon.com/icons/png/512/8/8818.png" ></img>
                    </div>
                    <div className={dwalk}>
                    {/* <div className={green.includes('On') ? 'hand man' : 'doNotWalk'}> */}
                        <img class="hand" src="https://cdn2.iconfinder.com/data/icons/toolbar-signs-2/512/stop_hand_play_pause-512.png"></img>
                    </div>
                </div>
                    <div className="pole2"></div>

                <div className="settings">

                    <div className="onbutton">
                        <button id="on">ON</button>
                    </div>
                    <div className="offbutton">
                        <button id="off" className={off}
                        onClick={()=>{
                            setRed('red1 lightOff')
                            setYellow('yellow1 lightOff')
                            setGreen('green1 lightOff')
                            setWalk('man lightOff')
                            setDwalk('lightOff')
                        }}>OFF</button>
                    </div>
                    <div className="autobutton">
                        <button className={mils} onClick={() => {setMils()}}>Auto</button>
                    </div>

                </div>
            </div>
		</div>

	);
}



export default TrafficLight;


