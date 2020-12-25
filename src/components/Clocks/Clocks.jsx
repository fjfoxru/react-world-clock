import { useState } from 'react';
import ClocksList from './ClocksList';
import ClocksAddForm from './ClocksAddForm';

function Clocks () {

const [clocks, setClocks] = useState([]);

const addNewClock = (e) => {;
    setClocks(clock => [...clock, e])
};

return (
    <>
    <ClocksList data={clocks} />
    <ClocksAddForm onAddnewClock={addNewClock} />
    </>
);
}

export default Clocks;