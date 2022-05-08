import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ListFilms, PageLayout, AddFilm, EditFilm } from "./Components/Views";
import dayjs from "dayjs";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const filmsLibrary = [
  {
    id: 1,
    title: "Pulp Fiction",
    favorite: true,
    watchDate: dayjs("2022-03-10"),
    rating: 5,
  },
  {
    id: 2,
    title: "21 Grams",
    favorite: true,
    watchDate: dayjs("2022-03-10"),
    rating: 4,
  },
  {
    id: 3,
    title: "Star Wars",
    favorite: false,
    watchDate: null,
    rating: 0,
  },
  {
    id: 4,
    title: "Matrix",
    favorite: false,
    watchDate: null,
    rating: 0,
  },
  {
    id: 5,
    title: "Shrek",
    favorite: false,
    watchDate: dayjs("2022-04-21"),
    rating: 3,
  },
];

function App() {
  const [open, setOpen] = useState(false);
  const [films, setFilms] = useState(filmsLibrary);
  const [filmAutoIncrement, setFilmAutoIncrement] = useState(6);

  const deleteFilm = (filmID) => {
    setFilms((oldFilms) => oldFilms.filter((film) => film.id !== filmID));
  };

  const addFilm = (film) => {
    film.id = filmAutoIncrement;
    setFilms((oldFilms) => [...oldFilms, film]);
    setFilmAutoIncrement(filmAutoIncrement + 1);
  };

  const editInline = (filmId, newRating, newFavorite) => {
    setFilms((oldFilms) => {
      return oldFilms.map((ex) => {
        if (ex.id === filmId) {
          ex.favorite = newFavorite;
          ex.rating = newRating;
        }
        return ex;
      });
    });
  };

  const editFilm = (filmId, data) => {
    setFilms((exFilms) => {
      return exFilms.map((ex) => {
        if (filmId === ex.id) {
          return {
            id: filmId,
            title: data.title,
            favorite: data.favorite,
            watchDate: data.watchDate,
            rating: data.rating,
          };
        } else {
          return ex;
        }
      });
    });
  };
  const filters = {
    all: "All Films",
    favorite: "Favorite Films",
    "best-rated": "Best Rated Films",
    "seen-last-month": "Seen-Last-Month Films",
    unseen: "Unseen Films",
  };
  return (
    <div className="App">
      <BrowserRouter>
        <PageLayout open={open} setOpen={setOpen}>
          <Routes>
            {Object.entries(filters).map((filter) => {
              return (
                <Route
                  path={`/${filter[0]}`}
                  element={
                    <ListFilms
                      films={films}
                      open={open}
                      deleteFilm={deleteFilm}
                      editInline={editInline}
                      filmAutoIncrement={filmAutoIncrement}
                      filters={filters}
                      filter={filter}
                    />
                  }
                />
              );
            })}
            <Route path="add" element={<AddFilm addFilm={addFilm} />} />
            <Route path="edit">
              <Route path=":id" element={<EditFilm editFilm={editFilm} />} />
            </Route>
            <Route path="*" element={<Navigate to="/all" />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
