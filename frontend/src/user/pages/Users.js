import React from "react";

import UsersList from "../components/js/UsersList.js";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: "Joey Iglesias",
            image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000&t=st=1702040501~exp=1702041101~hmac=171ce9386e532307f05197d24b503877c3257f4ffdc4d29385ae794d52a71479",
            placeCount: 3
        }
    ]
    return <UsersList results={USERS}/>;
}

export default Users;