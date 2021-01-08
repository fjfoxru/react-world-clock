import { useState } from 'react';
import ClocksList from './ClocksList';
import ClocksAddForm from './ClocksAddForm';

function Clocks () {

const [clocks, setClocks] = useState([]);

const addNewClock = (e) => {;
    setClocks(clocks => {
        return [...clocks,
            e]
    })
};

const deleteOneClock = (e) => {
    let clockToDelete = clocks.findIndex(el => el.title === e);
    if (clockToDelete !== -1) {
        setClocks(clocks => {
        let clockToDelete = clocks.findIndex(el => el.title === e);
        let newState = clocks.slice();
        newState.splice(clockToDelete, 1)
            return newState ;
        });
    }
    
}

return (
    <>
    <ClocksList data={clocks} onDeleteClock={deleteOneClock} />
    <ClocksAddForm onAddnewClock={addNewClock} />
    </>
);
}

export default Clocks;