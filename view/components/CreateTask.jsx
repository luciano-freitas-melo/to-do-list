import axios from "axios";
import { useState } from "react";


export const CreateTask = () => {
    const [task, setTask] = useState("");

    const onSubmit = async (e) => {
        try {
            const response = await axios.put('/create',
                {
                    name: task
                })
               
        } catch (error) {
            console.log('Erro:', error);
        }
    }
    return (
        <form className="flex w-full justify-center items-center" onSubmit={onSubmit}>
            <input type='text'
                value={task}
                onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Adicionar</button>
        </form>
    )
}