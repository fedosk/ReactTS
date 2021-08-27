import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
    defaultValue?: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

    const [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicationStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicationStyle}/>
        </>
    )
}