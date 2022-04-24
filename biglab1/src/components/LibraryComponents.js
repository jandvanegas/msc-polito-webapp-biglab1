import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {ListGroup, Navbar, FormControl, Form, Container, Row, Col, Table, Button} from 'react-bootstrap'
import dayjs from 'dayjs'

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

function SideBar(props) {
    return <ListGroup defaultActiveKey='#All'>
            <ListGroup.Item action href='#All' onClick={() => props.setFilterSelected("All")} >
                All
            </ListGroup.Item>
            <ListGroup.Item action href='#Favorites' onClick={() => props.setFilterSelected("Favorites")} >
                Favorites
            </ListGroup.Item>
            <ListGroup.Item action href='#Best Rated' onClick={() => props.setFilterSelected("Best Rated")} >
                Best Rated
            </ListGroup.Item>
            <ListGroup.Item action href='#Seen Last Month' onClick={() => props.setFilterSelected("Seen Last Month")} >
                Seen Last Month
            </ListGroup.Item>
            <ListGroup.Item action href='#Unseen' onClick={() => props.setFilterSelected("Unseen")} >
                Unseen
            </ListGroup.Item>
      </ListGroup>
}

function Films(props) {
  return <Container>
    <Row className='d-flex flex-row justify-content-start'>
      <Col xs={4}>
        <h1 className='text-dark'>{props.title}</h1>
      </Col>
    </Row>
    <Row>
      <FilmsTable films={props.films} filterSelected={props.filterSelected}/>
    </Row>
  </Container>

}

function FilmsTable(props) {
  return <Table>
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
        props.films.filter((film) => {
            if (props.filterSelected === "Favorites") {
                return film.favorite;
            }
            else if (props.filterSelected === "Best Rated") {
                return film.score === 5;
            }
            else if (props.filterSelected === "Seen Last Month") {
                return ("watchDate" in film) && (dayjs().subtract(30, 'days')).isBefore(film.watchDate);
            }
            else if (props.filterSelected === "Unseen") {
                return !("watchDate" in film);
            }
            return true;
        }).map((film) => <FilmRow film={film} key={film.id}/>)
      }
    </tbody>
  </Table>
}

function FilmRow(props) {
  const favorite = <input class="form-check-input" type="checkbox" value="" checked={props.film.favorite}></input>
  return <>
    <tr>
      <td className='d-flex flex-row justify-content-start'>
        <Button variant='light'><i className='bi bi-pencil'></i></Button>
        <Button variant='light'><i className='bi bi-trash'></i></Button>
        {props.film.name}
      </td>
      <td>{favorite} Favorite</td>
      <td>{props.film.watchDate?.format('YYYY-MM-DD')} </td>
      <td>{props.film.score} </td>
    </tr>
  </>
}


export { AppNavbar, SideBar, Films }