import { Card, CardBody, CardImg, CardText, CardTitle,
    Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

function CommentSection({ comments }) {
    if (!comments) return (<div></div>);
    const commentSection = comments.map(comment => {
        const date = new Date(Date.parse(comment.date));
        const dateFormat = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        };
        return (
            <div className="mb-4" key={comment.id}>
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

function DishSection({dish}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name}</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function DishDetail({ dish, comments }) {
    if (!dish) return (<div></div>);
    return (
        <div className="container">
            <div className="row">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <DishSection dish={dish}/>
                <CommentSection comments={comments}/>
            </div>
        </div>
    );
}

export default DishDetail;
