import React from "react";

import '../scss/PlaceList.scss';
import Card from "../../../shared/components/UIElements/js/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
    if (props.results.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No places found. You should create one...</h2>
                    <button>Create Place</button>
                </Card>
            </div>
        )
    }

    return (
        <ul className="place-list">
            {props.results.map(place =>
                <PlaceItem
                    key={place.id}
                    id={place.id}
                    title={place.title}
                    description={place.description}
                    image={place.imageUrl}
                    address={place.address}
                    coordinates={place.coordinates}
                    creatorId={place.creator}
                />
            )}
        </ul>
    )
};

export default PlaceList;