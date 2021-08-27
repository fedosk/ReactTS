import React from "react";


type ItemsPropsType = {
    title: string
    value: any
}

type AccordionPropsValue = {
    titleValue: string,
    collapsed: boolean
    changeAccardionCollapsed: () => void
    items: ItemsPropsType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsValue = {
    titleValue: string
    changeAccardionCollapsed: () => void
}


function Accordion(props: AccordionPropsValue) {
    console.log('Accordion rendered')
    return <>
        <AccordionTitle changeAccardionCollapsed={props.changeAccardionCollapsed} titleValue={props.titleValue}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </>
}

function AccordionTitle(props: AccordionTitlePropsValue) {
    console.log('AccordionTitle rendered')
    return (
        <h3 onClick={props.changeAccardionCollapsed}>{props.titleValue}</h3>
    )
}

type AccordionBodyPropsType = {
    items: ItemsPropsType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {props.items.map((i, index)=> <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

export default Accordion