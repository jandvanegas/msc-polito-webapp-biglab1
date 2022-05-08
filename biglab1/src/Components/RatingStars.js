import { StarFill, Star } from "react-bootstrap-icons";

function EditableRatingStars(props) {
  const stars = [];
  for (let index = 0; index < props.rating; index++) {
    stars.push(
      <StarFill
        key={index}
        onClick={(event) => {
          props.setRatingForm(index);
        }}
      />
    );
  }
  for (let index = props.rating + 1; index <= 5; index++) {
    stars.push(
      <Star
        key={index}
        onClick={(event) => {
          props.setRatingForm(index);
        }}
      />
    );
  }
  return <>{stars}</>;
}

export { EditableRatingStars };
