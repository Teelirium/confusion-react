import React from "react";
import { FadeTransform } from 'react-animation-components';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
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
        <FadeTransform in transformProps={{exitTransform: 'scale(0.5) translateY(-50%)'}}>
        <Card>
            <CardImg src={baseUrl + item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
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
                    isLoading={props.promosLoading}
                    errorMsg={props.promosErrorMsg}
                    />
                </div>        
                <div className="col-12 col-md m-1">
                    <FeaturedCard 
                    item={props.leader}
                    isLoading={props.leadersLoading}
                    errorMsg={props.leadersErrorMsg}                    
                    />
                </div>      
            </div>
        </div>
    );
}

export default Home;
