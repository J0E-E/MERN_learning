import React, {useState} from "react";

import '../scss/PlaceItem.scss'
import Card from "../../../shared/components/UIElements/js/Card";
import Button from "../../../shared/components/FormElements/js/Button";
import Modal from "../../../shared/components/UIElements/js/Modal";

const PlaceItem = props => {

    const [showMapModal, setShowMapModal] = useState(false);

    const openMapHandler = () => setShowMapModal(true);
    const closeMapHandler = () => setShowMapModal(false);

    return (
        <React.Fragment>
            <Modal
                show={showMapModal}
                onCancel={closeMapHandler}
                header={props.title}
                contentClass='place-item__modal-content'
                footerClass='place-item__modal-actions'
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className='map-container'>
                    <h2>This is my MAP MODAL</h2>
                </div>
            </Modal>
            <li className='place-item'>
                <Card className='place-item__content'>
                    <div className='place-item__image'>
                        <img src={props.image} alt={props.title}/>
                    </div>
                    <div className='place-item__info'>
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className='place-item__actions'>
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        <Button to={`places/${props.id}`}>EDIT</Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    )
};

export default PlaceItem;