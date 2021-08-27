import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from "./Select.module.css"

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const [toggle, setToggle] = useState(true)
    const [hovered, setHovered] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hovered)

    useEffect(() => {
        setHovered(props.value);
    }, [props.value])

    const toggleSelect = () => {
        setToggle(!toggle)
    }


    const onItemsClick = (value: any) => {
        props.onChange(value);
        toggleSelect()
    }

    const keyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setToggle(false)
        }
    }

    return (
        <div className={styles.select} tabIndex={0} onKeyUp={keyUp}>
            <span className={styles.main} onClick={toggleSelect}>{selectedItem && selectedItem.title}</span>
            {
                toggle &&
                <div className={styles.items}>
                    {props.items.map(i => <div
                        className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                        onMouseEnter={() => {
                            setHovered(i.value)
                        }}
                        onClick={() => onItemsClick(i.value)}
                        key={i.value}>{i.title}</div>)}
                </div>
            }
        </div>
    )
}