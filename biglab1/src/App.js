import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dayjs from 'dayjs'
import { AppNavbar, SideBar, Films } from './components/LibraryComponents'

const fakeFilms = [
  { id: 1, name: 'Pulp Fiction', favorite: true, watchDate: dayjs('2022-03-10'), score: 5 },
  { id: 2, name: '21 Grams', favorite: true, watchDate: dayjs('2022-03-17'), score: 4 },
  { id: 3, name: 'Star Wars', favorite: false },
  { id: 4, name: 'Matrix', favorite: false, },
  { id: 5, name: 'Shrek', favorite: false, watchDate: dayjs('2022-03-21'), score: 3 },
];

const filterTitle = 'Filter:All'

function App() {
  return (
    <Container className="App">
      <Row>
        <AppNavbar />
      </Row>
      <Row>
        <Col xs={4}>
          <SideBar/>
        </Col>
        <Col xs={8}>
          <Films films={fakeFilms} title={filterTitle} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
