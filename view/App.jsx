import axios from 'axios';
import { useEffect, useState } from 'react';
import { CreateTask } from './components/CreateTask';
import { TaskList } from './components/TaskList';

export const App = () => {
  const [refreshContent, setRefreshContent] = useState(true);
  const [tasks, setTasks] = useState([]);

  const toggleRefresh = () => {
    setRefreshContent(!refreshContent);
  }

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await axios.get("/");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getTasks();

  }, [refreshContent])



  return (
    <div className='h-full w-full flex-col'>
      {/* if a new task has been created, the content in API must be refreshed */}
      <CreateTask toggleRefresh={toggleRefresh} />
      <TaskList tasks={tasks} />
    </div>
  )
}


