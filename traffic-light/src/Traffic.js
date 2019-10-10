import React from "react";

function TrafficLight() {
<<<<<<< HEAD
    const [red, setRed] = useState('red1 lightOff')
    const [yellow,setYellow] = useState('yellow1 lightOff')
    const [green, setGreen] = useState('green1 lightOff')
    const [mils,setMils] = useState(0);

    useEffect(() => {
        setTimeout(()=> setMils(mils+1),1000)
    },[mils])

=======
>>>>>>> 86ea8725d3fc6793b226798d1acf23a4790a14ee
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

<<<<<<< HEAD
                <div className="walkLight">

                    <div className={red.includes('On') ? 'man' : 'walkMan man'}>
                    {/* <div className={red === 'red1 lightOff' ? '' : ''}> */}

                        <img class="man" src="https://image.flaticon.com/icons/png/512/8/8818.png"></img>
=======
                {/* <div className="walkLight">
                    <div className="walk">
>>>>>>> 86ea8725d3fc6793b226798d1acf23a4790a14ee

                    </div>

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
            </div> */}

		</div>
		</div>
	);
}



export default TrafficLight;


