import { Carousel } from "react-bootstrap"

const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item >
          <img
            className='d block w-100'
            style={{ maxHeight: "500px", objectFit: 'cover' }}
            src="public/assets/images/pink-vintage-alarm-clock-open-laptop.jpg" />

          <Carousel.Caption style={{ color: 'black', textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
            <h3>TIEMPOS</h3>
            <p>Las demoras de terminación de tus tareas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d block w-100'
            style={{ maxHeight: "500px", objectFit: 'cover' }}
            src="public/assets/images/programming-background-with-person-working-with-codes-computer.jpg"
          />
          <Carousel.Caption style={{ textShadow: '0px 0px 10px rgba(255,255,255,0.8)' }}>
            <h3>SEGUIMIENTO DE TAREAS</h3>
            <p>Tus tareas en orden</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className='d block w-100'
            style={{ maxHeight: "500px", objectFit: 'cover' }}
            src="public/assets/images/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork.jpg" />

          <Carousel.Caption style={{textShadow: '0px 0px 10px rgba(255,255,255,0.8)'}}>
            <h3>MIEMBROS</h3>
            <p>
              Responsable de cada tarea.
            </p>
          </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselHome
