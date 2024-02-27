
import {Route, Routes} from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import DetalleTareaPages from "../pages/DetalleTareaPages"

const AppRoutes: React.FC =  () => {
  return (
    <Routes>
        <Route path="/" element= {<LandingPage/>}/>
        <Route path= "/detalle/:taskId" element={<DetalleTareaPages/>}/>
    </Routes>
  )
}

export default AppRoutes
