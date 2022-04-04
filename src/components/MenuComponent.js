import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, 
    CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.dishes.map(dish => {
            // every item in a list needs a key
            // since html elements must be unqiue
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle><b>{dish.name}</b></CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;
