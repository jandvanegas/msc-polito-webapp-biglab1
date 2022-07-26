import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import dayjs from "dayjs";
import { Check2Square, XSquare } from "react-bootstrap-icons";
import { EditableRatingStars } from "./RatingStars";

function FilmForm(props) {
  const filmId = props.filmId;
  const film = props.film;

  const [title, setTitle] = useState(filmId ? film.title : "");
  const [favorite, setFavorite] = useState(filmId ? film.favorite : false);
  const [watchDate, setWatchDate] = useState(
    filmId && film.watchDate ? film.watchDate : ""
  );
  const [rating, setRating] = useState(filmId ? film.rating : 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const film = {
      title: title,
      favorite: favorite,
      watchDate: watchDate,
      rating: rating,
    };
    if (filmId) {
      props.editFilm(film);
    } else {
      props.addFilm(film);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex flex-column justify-content-center w-25 "
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
          checked={favorite}
          onChange={(event) => {
            setFavorite(event.target.checked);
          }}
          label="Favorite"
        />
      </Form.Group>
      <Form.Group className="px-2 flex-fill">
        <Form.Control
          type="date"
          value={
            watchDate !== "" && watchDate !== undefined
              ? watchDate.format("YYYY-MM-DD")
              : ""
          }
          onChange={(event) =>
            setWatchDate(event.target.value ? dayjs(event.target.value) : "")
          }
        />
      </Form.Group>
      <Form.Group className="px-2 flex-fill">
        <EditableRatingStars setRatingForm={setRating} rating={rating} />
      </Form.Group>
      <Form.Group className="px-2 d-flex flex-row justify-content-center">
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

export { FilmForm };
