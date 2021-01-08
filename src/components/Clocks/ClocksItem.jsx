import { useState, useEffect } from 'react';


function ClocksItem (props) {
    
    
    const [time, setTime] = useState(new Date(Date.UTC(0, 0, 0, props.item.timeZone, 0, 0)));


    useEffect(() => {
        const intervalId = setInterval(() => { 
            setTime(new Date(time.setSeconds(time.getSeconds() + 1)));
        }, 1000);
        console.log('тик:' + props.item.title);
        return () => clearInterval(intervalId);
    });


    return (
        <div>
        {props.item.title + '---' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()}
        <button onClick={() => props.deleteClock(props.item.title)}>Удалить</button>
        </div>
    );
    }
    
export default ClocksItem;