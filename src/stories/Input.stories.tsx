import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Simulate} from "react-dom/test-utils";
import {Button} from "./Button";

export default {
  title: '/input',
  // component: input,
}

export const UncontrolledInput: any = () => <input/>;


export const TrackValueOfUncontroledInput= () => {
  const [value, setValue] = useState('')

  const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
      let text = event.currentTarget.value
      setValue(text)
  }
  return <> <input onChange={onChangeHandler}/> - {value} </>
};


export const GetValueOfUncontroledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    let text = inputRef.current?.value
    text && setValue(text)
  }

  return <>
    <input ref={inputRef}/>
    <button onClick={save}>save</button>
    - actual value: {value}
  </>
};


export const ControledInput = () => {
  const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return <input value={value} onChange={onChange}/>
};


export const ControledCheckbox = () => {
  const [value, setValue] = useState(false)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.checked)
  }

  return <input type={'checkbox'} checked={value} onChange={onChange}/>
};

export const ControledSelect = () => {
  const [value, setValue] = useState<string | undefined>('1')

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.currentTarget.value)
  }

  return <select onChange={onChange} value={value}>
    <option >none</option>
    <option value={'1'}>Minsk</option>
    <option value={'2'}>Kiev</option>
    <option value={'3'}>Moscov</option>
  </select>
};







