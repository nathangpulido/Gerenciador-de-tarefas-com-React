import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description: "Aprofundar os conhecimentos em React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Cálculo",
      description: "Estudar toda a base necessária para ingressar no cálculo",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar algoritmos e estrutura de dados",
      description:
        "Revisar a base de algoritmos de ordenação e as principais estrutura de dados e como implementar",
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
