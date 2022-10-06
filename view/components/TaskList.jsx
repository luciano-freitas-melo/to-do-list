import { TaskItem } from "./Task"


export const TaskList = (tasks) => {
    return (
        <div>
            {Array.from(tasks.tasks).map((item, index) => {
                    return (
                        <TaskItem task={item} key={index}/>
                    )
                })
                }
        </div>
    )
}