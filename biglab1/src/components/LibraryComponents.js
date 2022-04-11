import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from 'react-bootstrap/Navbar'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

function AppNavbar() {
  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <Navbar bg="primary" variant="dark" expand="md" fixed="top">
          <div className="col p-2">
            <div className="d-flex justify-content-start">
              <Navbar.Brand>
                <div className="col">
                  <i className='bi bi-collection-play text-white'> </i>
                  Film Library
                </div>
              </Navbar.Brand>
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="col">
              <Form inline>
                <FormControl
                  type="search"
                  placeholder="Search"
                  arial-label="Search"
                  size='sm' />
              </Form>
            </div>
            <div className="col">
              <div className="d-flex justify-content-end">
                <Navbar.Text>
                  <div className='col p-2'>
                    <i className='bi bi-person-circle text-white'> </i>
                  </div>
                </Navbar.Text>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

    </>
  )
}

export { AppNavbar }