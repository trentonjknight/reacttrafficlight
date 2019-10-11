import React, { useState, useEffect } from "react";
import GreenLight from './images/green2.png';
import YellowLight from './images/yellow2.png';
import RedLight from './images/red2.png';
import MyVideo from './images/Crosswalk 9 sec.mp4';
import MyAudio from './images/jazzy.mp3';
import TrafficLight from './Traffic.js'

function CohesiveLights(){
    const red = require({RedLight})
    const yellow = require({YellowLight})
    const green = require({GreenLight})
    // const shirts = { white, black }


  }


export function MyCrossWalk(){
    return(

<>
            <div>
                <video loop id="myVideo" width="100%" controls>
                    <source src={MyVideo}
                    type="video/mp4"></source>
                </video>
                <audio controls autoPlay id="myAudio">
                        <source src={MyAudio}/>
                </audio>
            </div>
        <div className="lightShow">
            <div id="redOne" className="stackD">
                <img src={RedLight} width="100% d-none" ></img>
            </div>

            <div id="yellowOne" className="stackD">
                <img src={YellowLight} width="100% d-none"></img>
            </div>

            <div id="greenOne" className="stackD">
                <img src={GreenLight} width="100% d-none" ></img>
            </div>
        </div>

</>

    );
}



            {/* <div className="pole"></div> */}

			{/* <div id="walkLight" className="walkLite">
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
			</div> */}

		{/* </div> */}