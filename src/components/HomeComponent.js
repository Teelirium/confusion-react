import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from "./LoadingComponent";

function FeaturedCard(props) {
    const {item, isLoading, errorMsg} = props;
    if (isLoading) {
        return (
            <Loading/>
        );
    }
    else if (errorMsg) {
        return (
            <h4>{errorMsg}</h4>
        );
    }
    return (
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <FeaturedCard 
                    item={props.dish}
                    isLoading={props.dishesLoading}
                    errorMsg={props.dishesErrorMsg}
                    />
                </div>
                <div className="col-12 col-md m-1">
                    <FeaturedCard 
                    item={props.promotion}
                    isLoading={props.isLoading}
                    />
                </div>        
                <div className="col-12 col-md m-1">
                    <FeaturedCard item={props.leader}/>
                </div>      
            </div>
        </div>
    );
}

export default Home;
