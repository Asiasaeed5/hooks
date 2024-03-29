
import React from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const MovieCard = (props) => {
  return (
    <Card style={{ width: '25rem' }}>
      <img
        style={{ height: "300px" }}
        alt="Sample"
        src={props.el.img}
      />
      <CardBody>
        <CardTitle tag="h5">
          <Link to={`/Profile/${props.el.id}`}>{props.el.name}</Link>
        </CardTitle>
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={props.el.star}
          edit={false}
        />
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          {props.el.discription}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
