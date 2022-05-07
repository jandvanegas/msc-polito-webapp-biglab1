import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./Components/Navigation";
import Body from "./Components/Body";
import dayjs from "dayjs";
import { useState } from "react";

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
	const deleteFilm = (filmID) => {
		setFilms((oldFilms) => oldFilms.filter((film) => film.id !== filmID));
	};
	const addFilm = (film) => {
		setFilms((oldFilms) => [...oldFilms, film]);
	};
	return (
		<div className="App">
			<Navigation open={open} setOpen={setOpen} />
			<Body
				films={films}
				open={open}
				addFilm={addFilm}
				deleteFilm={deleteFilm}
			/>
		</div>
	);
}

export default App;
