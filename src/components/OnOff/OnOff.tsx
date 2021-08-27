import React from "react";

type OnOffPropsType = {
    status: boolean
    changeStatusOnOff: (value: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '5px',
        backgroundColor: props.status ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '5px',
        backgroundColor: props.status ? 'white' : 'red'
    }
    const indicationStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        backgroundColor: props.status ? 'green' : 'red',
    }

    const onOnClicked = () => {
        props.changeStatusOnOff(true)
    }

    const onOffClicked = () => {
        props.changeStatusOnOff(true)
    }

    return (
        <>
            <div style={onStyle} onClick={onOnClicked}>On</div>
            <div style={offStyle} onClick={onOffClicked}>Off</div>
            <div style={indicationStyle}/>
        </>
    )
}