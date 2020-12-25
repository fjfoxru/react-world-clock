import { useState } from 'react';

function ClocksItem (props) {

const [time, setTime] = useState(new Date());




    return (
        <div>
        {props.item.title}
        {time}
        </div>
    );
    }
    
export default ClocksItem;