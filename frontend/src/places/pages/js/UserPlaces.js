import React from "react";
import PlaceList from "../../components/js/PlaceList";
import {useParams} from "react-router-dom";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: "This skyscraper needs no description.",
        imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNbONUDUI5C2mnqvbUrOj_6UfNnTX6cRCTFxTS5=s1360-w1360-h1020",
        address: "20 W 34th St., New York, NY 10001",
        coordinates: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: "u1"
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: "This skyscraper needs no description.",
        imageUrl: "https://lh3.googleusercontent.com/p/AF1QipNbONUDUI5C2mnqvbUrOj_6UfNnTX6cRCTFxTS5=s1360-w1360-h1020",
        address: "20 W 34th St., New York, NY 10001",
        coordinates: {
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: "u2"
    }
]

const UserPlaces = props => {
    const userId = useParams().userId;
    const usersPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList results={usersPlaces}/>
    )
};

export default UserPlaces;