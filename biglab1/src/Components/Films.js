import { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { CheckBox } from "./CheckBox";
import { EditableRatingStars, RatingStars } from "./RatingStars";
import dayjs from "dayjs";
import {
  Trash,
  PencilSquare,
  CheckSquare,
  XSquare,
} from "react-bootstrap-icons";

function Films(props) {
  return (
    <Table striped hover>
      <tbody>
        {props.films
          .filter((film) => {
            switch (props.filterSelected) {
              case "Favorite":
                return film.favorite;
              case "Best Rated":
                return film.rating === 5;
              case "Seen Last Month":
                return (
                  film.watchDate !== null &&
                  dayjs().subtract(30, "days").isBefore(film.watchDate)
                );
              case "Unseen":
                return film.watchDate === null;
              default:
                return true;
            }
          })
          .map((film) => (
            <FilmRow
              film={film}
              key={film.id}
              deleteFilm={props.deleteFilm}
              updateFilm={props.updateFilm}
            />
          ))}
      </tbody>
    </Table>
  );
}

function FilmRow(props) {
  const [editable, setEditable] = useState(false);
  const [newRating, setNewRating] = useState(props.film.rating);
  const [newFavorite, setNewFavorite] = useState(props.film.favorite);
  return (
    <tr>
      <FilmData
        film={props.film}
        editable={editable}
        setNewRating={setNewRating}
        setNewFavorite={setNewFavorite}
      />
      <FilmAction
        film={props.film}
        deleteFilm={() => {
          props.deleteFilm(props.film.id);
        }}
        editable={editable}
        setEditable={setEditable}
        saveEdit={() => {
          props.updateFilm(props.film.id, newRating, newFavorite);
          setEditable(false);
        }}
        cancel={() => {
          setNewFavorite(props.film.favorite);
          setNewRating(props.film.rating);
          setEditable(false);
        }}
      />
    </tr>
  );
}

function FilmData(props) {
  return (
    <>
      <td>
        <div style={props.film.favorite ? { color: "red" } : {}}>
          {props.film.title}
        </div>
      </td>

      <td>
        <CheckBox
          editable={props.editable}
          value={props.film.favorite}
          setValue={props.setNewFavorite}
        />
      </td>

      <td>
        {props.film.watchDate !== null
          ? props.film.watchDate.format("MMMM DD, YYYY")
          : ""}
      </td>

      <td>
        {props.editable === true ? (
          <EditableRatingStars
            rating={props.film.rating}
            setRatingForm={props.setNewRating}
          />
        ) : (
          <RatingStars rating={props.film.rating} />
        )}
      </td>
    </>
  );
}

function FilmAction(props) {
  return (
    <td>
      {props.editable === false ? (
        <>
          <Button
            variant="primary"
            onClick={() => {
              props.setEditable(true);
            }}
          >
            <PencilSquare />
          </Button>
          <Button variant="danger" onClick={props.deleteFilm}>
            <Trash />
          </Button>
        </>
      ) : (
        <>
          <Button variant="success" onClick={props.saveEdit}>
            <CheckSquare />
          </Button>
          <Button variant="warning" onClick={props.cancel}>
            <XSquare />
          </Button>
        </>
      )}
    </td>
  );
}

export default Films;
