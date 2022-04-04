import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function MenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle><b>{dish.name}</b></CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Menu(props) {
    // every item in a list needs a key
    // since html elements must be unqiue
    const menu = props.dishes.map(dish => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-2">
                <MenuItem dish={dish} onClick={props.onClick} />
            </div> 
        );
    });
    return (                
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;
