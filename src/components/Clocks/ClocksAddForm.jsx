import { useState } from 'react';

function ClocksAddForm (props) {

    const [title, setTitle] = useState('');
    const [timeZone, setTimeZone] = useState('');

    const addClock = () => {
        props.onAddnewClock({'title' : title, 'timeZone': timeZone});
    };
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };
    const onChangeTimeZone = (e) => {
        setTimeZone(e.target.value);
    };

    return (
        <>
        <label>Название часов<input type="text" value={title} onChange={onChangeTitle} /></label>
        <label>Временная зона<input type="number" value={timeZone} onChange={onChangeTimeZone} /></label>
        <button onClick={addClock}>Добавить</button>  
        </>
    );
    }
    
    export default ClocksAddForm;