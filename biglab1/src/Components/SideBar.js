import { Collapse } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

function SideBar(props) {
	return (
		<Collapse in={props.open} className="col-12 d-md-block col-md-3">
			<aside id="side-bar">
				<ListGroup variant="flush" className="my-2" defaultActiveKey={"#All"}>
					<ListGroup.Item
						action
						href="#All"
						onClick={() => props.setFilterSelected("All")}
					>
						All
					</ListGroup.Item>
					<ListGroup.Item
						action
						href="#Favorite"
						onClick={() => props.setFilterSelected("Favorite")}
					>
						Favorites
					</ListGroup.Item>
					<ListGroup.Item
						action
						href="#BestRated"
						onClick={() => props.setFilterSelected("Best Rated")}
					>
						Best Rated
					</ListGroup.Item>
					<ListGroup.Item
						action
						href="#SeenLastMonth"
						onClick={() => props.setFilterSelected("Seen Last Month")}
					>
						Seen Last Month
					</ListGroup.Item>
					<ListGroup.Item
						action
						href="#Unseen"
						onClick={() => props.setFilterSelected("Unseen")}
					>
						Unseen
					</ListGroup.Item>
				</ListGroup>
			</aside>
		</Collapse>
	);
}

export default SideBar;
