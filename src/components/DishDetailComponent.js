import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (!comments) return (<div></div>);
        const commentSection = comments.map(comment => {
            const date = new Date(Date.parse(comment.date));
            const dateFormat = { 
                year: 'numeric', 
                month: 'short', 
                day: '2-digit' 
            };
            return (
                <div className="mb-4">
                    <div className="mb-3">{comment.comment}</div>
                    <div>
                        -- {comment.author}, {new Intl.DateTimeFormat('en-US', dateFormat).format(date)}
                    </div>
                </div>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <div>{commentSection}</div>
            </div>
        );
    }

    render() {
        const dish = this.props.dish;
        if (!dish) return(<div></div>);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card> 
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle><b>{dish.name}</b></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;