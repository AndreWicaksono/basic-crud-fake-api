import React from 'react';
import ShowModal from '../Modal/ShowModal';

import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostCard = (props) => {
    return (
        <Card className="my-3">
          <CardBody>
            <CardTitle className="font-weight-bold" style={{fontSize: '1.5rem'}}>{props.data.title}</CardTitle>
            <CardSubtitle className="font-italic">{props.data.author}</CardSubtitle>
            <CardText>{props.data.content}</CardText>
            <div className="d-flex flex-row justify-content-end mt-9">
              <ShowModal refreshPost={props.refreshPost} postID={props.data.id} buttonWidth="5rem" buttonLabel="Edit" windowTitle={props.data.title} windowAuthor={props.data.author} windowBody={props.data.content} />
              <Button onClick={() => props.remove(props.data.id)} style={{width: '5rem'}} className="ml-3" color="danger">Delete</Button>
            </div>
          </CardBody>
        </Card>
    );
};

export default PostCard;