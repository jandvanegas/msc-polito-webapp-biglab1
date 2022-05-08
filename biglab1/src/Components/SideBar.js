import { Collapse } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

function SideBar(props) {
  return (
    <Collapse in={props.open} className="col-12 d-md-block col-md-3">
      <aside id="side-bar">
        <ListGroup
          variant="flush"
          className="my-2"
          defaultActiveKey={`#${props.filter[0]}`}
        >
          {Object.entries(props.filters).map((filter) => {
            return (
              <ListGroup.Item
                href={`#${filter[0]}`}
                key={filter[0]}
                action
                onClick={() => props.setFilterSelected(filter)}
              >
                {filter[1]}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </aside>
    </Collapse>
  );
}

export default SideBar;
