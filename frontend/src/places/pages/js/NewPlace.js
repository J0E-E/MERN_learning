import React, {useCallback, useReducer} from "react";
import Input from "../../../shared/components/FormElements/js/Input";

import "../scss/NewPlace.scss"
import {VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE} from "../../../shared/Utils/Validators";
import Button from "../../../shared/components/FormElements/js/Button";

const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            let formIsValid = true
            for (const inputId in state.inputs)
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {value: action.value, isValid: action.isValid}
                },
                isValid: formIsValid
            }
        default:
            return state
    }
}

const NewPlace = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    })

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({type: "INPUT_CHANGE", value: value, inputId: id, isValid: isValid})
    }, [])

    const placeSubmitHandler = (event) => {
        event.preventDefault()
        console.log(formState.inputs) // send to backend later
    }
    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter at least 5 characters."
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                type="text"
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid address."
                onInput={inputHandler}
            />
            <Button
                type="submit"
                disabled={!formState.isValid}
            >
                Add Place
            </Button>
        </form>
    )
};

export default NewPlace;