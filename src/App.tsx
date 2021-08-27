import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValuePropsType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";



function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    let [accardionCollapsed, setAccardionCollapsed] = useState<boolean>(false)
    const [status, setStatus] = useState(false)

    const changeRatingValue = (value: RatingValuePropsType) => {
        setRatingValue(value)
    }

    const changeAccardionCollapsed = () => {
        setAccardionCollapsed(!accardionCollapsed)
    }

    const changeStatusOnOff = (value: boolean) => {
        setStatus(value)
    }

    return (
        <div className="App">
            <Rating value={ratingValue} changeRatingValue={changeRatingValue} />
            <UncontrolledRating/>
            <Accordion titleValue={'Menu'} collapsed={accardionCollapsed} changeAccardionCollapsed={changeAccardionCollapsed}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff status={status} changeStatusOnOff={changeStatusOnOff}/>
            <UncontrolledOnOff/>
        </div>
    );
}

export default App;





