import React from "react";
import GreenLight from './images/green-light.png';
import YellowLight from './images/yellow-light.png';
import RedLight from './images/red-light.png';
import MyVideo from './images/Crosswalk 9 sec.mp4';
import MyAudio from './images/jazzy.mp3';


export function MyCrossWalk(){
    return(

        <div className="lightShow">
            <div id="redOne" className="redOne">
                <img src={GreenLight} width="100%" ></img>
            </div>

            <div id="yellowOne" className="yellowOne">
                <img src={YellowLight} width="100%"></img>
            </div>

            <div id="greenOne" className="greenOne">
                <img src={RedLight} width="100%" ></img>
            </div>

            <div>
                <video width="100%" controls>
                    <source src={MyVideo}
                    type="video/mp4"></source>
                </video>
            </div>
            <audio controls>
                    <source src={MyAudio}/>
            </audio>
        </div>
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