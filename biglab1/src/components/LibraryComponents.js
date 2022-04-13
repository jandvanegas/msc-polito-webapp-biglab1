import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

function AppNavbar() {
  return (
    <Navbar bg="primary" variant="dark" expand="md" fixed="top">
      <Col><FilmBrand /></Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Col><FilmSearchForm /></Col>
        <Col><FilmUser /></Col>
      </Navbar.Collapse>
    </Navbar>
  )
}

function FilmUser() {
  return <Navbar.Text className='d-flex justify-content-end'>
    <i className='bi bi-person-circle text-white'> </i>
  </Navbar.Text>
}

function FilmSearchForm() {
  return <Form inline>
    <FormControl
      type="search"
      placeholder="Search"
      arial-label="Search"
      size='sm' />
  </Form>
}

function FilmBrand() {
  return <Navbar.Brand className='d-flex justify-content-start'>
    <i className='bi bi-collection-play text-white'> </i>
    Film Library
  </Navbar.Brand>
}

function SideBar() {
  return <Container>
    <Row className='p-2 bg-primary text-white border-bottom'>All</Row>
    <Row className='p-2 border-bottom'>Favorites</Row>
    <Row className='p-2 border-bottom'>Best Rated</Row>
    <Row className='p-2 border-bottom'>Seen Last Month</Row>
    <Row className='p-2 border-bottom'>Unseen</Row>
  </Container>
}

function Films(props) {
  return <Container>
    <Row className='d-flex flex-row justify-content-start'>
      <Col xs={2}>
        <h1 className='text-dark'>{props.title}</h1>
      </Col>
    </Row>
    <Row>
      <FilmsTable films={props.films} />
    </Row>
  </Container>

}

function FilmsTable(props) {
  return <Table striped>
    <thead>
      <tr>
        <th>Name</th>
        <th>Favorite</th>
        <th>Watch</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {
        props.films.map((film) => <FilmRow film={film} key={film.id} />)
      }
    </tbody>
  </Table>
}

function FilmRow(props) {
  return <>
    <tr>
      <td>{props.film.name} </td>
      <td>{props.film.favorite} </td>
      <td>{props.film.watchedDate} </td>
      <td>{props.film.score} </td>
    </tr>
  </>
}


export { AppNavbar, SideBar, Films }