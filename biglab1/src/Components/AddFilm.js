import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import dayjs from "dayjs";
import { Check2Square, XSquare, Plus } from "react-bootstrap-icons";
import { EditableRatingStars } from "./RatingStars";

function AddFilm(props) {
  const [showForm, setShowForm] = useState(false);
  return showForm ? (
    <FilmForm
      addFilm={(film) => {
        props.addFilm(film);
        setShowForm(false);
      }}
      cancel={() => setShowForm(false)}
    />
  ) : (
    <Container className="flex-container flex-row-reverse">
      <Button className="btn-circle" onClick={() => setShowForm(true)}>
        <Plus />
      </Button>
    </Container>
  );
}

function FilmForm(props) {
  const [title, setTitle] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [watchDate, setWatchDate] = useState(dayjs());
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const film = {
      title: title,
      favorite: favorite,
      watchDate: dayjs(watchDate),
      rating: rating,
    };
    props.addFilm(film);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="flex-container align-items-stretch"
    >
      <Form.Group className="px-2 flex-fill">
        <Form.Control
          type="text"
          placeholder="Film Name"
          required={true}
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="px-2 flex-fill">
        <Form.Check
          type="checkbox"
          value={favorite}
          onChange={(event) => {setFavorite(event.target.checked)}}
          label="Favorite"
        />
      </Form.Group>
      <Form.Group className="px-2 flex-fill">
        <Form.Control
          type="date"
          value={watchDate.format("YYYY-MM-DD")}
          onChange={(event) => setWatchDate(dayjs(event.target.value))}
        />
      </Form.Group>
      <Form.Group className="px-2 flex-fill">
        <EditableRatingStars setRatingForm={setRating} rating={rating} />
      </Form.Group>
      <Form.Group className="px-2 flex-fill d-flex flex-row">
        <Button variant="success" type="submit">
          <Check2Square />
        </Button>{" "}
        <Button variant="warning" onClick={props.cancel}>
          <XSquare />
        </Button>
      </Form.Group>
    </Form>
  );
}

export default AddFilm;
