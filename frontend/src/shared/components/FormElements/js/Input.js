import React, {useReducer} from "react";

import { validate } from "../../../Utils/Validators";
import "../scss/Input.scss"

const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                value: action.value,
                isValid: validate(action.value, action.validators)
            }
        case "TOUCH":
            return {
                ...state,
                isTouched: true
            }
        default:
            return state
    }

}

const Input = props => {

    const [inputState, dispatch] = useReducer(inputReducer, {value: '', isValid: false, isTouched: false})

    const changeEventHandler = (event) => {
        dispatch({type: "CHANGE", value: event.target.value, validators: props.validators})
    }

    const touchHandler = (event) => {
        dispatch({type: "TOUCH"})
    }

    const element = props.element === "input" ? (
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={changeEventHandler}
            onBlur={touchHandler}
            value={inputState.value}
        />
    ) : (
        <textarea
            id={props.id}
            rows={props.rows || 3}
            onChange={changeEventHandler}
            value={inputState.value}
            onBlur={touchHandler}
        />
    );

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    )
};

export default Input