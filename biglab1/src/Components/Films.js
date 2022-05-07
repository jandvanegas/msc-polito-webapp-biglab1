import { Table } from "react-bootstrap";
import { CheckBoxActive, CheckBoxNotActive } from "./CheckBox";
import RatingStars from "./RatingStars";
import dayjs from "dayjs";

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
						<FilmRow film={film} key={film.id} />
					))}
			</tbody>
		</Table>
	);
}

function FilmRow(props) {
	return (
		<tr>
			<FilmData film={props.film}></FilmData>
		</tr>
	);
}

function FilmData(props) {
	return (
		<>
			<td>{props.film.title}</td>
			<td>
				{props.film.favorite === true ? (
					<CheckBoxActive />
				) : (
					<CheckBoxNotActive />
				)}
			</td>
			<td>
				{props.film.watchDate !== null
					? props.film.watchDate.format("MMMM DD, YYYY")
					: ""}
			</td>
			<td>
				<RatingStars rating={props.film.rating} />
			</td>
		</>
	);
}

export default Films;
