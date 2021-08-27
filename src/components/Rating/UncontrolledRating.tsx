import React, {useState} from "react";

type StarPropsType = {
    setStarValue: () => void
    selected: boolean
}


export const UncontrolledRating = () => {
    const [star, setStar] = useState<number>(0)

    return (
        <div>
            <Star selected={star > 0} setStarValue={() => {setStar(1)}}/>
            <Star selected={star > 1} setStarValue={() => {setStar(2)}}/>
            <Star selected={star > 2} setStarValue={() => {setStar(3)}}/>
            <Star selected={star > 3} setStarValue={() => {setStar(4)}}/>
            <Star selected={star > 4} setStarValue={() => {setStar(5)}}/>
        </div>
    )
}

function Star(props: StarPropsType) {

    const onStarClicked = () => {
        props.setStarValue()
    }

    return <span onClick={onStarClicked}>{props.selected ? <b>Star </b> : 'Star '}</span>
}