import { Container, Row, Col, Button } from "react-bootstrap";
import Films from "./Films";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import { FilmForm } from "./FilmForm";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import { Plus } from "react-bootstrap-icons";
import dayjs from "dayjs";

function ListFilms(props) {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
        <SideBar
          filters={props.filters}
          filter={props.filter}
          setFilterSelected={(filter) => {
            navigate(`/${filter[0]}`);
          }}
          open={props.open}
        />
        <Col className="col-12 col-md-9">
          <div className="d-flex justify-content-start m-3">
            <h1>{props.filter[1]}</h1>
          </div>
          <Films
            films={props.films}
            deleteFilm={props.deleteFilm}
            editInline={props.editInline}
            editFilm={(film) => {
              navigate(`/edit/${film.id}`, {
                state: {
                  film: film,
                  watchDate:
                    film.watchDate && film.watchDate.format("YYYY-MM-DD"),
                },
              });
            }}
            filterSelected={props.filter[0]}
          />
        </Col>
      </Row>

      <Container className="flex-container flex-row-reverse">
        <Link to="/add">
          <Button className="btn-circle">
            <Plus />
          </Button>
        </Link>
      </Container>
    </Container>
  );
}

function PageLayout(props) {
  return (
    <>
      <Navigation open={props.open} setOpen={props.setOpen} />
      {props.children}
    </>
  );
}

function AddFilm(props) {
  const navigate = useNavigate();
  return (
    <Container className="d-flex flex-column ">
      <div className="w-25">
        <h2>Insert New Film</h2>
      </div>
      <FilmForm
        className="w-25"
        addFilm={(film) => {
          props.addFilm(film);
          navigate("/");
        }}
        cancel={() => {
          navigate("/");
        }}
      />
    </Container>
  );
}

function EditFilm(props) {
  const navigate = useNavigate();
  const params = useParams();
  const filmId = parseInt(params.id);
  const location = useLocation();
  const film = {
    ...location.state.film,
    watchDate: location.state.watchDate ? dayjs(location.state.watchDate) : "",
  };

  return (
    <Container className="d-flex flex-column ">
      <div className="w-25">
        <h2>Edit Film</h2>
      </div>
      <FilmForm
        filmId={filmId}
        film={film}
        editFilm={(data) => {
          props.editFilm(filmId, data);
          navigate("/");
        }}
        cancel={() => {
          navigate("/");
        }}
      />
    </Container>
  );
}
export { ListFilms, PageLayout, AddFilm, EditFilm };
