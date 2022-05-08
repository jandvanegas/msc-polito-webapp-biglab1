import { Table, Button } from "react-bootstrap";
import { CheckBox } from "./CheckBox";
import { EditableRatingStars } from "./RatingStars";
import dayjs from "dayjs";
import { Trash, PencilSquare } from "react-bootstrap-icons";

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
  return (
    <tr>
      <FilmData film={props.film} updateFilm={props.updateFilm} />
      <FilmAction
        film={props.film}
        deleteFilm={() => {
          props.deleteFilm(props.film.id);
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
          editable={true}
          value={props.film.favorite}
          setValue={(newValue) => {
            props.updateFilm(props.film.id, props.film.rating, newValue);
          }}
        />
      </td>

      <td>
        {props.film.watchDate !== null
          ? props.film.watchDate.format("MMMM DD, YYYY")
          : ""}
      </td>

      <td>
          <EditableRatingStars
            rating={props.film.rating}
            setRatingForm={(newValue) => {
              props.updateFilm(props.film.id, newValue, props.film.rating);
            }}
          />
      </td>
    </>
  );
}

function FilmAction(props) {
  return (
    <td>
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
    </td>
  );
}

export default Films;
