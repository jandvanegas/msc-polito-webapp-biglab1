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
					<Films films={props.films} filterSelected={filterSelected} />
				</Col>
			</Row>
			<Row>
				<Col className="d-flex col-12 justify-content-end">
					<AddFilm />
				</Col>
			</Row>
		</Container>
	);
}

export default Body;
