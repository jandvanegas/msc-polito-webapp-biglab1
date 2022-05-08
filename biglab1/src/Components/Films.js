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
              case "favorite":
                return film.favorite;
              case "best-rated":
                return film.rating === 5;
              case "seen-last-month":
                return (
                  film.watchDate !== null &&
                  dayjs().subtract(30, "days").isBefore(film.watchDate)
                );
              case "unseen":
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
              editInline={props.editInline}
              editFilm={props.editFilm}
            />
          ))}
      </tbody>
    </Table>
  );
}

function FilmRow(props) {
  return (
    <tr>
      <FilmData film={props.film} editInline={props.editInline} />
      <FilmAction
        film={props.film}
        deleteFilm={() => {
          props.deleteFilm(props.film.id);
        }}
        editFilm={() => {
          props.editFilm(props.film)
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
            props.editInline(props.film.id, props.film.rating, newValue);
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
            props.editInline(props.film.id, newValue, props.film.favorite);
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
        <Button variant="primary" onClick={props.editFilm}>
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
