import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import dayjs from "dayjs";

function AddFilm(props) {
	const [showForm, setShowForm] = useState(false);
	return showForm ? (
		<FilmForm addFilm={props.addFilm} />
	) : (
		<Button onClick={() => setShowForm(true)}>Add film</Button>
	);
}

function FilmForm(props) {
	const [id, setId] = useState("");
	const [title, setTitle] = useState("");
	const [favorite, setFavorite] = useState(false);
	const [watchDate, setWatchDate] = useState(dayjs());
	const [rating, setRating] = useState(0);

	return (
		<Form>
			<Form.Group>
				<Form.Label>ID</Form.Label>
				<Form.Control
					type="number"
					value={id}
					onChange={(event) => setId(event.target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Film Title</Form.Label>
				<Form.Control
					type="text"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Watch Date</Form.Label>
				<Form.Control
					type="date"
					value={watchDate.format("YYYY-MM-DD")}
					onChange={(event) => setWatchDate(event.target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Rating</Form.Label>
				<Form.Control
					type="number"
					value={rating}
					onChange={(event) => setRating(event.target.value)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Favorite</Form.Label>
				<Form.Check
					type="checkbox"
					value={favorite}
					onChange={(event) => setFavorite(event.target.value)}
				/>
			</Form.Group>

			<Button type="submit" className="my-3">
				Save
			</Button>
		</Form>
	);
}

export default AddFilm;
