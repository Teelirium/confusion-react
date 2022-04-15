import {
    Card, CardBody, CardImg, CardText, CardTitle,
    Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalHeader, ModalBody, Label, Row, Col,
} from "reactstrap";
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";

function CommentSection({ comments, toggleCommentModal }) {
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
            <Button outline onClick={toggleCommentModal}>
                <span className="fa fa-lg fa-pencil"></span> Submit Comment
            </Button>
        </div>
    );
}

function DishSection({ dish }) {
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

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        const required = val => val && val.length;
        const maxLength = len => val => !val || (val.length <= len);
        const minLength = len => val => val && val.length > len;
        return (
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <Row className='form-group'>
                    <Label htmlFor='rating' md={12}>Rating</Label>
                    <Col md={12}>
                        <Control.select model='.rating'
                            className="form-select"
                            id='rating' name='rating'>
                            <option value='5'>5</option>
                            <option value='4'>4</option>
                            <option value='3'>3</option>
                            <option value='2'>2</option>
                            <option value='1'>1</option>
                        </Control.select>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Label htmlFor='author' md={12}>Your Name</Label>
                    <Col md={12}>
                        <Control.text model='.author'
                            className="form-control"
                            id='author' name="author"
                            placeholder="Your Name"
                            validators={{
                                required, 
                                minLength: minLength(2),
                                maxLength: maxLength(15),
                            }} 
                        />
                        <Errors className='text-danger'
                            model='.author' show='touched'
                            messages={{
                                required: 'Required ',   
                                minLength: 'Must be longer than 2 characters ',
                                maxLength: 'Must be 15 characters or shorter ',
                            }}
                        /> 
                    </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor='comment' md={12}>Comment</Label>
                    <Col md={12}>
                        <Control.textarea model='.comment' 
                            id='comment' name='comment' 
                            rows='6' className='form-control'
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={12}>
                        <Button type='submit' color='primary'>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </LocalForm>
        );
    }
}

function DishDetail({ dish, comments, addComment }) {
    const [isCommentModalOpen, setModal] = React.useState(false);
    const toggleCommentModal = () => setModal(!isCommentModalOpen);

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
                <DishSection dish={dish} />
                <CommentSection 
                    comments={comments} 
                    toggleCommentModal={toggleCommentModal}
                />
            </div>
            <Modal isOpen={isCommentModalOpen} toggle={toggleCommentModal}>
                <ModalHeader toggle={toggleCommentModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <CommentForm                     
                        addComment={addComment}
                        dishId={dish.id}
                    />
                </ModalBody>      
            </Modal>
        </div>
    );
}

export default DishDetail;
