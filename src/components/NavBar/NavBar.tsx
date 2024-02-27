import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import { Basket, Person } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import { TaskService } from "../../Service/TaskService";
import { toast } from "react-toastify";
import { Task } from "../../Types/Task";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";

const NavBar = () => {

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  //Agregar nueva tarea

  const createTask = async (newTask: Task) => {
    try {
      const result = await TaskService.createTask(newTask);
      console.log('Nueva tarea agregada', result.id);
      navigate(`/detalle/${result.id}`);//Ir al detalle de la tarea creada

      //Muestra una notificación de éxito utilizando react-toastify
      toast.success('Tarea creada correctamente', {
        position: "top-right",
        autoClose: 2000, //Cerrar automaticamente despúes de 2 segundos
      });
    } catch (error) {
      //Muestra una notificación de error si la creación de la tarea falla
      toast.error('Error al crear la tarea', {
        position: "top-right",
        autoClose: 2000,
      });
      console.error('Error al crear la tarea:', error);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="Desarrollo en Argentina">Desarrollo en Argentina </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link>Inicio</Nav.Link>

              <NavDropdown title="Tareas" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Por Hacer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"> Por Testear</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"> Completada </NavDropdown.Item>
              </NavDropdown>

              {/*------------------------------Agregar una nueva tarea---------------------------*/}
              <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
            </Nav>

            <Nav className="d-none d-md-flex ms-auto">
              <Nav.Link href="#carrito">
                <Basket />
              </Nav.Link>

              <Nav.Link href="#Usuario">
                <Person />
              </Nav.Link>
            </Nav>

            <div className="d-md-none">
              <ul className="navbar- nav me-auto-mb 2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="#ticket">Ticket</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#perfil">Perfil</a>
                </li>
              </ul>
            </div>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalAgregarTarea showModal={showModal} handleClose={handleCloseModal} createTask={createTask}></ModalAgregarTarea>
    </>
  )
}

export default NavBar