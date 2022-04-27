import { ListGroup } from "react-bootstrap";

function SideBar(props) {
  return (
    <ListGroup defaultActiveKey="#All">
      <ListGroup.Item
        action
        href="#All"
        onClick={() => props.setFilterSelected("All")}
      >
        All
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#Favorites"
        onClick={() => props.setFilterSelected("Favorites")}
      >
        Favorites
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#Best Rated"
        onClick={() => props.setFilterSelected("Best Rated")}
      >
        Best Rated
      </ListGroup.Item>
      <ListGroup.Item
        action
        href="#Seen Last Month"
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
  );
}
export { SideBar };
