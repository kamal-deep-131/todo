import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { InputField } from "../components"

const Home = () => {

    // const token = localStorage.getItem('token');
    const token = "123"
    const navigate = useNavigate()
    const [tasks, setTasks] = useState(["kamal", "Aman"]);
    const [newTask, setNewTask] = useState("");


    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [navigate, token]);

    const handleAddTask = () => { }


    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center items-center py-4">
                <h1 className="text-2xl font-bold">Todo App</h1>
            </div>
            <div className='w-full flex justify-center items-center'>
                <div className='place-items-center w-1/3'>
                    <InputField label="New Task" placeholder="Enter a task" name="task" value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" />
                    <button onClick={handleAddTask} className="btn btn-primary my-4 block w-full">Add Task</button>

                    <ul>
                        {tasks.map((task) => (
                            <li>{task}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home