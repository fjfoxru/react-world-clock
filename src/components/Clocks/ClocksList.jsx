import ClocksItem from './ClocksItem';

function ClocksList (props) {
    return (
        <>
            { props.data.map(item => <ClocksItem item={item} />) }
        </>
    );
    }
    
    export default ClocksList;