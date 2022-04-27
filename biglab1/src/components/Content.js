import { Container, Row, Col, Table, Button } from "react-bootstrap";
import dayjs from "dayjs";


function Films(props) {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-start">
        <Col xs={4}>
          <h1 className="text-dark">{props.title}</h1>
        </Col>
      </Row>
      <Row>
        <FilmsTable films={props.films} filterSelected={props.filterSelected} />
      </Row>
    </Container>
  );
}

function FilmsTable(props) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Favorite</th>
          <th>Watch</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {props.films
          .filter((film) => {
            if (props.filterSelected === "Favorites") {
              return film.favorite;
            } else if (props.filterSelected === "Best Rated") {
              return film.score === 5;
            } else if (props.filterSelected === "Seen Last Month") {
              return (
                "watchDate" in film &&
                dayjs().subtract(30, "days").isBefore(film.watchDate)
              );
            } else if (props.filterSelected === "Unseen") {
              return !("watchDate" in film);
            }
            return true;
          })
          .map((film) => (
            <FilmRow film={film} key={film.id} />
          ))}
      </tbody>
    </Table>
  );
}

function FilmRow(props) {
  const favorite = (
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      checked={props.film.favorite}
    ></input>
  );
  return (
    <>
      <tr>
        <td className="d-flex flex-row justify-content-start">
          <Button variant="light">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-trash"></i>
          </Button>
          {props.film.name}
        </td>
        <td>{favorite} Favorite</td>
        <td>{props.film.watchDate?.format("YYYY-MM-DD")} </td>
        <td>{props.film.score} </td>
      </tr>
    </>
  );
}

export { Films };
