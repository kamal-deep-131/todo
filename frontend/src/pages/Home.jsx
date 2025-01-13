import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-hot-toast';
import axios from "axios"

const Home = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const { isLoggedIn } = useContext(AuthContext);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
        else {
            fetchTasks();
        }
    }, [isLoggedIn, navigate]);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${baseUrl}/todo`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(response?.data?.todo)
        } catch (error) {
            toast.error("Error fetching tasks");
            console.log("Error in fetchTask:", error)
        }
    };



    const handleAddTask = async () => {
        if (!newTask.trim()) {
            toast.error("Task is empty");
            return;
        }
        try {
            const response = await axios.post(`${baseUrl}/todo/add`, { title: newTask }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks([...tasks, response.data]);
            console.log(response)
            setNewTask("");
            toast.success("Task added successfully");
        } catch (error) {
            toast.error("Error adding task");
            console.log("Error in adding task: ", error)
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center items-center py-4">
                <h1 className="text-4xl font-bold">Todo App</h1>
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="place-items-center w-1/3">
                    <InputField
                        label="New Task"
                        placeholder="Enter a task"
                        name="task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        type="text"
                    />
                    <button
                        onClick={handleAddTask}
                        className="btn btn-primary my-4 block w-full"
                    >
                        Add Task
                    </button>

                    <ul>
                        {/* <p>{tasks}</p> */}
                        {tasks.map((task) => (
                            <li key={task._id} className="my-2 p-2 border rounded flex justify-between items-center">
                                <span >{task.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
