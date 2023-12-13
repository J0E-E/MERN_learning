import React, {useRef} from "react";

import "../scss/GoogleMap.scss"
import {Loader} from "@googlemaps/js-api-loader";

const Map = props => {
    const mapRef = useRef();

    const loader = new Loader({
        apiKey: "AIzaSyATQI5dFmf0ZGjK7L09FZVCvrRnmrwpmNU",
        version: "weekly",
        libraries: ["places"]
    })

    const mapOptions = {
        center: props.center,
        zoom: props.zoom,
        mapId: "PLACE_MAP_ID"
    }

    loader.importLibrary('maps')
        .then(({Map}) => {
            let map = new Map(mapRef.current, mapOptions);
            loader.importLibrary('marker')
                .then(({AdvancedMarkerElement}) => {
                    new AdvancedMarkerElement({
                        map: map,
                        position: props.center,
                    })
                })
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <div ref={mapRef} className={`map ${props.className}`} style={props.style}>

        </div>
    )
};

export default Map