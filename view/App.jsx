import axios from 'axios';
import { useEffect, useState } from 'react';
import { CreateTask } from './components/CreateTask';
import { TaskItem } from './components/Task';
import { TaskList } from './components/TaskList';

export const App = () => {
  const [refreshContent, setRefreshContent] = useState(true);
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await axios.get("/");
      setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (refreshContent) {
      getTasks();
      setRefreshContent(false);
    }
  }, [refreshContent])



  return (
    <div className='h-full w-full flex-col'>
      {/* if a new task has been created, the content in API must be refreshed */}
      <CreateTask />
      <TaskList tasks={tasks} />
    </div>
  )
}


