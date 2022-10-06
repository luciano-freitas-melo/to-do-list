
export const TaskItem = (task, key) => {
    console.log(task)
    return(
        <div className= "flex justify-center w-full bg-black h-10 p-2 m-5" key={key}>
            <h1 className="text-white">{task.task.name}</h1>
        </div>
    )
} 