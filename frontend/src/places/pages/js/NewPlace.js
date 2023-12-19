import React from "react";
import Input from "../../../shared/components/FormElements/js/Input";

import "../scss/NewPlace.scss"
import {VALIDATOR_REQUIRE} from "../../../shared/Utils/Validators";

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
            />
        </form>
    )
};

export default NewPlace;