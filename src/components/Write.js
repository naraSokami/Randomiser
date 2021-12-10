import React, { useState, useEffect } from 'react';

// props --> msg={ message to write magnificiently }

// UTIL //
const writingSpeed = 70


function Write(props) {
    
    const [char, setChar] = useState([]);
    const [counter, setCounter] = useState(0);


    useEffect(() => {
        let intervalId = setInterval(() => {
            setCounter(prev => {
                if (props.msg[counter] !== undefined) {
                    return prev += 1
                } else {
                    return prev = prev
                }
            });

            setChar(prev => {
                if (props.msg[counter] !== undefined) {
                    return [...prev, props.msg[counter]]
                } else {
                    return prev = prev
                }
            });
        }, writingSpeed)
        return () => {
            clearInterval(intervalId)
        }
    }, [char])


    return (  
        <p className="Write" id="test">{char.join('')}</p>
    );
}

export default Write;