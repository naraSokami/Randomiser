import React, { useState, useEffect } from 'react';
import Write from './Write';
import RandomiserContainer from './RandomiserContainer'

function Test() {
    const [listOfdata, setListOfData] = useState();
    const [msgList, setMsgList] = useState(["Je pris une profonde inspiration, m'assis sur mon lit et ferma les yeux cherchant à reprendre mes esprits et me calmant afin de regagner un peu en lucidité. \n\n", "Dans une demi-heure je serai probablement plus là pour penser comme je le fais en ce moment, songeai-je. A moins que... 3 candidats venaient à disparaître avant la fin du temps... J'arrêttai brusquement ma réflexion et rouvris les yeux. Je n'arrivais pas à croire que j'avais pu, pendant un moment, considérer une telle solution."]);
    const [counter, setCounter] = useState(0);
    const [msgToDisplay, setMsgToDisplay] = useState(msgList[0]);


    const handleIsDone = () => {
            // console.log('TEST')
            setCounter(prev => prev += 1)
            setMsgToDisplay(prev => 
                prev += msgList[counter]
        )
    }

    return (  
        <div className="Test">
            <h2>Test</h2>
                <RandomiserContainer />
                <p>who are U ?</p>
                {/* <Write msg={msgList.join(' ')} isDone={handleIsDone}/> */}
                <div className="Question">
                <input type="text" />
            </div>
        </div>
    );
}

export default Test;