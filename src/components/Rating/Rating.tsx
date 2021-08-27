import React from "react";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingPropsType = {
    value: RatingValuePropsType
    changeRatingValue: (value: RatingValuePropsType) => void
}


export const Rating = (props: RatingPropsType) => {
    console.log('Rating rendered')

    return (
        <div>
            <Star changeRatingValue={props.changeRatingValue} value={1} selected={props.value > 0}/>
            <Star changeRatingValue={props.changeRatingValue} value={2} selected={props.value > 1}/>
            <Star changeRatingValue={props.changeRatingValue} value={3} selected={props.value > 2}/>
            <Star changeRatingValue={props.changeRatingValue} value={4} selected={props.value > 3}/>
            <Star changeRatingValue={props.changeRatingValue} value={5} selected={props.value > 4}/>
        </div>
    )
}

type StarPropsType = {
    changeRatingValue: (value: RatingValuePropsType) => void
    value: RatingValuePropsType
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendered');

    return <span onClick={() => props.changeRatingValue(props.value)}>{props.selected ? <b>Star </b> : 'Star '}</span>
}