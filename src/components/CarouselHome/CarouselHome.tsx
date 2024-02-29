import { Carousel } from "react-bootstrap"

const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item >
          <img
            className='d block w-100'
            style={{ maxHeight: "500px", objectFit: 'cover' }}
            src='https://img.freepik.com/foto-gratis/despertador-vintage-rosa-portatil-abierto_23-2147943535.jpg?t=st=1709170923~exp=1709174523~hmac=b43d9545878640f2ac43d6a1b7da7fdd18dbd847f86f389e0bca150d411fbc09&w=740' />

          <Carousel.Caption style={{ color: 'black', textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
            <h3>TIEMPOS</h3>
            <p>Las demoras de terminación de tus tareas.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className='d block w-100'
            style={{ maxHeight: "500px", objectFit: 'cover' }}
            src='https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg?t=st=1709171489~exp=1709175089~hmac=52b8e0c819fb36d6934b69c4060990f70405e0606446a3ffdde848a85d8c8651&w=740'
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
            src='https://img.freepik.com/foto-gratis/codificadores-que-discuten-sobre-compilacion-codigo-fuente-descubren-errores-piden-explicaciones-al-resto-equipo-frente-multiples-pantallas-que-ejecutan-algoritmos-desarrolladores-software-haciendo-trabajo-equipo_482257-41856.jpg?t=st=1709171089~exp=1709174689~hmac=d5d15ef1cf534226d2c477482c127addc41dd3575955525e07071513bdbe76b8&w=826' />

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
