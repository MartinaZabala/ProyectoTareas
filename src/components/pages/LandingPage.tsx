
import CategoriaSelector from "../CategoriasSelector/CategoriaSelector"
import CarouselHome from "../CarouselHome/CarouselHome"
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas"
import { useEffect, useState } from "react"
//import { TaskService } from "../../Service/TaskService"
import { Task } from "../../Types/Task"
//import data from "../../data/data.json"
import { TaskService } from "../../Service/TaskService"

//const loadData = () => JSON.parse(JSON.stringify(data));
const LandingPage = () => {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTask, setFilteredTasks] = useState<Task[]>([]); //Estado para almacenar tareas filtradas
  const [selectedCategory, setSelectedCategory] = useState<string>('');//Estado para la categoria seleccionada

  useEffect(() => {
    const fetchTasks = async () => {
       const taskData = await TaskService.getAllTasks();
       setTasks(taskData);
     };
     fetchTasks();
     
  }, []);

  //Efecto para filtrar las tareas cuando se selecciona una categoria
  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase());
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);//Si no hay categoría seleccionada, mostrar todas las tareas
    }
  }, [selectedCategory, tasks]);
  return (
    <>
      <CarouselHome />
      <CategoriaSelector onSelectedCategoria={setSelectedCategory} />
      <CategoriasTareas tasks={filteredTask.length > 0 ? filteredTask : tasks} />

    </>
  )
}

export default LandingPage
