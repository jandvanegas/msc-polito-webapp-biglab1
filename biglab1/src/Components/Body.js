import { Container, Row, Col } from "react-bootstrap";
import Films from "./Films";
import AddFilm from "./AddFilm";
import SideBar from "./SideBar";
import { useState } from "react";

function Body(props) {
	const [filterSelected, setFilterSelected] = useState("All");

	return (
		<Container fluid>
			<Row>
				<SideBar setFilterSelected={setFilterSelected} open={props.open} />
				<Col className="col-12 col-md-9">
					<div className="d-flex justify-content-start m-3">
						<h1>{filterSelected}</h1>
					</div>
					<Films
						films={props.films}
						deleteFilm={props.deleteFilm}
						filterSelected={filterSelected}
					/>
					<AddFilm addFilm={props.addFilm} />
				</Col>
			</Row>
		</Container>
	);
}

export default Body;
