import { useEffect, useState } from "react"
import { Task } from "../../Types/Task"
import CategoriasSelector from "../CategoriasSelector/CategoriaSelector";
import CategoriasTareas from "../CategoriasTareas/CategoriasTareas";
import { TaskService } from "../../Service/TaskService";

const Categoria = () => {
  const [tasks, setTaks] = useState<Task[]>([]);
  const[selectedCategory, setSelectedCategory] = useState<String>(''); //Estado para la categoria seleccionada

  useEffect(()=>{
      const fetchTasks = async () =>{
        const tasksData = await TaskService.getAllTasks();
        setTaks(tasksData);
      };

      fetchTasks();
  }, []);

  //Filtra las tareas por la categoria seleccionada
  const filteredTasks = selectedCategory
  ? tasks.filter (task => task. estado.toUpperCase() === selectedCategory.toUpperCase())
  : tasks;
  
  return (
    <div className="container mt-5">
      <CategoriasSelector onSelectedCategoria={setSelectedCategory}/> {/* Pasa la función para manejar la seleccion de categoria*/}
      <CategoriasTareas tasks= {filteredTasks}/> {/** Pasa las tareas filtradas al componente CategoriasTareas */}
    </div>
  )
}

export default Categoria
