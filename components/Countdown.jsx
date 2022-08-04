import React from 'react'
import { useState, useEffect } from 'react';

const Countdown = ({ initialMinute, initialSeconds, setIsShowCount  }) => {
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
            if(minutes === 0 && seconds === 0){
              console.log('%cCountdown.jsx line:21 seconds', 'color: #007acc;', seconds);
              setIsShowCount(false) 
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });


    return (
        <div>
        { minutes === 0 && seconds === 0
            ? null
            : <p className='mb-0'> { minutes <= 0 ? '' : minutes + ':' }{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
        </div>
    )
}

export default Countdown;