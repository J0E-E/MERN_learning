import React from "react";

import UserItem from "./UserItem";
import Card from "../../../shared/components/UIElements/js/Card.js";
import '../scss/UsersList.scss'

const UsersList = props => {
    if (props.results.length === 0) {
        return <div className="center">
            <Card>
                <h2>No users found.</h2>
            </Card>
        </div>
    }

    return (
        <ul className='users-list'>
            {props.results.map(user =>
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.placeCount}
                />
            )}
        </ul>
    )
};

export default UsersList