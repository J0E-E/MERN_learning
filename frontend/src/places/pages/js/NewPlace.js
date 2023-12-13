import React from "react";
import Input from "../../../shared/components/FormElements/js/Input";

import "../scss/NewPlace.scss"

const NewPlace = () => {
    return (
        <form className="place-form">
            <Input element="input" type="text" label="Title"/>
        </form>
    )
};

export default NewPlace;