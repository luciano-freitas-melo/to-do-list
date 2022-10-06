import { useState } from "react";


export const CreateTask = () => {
    const [task, setTask] = useState("");
    2
    const onSubmit = (e) => {
        e.preventDefault();
        alert(task)
    }
    return (
        <div className="">
            <form onSubmit={onSubmit}>
                <input type='text'
                    value={task}
                    onChange={(e) => setTask(e.target.value)} />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}