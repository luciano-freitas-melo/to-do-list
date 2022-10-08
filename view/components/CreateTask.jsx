import axios from "axios";
import { useState } from "react";


export const CreateTask = ({toggleRefresh}) => {
    const [task, setTask] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            toggleRefresh();
            await axios.post('/create',
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