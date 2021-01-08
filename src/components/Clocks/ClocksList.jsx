import ClocksItem from './ClocksItem';

function ClocksList (props) {
    return (
        <div className="times">
            { props.data.map(item => <ClocksItem item={item} key={item.timeZone} deleteClock={props.onDeleteClock} />) }
        </div>
    );
    }
    
    export default ClocksList;