import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Col, FormControl, Form } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="md" fixed="top">
      <Col>
        <FilmBrand />
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Col>
          <FilmSearchForm />
        </Col>
        <Col>
          <FilmUser />
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
}

function FilmBrand() {
  return (
    <Navbar.Brand className="d-flex justify-content-start">
      <i className="bi bi-collection-play text-white"> </i>
      Film Library
    </Navbar.Brand>
  );
}

function FilmUser() {
  return (
    <Navbar.Text className="d-flex justify-content-end">
      <i className="bi bi-person-circle text-white"> </i>
    </Navbar.Text>
  );
}

function FilmSearchForm() {
  return (
    <Form inline>
      <FormControl
        type="search"
        placeholder="Search"
        arial-label="Search"
        size="sm"
      />
    </Form>
  );
}

export { AppNavbar };
