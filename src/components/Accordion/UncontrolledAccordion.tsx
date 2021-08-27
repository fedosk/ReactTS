import React, {useState} from "react";

type AccordionPropsValue = {
    titleValue: string,
}

type AccordionTitlePropsValue = {
    titleValue: string
    onSetCollaps: () => void
}


function UncontrolledAccordion(props: AccordionPropsValue) {

    const [collaps, setCollaps] = useState(false)

    const onSetCollaps = () => {
        setCollaps(!collaps)
    }

    return <>
        <AccordionTitle onSetCollaps={onSetCollaps} titleValue={props.titleValue}/>
        {collaps && <AccordionBody/>}
    </>
}

function AccordionTitle(props: AccordionTitlePropsValue) {

    return (
        <><h3 onClick={() => props.onSetCollaps()}>{props.titleValue}</h3></>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion